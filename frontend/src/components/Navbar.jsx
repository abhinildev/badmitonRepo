export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-4 border-b bg-white">
      
      <div className="text-xl font-semibold tracking-wide">
        CourtBook
      </div>

     
      <ul className="flex items-center gap-8 text-gray-700">
        <li>
          <a
            href="/"
            className="hover:text-black transition-colors"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="/book"
            className="hover:text-black transition-colors"
          >
            Book Court
          </a>
        </li>

        <li>
          <a
            href="/bookings"
            className="hover:text-black transition-colors"
          >
            My Bookings
          </a>
        </li>

        <li>
          <a
            href="/login"
            className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
          >
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
}
