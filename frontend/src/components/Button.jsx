export default function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
    >
      {children}
    </button>
  );
}
