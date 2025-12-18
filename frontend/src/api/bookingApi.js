import api from "./axios";

export const fetchCourts = () => api.get("/admin/courts");
export const fetchTimeSlots = () => api.get("/timeslots");
export const fetchEquipment = () => api.get("/admin/equipment");
export const fetchCoaches = () => api.get("/admin/coaches");

export const calculatePrice = (payload) =>
  api.post("/pricing/calculate", payload);

export const createBooking = (payload) =>{
const token=localStorage.getItem("token")
  api.post("/bookings/book", payload,{
    headers:{
        Authorization:`Bearer ${token}`
    }
  });
}
export const fetchMyBookings = () =>
  api.get("/bookings/my");
