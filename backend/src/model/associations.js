import User from "./user.model.js";
import Booking from "./bookings.model.js";
import TimeSlot from "./time_slots.js";
import Court from "./courts.model.js";
import BookingResource from "./booking_resource.js";
import Coach from "./coaches.model.js";
import Equipment from "./equipment.model.js";


User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });

TimeSlot.hasMany(Booking, { foreignKey: "timeSlotId" });
Booking.belongsTo(TimeSlot, { foreignKey: "timeSlotId" });


Court.hasMany(Booking, { foreignKey: "courtId" });
Booking.belongsTo(Court, { foreignKey: "courtId" });


Booking.hasMany(BookingResource, { foreignKey: "bookingId" });
BookingResource.belongsTo(Booking, { foreignKey: "bookingId" });

BookingResource.belongsTo(Court, {
  foreignKey: "resourceId",
  constraints: false,
});

BookingResource.belongsTo(Coach, {
  foreignKey: "resourceId",
  constraints: false,
});

BookingResource.belongsTo(Equipment, {
  foreignKey: "resourceId",
  constraints: false,
});
