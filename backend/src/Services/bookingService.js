import dbconnection from "../config/db.js";
import Booking from "../model/bookings.model.js";
import BookingResource from "../model/booking_resource.js";
import { calculatePrice } from "./pricing/pricingEngine.js";


export async function createBooking({
  userId,
  bookingDate,
  timeSlot,
  court,
  equipments = [],
  coach = null
}) {
  const transaction = await dbconnection.transaction();

  try {
  
    const pricingResult = await calculatePrice({
      bookingDate,
      timeSlot,
      court,
      equipments,
      coach,
    });

  
    const booking = await Booking.create(
      {
        userId,
        bookingDate,
        timeSlotId: timeSlot.id,
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

   
    for (const eq of equipments) {
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
