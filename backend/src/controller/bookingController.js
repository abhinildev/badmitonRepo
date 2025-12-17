import { createBooking } from "../Services/bookingService.js";

export async function bookCourt(req, res) {
  try {
    const {
      bookingDate,
      timeSlot,
      court,
      equipments,
      coach,
    } = req.body;

    const userId = req.user.id; 

    const result = await createBooking({
      userId,
      bookingDate,
      timeSlot,
      court,
      equipments,
      coach,
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
