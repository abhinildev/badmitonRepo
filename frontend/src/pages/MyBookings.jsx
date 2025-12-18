import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { fetchMyBookings } from "../api/bookingApi";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchMyBookings()
      .then(res => {
        setBookings(res.data?.data || []);
      })
      .catch(() => setBookings([]));
  }, []);

  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-10 py-16">
        <h2 className="text-3xl font-semibold mb-6">My Bookings</h2>

        {bookings.length === 0 && (
          <p className="text-gray-600">No bookings yet.</p>
        )}

        <div className="space-y-4">
          {Array.isArray(bookings) &&
            bookings.map(b => (
              <div key={b.id} className="border rounded p-4">
                <p>Date: {b.bookingDate}</p>
                <p>Total: ₹{b.totalPrice}</p>
              </div>
            ))}
        </div>
      </main>
    </>
  );
}
