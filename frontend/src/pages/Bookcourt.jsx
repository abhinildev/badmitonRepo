import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import {
  fetchCourts,
  fetchTimeSlots,
  fetchEquipment,
  fetchCoaches,
  calculatePrice,
  createBooking,
} from "../api/bookingApi";

export default function BookCourt() {
  // --------------------
  // STATE
  // --------------------
  const [courts, setCourts] = useState([]);
  const [slots, setSlots] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [coaches, setCoaches] = useState([]);

  const [date, setDate] = useState("");
  const [courtId, setCourtId] = useState("");
  const [slotId, setSlotId] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [coachId, setCoachId] = useState("");

  const [price, setPrice] = useState(null);

  // --------------------
  // FETCH INITIAL DATA
  // --------------------
  useEffect(() => {
    fetchCourts().then(res => setCourts(res.data?.data || []));
    fetchTimeSlots().then(res => setSlots(res.data?.data || []));
    fetchEquipment().then(res => setEquipment(res.data?.data || []));
    fetchCoaches().then(res => setCoaches(res.data?.data || []));
  }, []);

  // --------------------
  // PRICE CALCULATION
  // --------------------
  const handlePriceCheck = async () => {
    if (!date || !courtId || !slotId) {
      alert("Please select date, court and time slot");
      return;
    }

    try {
      const res = await calculatePrice({
        bookingDate: date,
        courtId,
        timeSlotId: slotId,
        equipments: selectedEquipment,
        coachId: coachId || null,
      });

      setPrice(res.data?.data || null);
    } catch (err) {
      alert("Failed to calculate price");
    }
  };

  // --------------------
  // BOOKING HANDLER
  // --------------------
  const handleBooking = async () => {
    try {
      await createBooking({
        bookingDate: date,
        courtId,
        timeSlotId: slotId,
        equipments: selectedEquipment,
        coachId: coachId || null,
      });

      alert("Booking confirmed!");
      setPrice(null);
    } catch (err) {
      alert("Booking failed");
    }
  };

  // --------------------
  // UI
  // --------------------
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-10 py-16 space-y-6">
        <h2 className="text-3xl font-semibold">Book a Court</h2>

        <input
          type="date"
          className="border px-4 py-2 rounded w-full"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded w-full"
          value={courtId}
          onChange={(e) => setCourtId(e.target.value)}
        >
          <option value="">Select Court</option>
          {Array.isArray(courts) &&
            courts.map(c => (
              <option key={c.id} value={c.id}>
                {c.courtType} – ₹{c.basePrice}
              </option>
            ))}
        </select>

        <select
          className="border px-4 py-2 rounded w-full"
          value={slotId}
          onChange={(e) => setSlotId(e.target.value)}
        >
          <option value="">Select Slot</option>
          {Array.isArray(slots) &&
            slots.map(s => (
              <option key={s.id} value={s.id}>
                {s.startTime} - {s.endTime}
              </option>
            ))}
        </select>

        <select
          className="border px-4 py-2 rounded w-full"
          value={coachId}
          onChange={(e) => setCoachId(e.target.value)}
        >
          <option value="">No Coach</option>
          {Array.isArray(coaches) &&
            coaches.map(c => (
              <option key={c.id} value={c.id}>
                {c.name} – ₹{c.pricePerSlot}
              </option>
            ))}
        </select>

        <Button onClick={handlePriceCheck}>
          Check Price
        </Button>

        {price && (
          <div className="border rounded p-4 bg-gray-50">
            <p className="font-medium mb-2">Price Breakdown</p>

            {Array.isArray(price.breakdown) &&
              price.breakdown.map((b, i) => (
                <p key={i} className="text-sm text-gray-600">
                  {b.label}: ₹{b.amount}
                </p>
              ))}

            <p className="font-semibold mt-2">
              Total: ₹{price.totalPrice}
            </p>
          </div>
        )}

        <Button onClick={handleBooking}>
          Confirm Booking
        </Button>
      </main>
    </>
  );
}
