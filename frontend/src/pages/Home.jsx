import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto px-10 py-16">
        <h1 className="text-4xl font-semibold mb-4">
          Book Your Badminton Court Easily
        </h1>

        <p className="text-gray-600 max-w-xl mb-8">
          Reserve indoor and outdoor courts, rent equipment, and book professional
          coaches — all in one place.
        </p>

        <a
          href="/book"
          className="inline-block px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
        >
          Book a Court
        </a>

        {/* Features */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="border rounded-lg p-6 hover:shadow-sm transition">
            <h3 className="font-semibold mb-2">Multiple Courts</h3>
            <p className="text-gray-600 text-sm">
              Choose from indoor and outdoor courts based on availability.
            </p>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-sm transition">
            <h3 className="font-semibold mb-2">Dynamic Pricing</h3>
            <p className="text-gray-600 text-sm">
              Transparent pricing with peak hour and weekend rules.
            </p>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-sm transition">
            <h3 className="font-semibold mb-2">Equipment & Coaches</h3>
            <p className="text-gray-600 text-sm">
              Rent equipment and book experienced coaches if needed.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
