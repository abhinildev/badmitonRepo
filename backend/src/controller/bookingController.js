import { createBooking } from "../Services/bookingService.js";
import Booking from "../model/bookings.model.js";
import TimeSlot from "../model/time_slots.js";
import Court from "../model/courts.model.js";
import BookingResource from "../model/booking_resource.js";
import Coach from "../model/coaches.model.js";
import Equipment from "../model/equipment.model.js";
export async function bookCourt(req, res) {
  try {
    const {
      bookingDate,
      timeSlotId,
      courtId,
      equipments,
      coachId,
    } = req.body;

    const userId = req.user.id; 

    const result = await createBooking({
      userId,
      bookingDate,
      timeSlotId,
      courtId,
      equipments,
      coachId,
    });

    return res.status(201).json({
      success: true,
      message: "Booking confirmed",
      data: result,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to create booking",
      error: error.message,
    });
  }
}
export async function getMyBookings(req, res) {
  try {
    const userId = req.user.id;

    const bookings = await Booking.findAll({
      where: { userId },
      order: [["createdAt", "DESC"]],
      include: [
        { model: TimeSlot },
        { model: Court },
        {
          model: BookingResource,
          include: [Court, Coach, Equipment],
        },
      ],
    });

    return res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch bookings",
    });
  }
}

