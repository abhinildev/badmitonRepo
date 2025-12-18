import dbconnection from "../config/db.js";
import Booking from "../model/bookings.model.js";
import BookingResource from "../model/booking_resource.js";
import Court from "../model/courts.model.js";
import Coach from "../model/coaches.model.js";
import Equipment from "../model/equipment.model.js";
import TimeSlot from "../model/time_slots.js";
import { calculatePrice } from "./pricing/pricingEngine.js";

export async function createBooking({
  userId,
  bookingDate,
  timeSlotId,
  courtId,
  equipments = [],
  coachId = null,
}) {
  const transaction = await dbconnection.transaction();

  try {
    const timeSlot = await TimeSlot.findByPk(timeSlotId);
    const court = await Court.findByPk(courtId);
    const coach = coachId ? await Coach.findByPk(coachId) : null;

    if (!timeSlot || !court) {
      throw new Error("Invalid court or time slot");
    }

  
    const equipmentRecords = await Promise.all(
      equipments.map(async (e) => {
        const eq = await Equipment.findByPk(e.id);
        if (!eq) throw new Error("Invalid equipment");
        return { ...eq.toJSON(), quantity: e.quantity };
      })
    );

  
    const pricingResult = await calculatePrice({
      bookingDate,
      timeSlotId,
      courtId,
      equipments: equipmentRecords,
      coachId,
    });


    const booking = await Booking.create(
      {
        userId,
        bookingDate,
        timeSlotId,
        courtId,
        totalPrice: pricingResult.totalPrice,
        status: "CONFIRMED",
      },
      { transaction }
    );

    
    await BookingResource.create(
      {
        bookingId: booking.id,
        resourceType: "COURT",
        resourceId: court.id,
        quantity: 1,
        price: court.basePrice,
      },
      { transaction }
    );

    for (const eq of equipmentRecords) {
      await BookingResource.create(
        {
          bookingId: booking.id,
          resourceType: "EQUIPMENT",
          resourceId: eq.id,
          quantity: eq.quantity,
          price: eq.pricePerSlot * eq.quantity,
        },
        { transaction }
      );
    }

  
    if (coach) {
      await BookingResource.create(
        {
          bookingId: booking.id,
          resourceType: "COACH",
          resourceId: coach.id,
          quantity: 1,
          price: coach.pricePerSlot,
        },
        { transaction }
      );
    }

    await transaction.commit();

    return {
      bookingId: booking.id,
      totalPrice: pricingResult.totalPrice,
      breakdown: pricingResult.breakdown,
    };

  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}
