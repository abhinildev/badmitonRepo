import api from "./axios";

export const fetchCourts = () => api.get("/admin/courts");
export const fetchTimeSlots = () => api.get("/timeslots");
export const fetchEquipment = () => api.get("/admin/equipment");
export const fetchCoaches = () => api.get("/admin/coaches");

export const calculatePrice = (payload) =>
  api.post("/pricing/calculate", payload);

export const createBooking = (payload) =>
  api.post("/bookings/book", payload);

export const fetchMyBookings = () =>
  api.get("/bookings/my");
