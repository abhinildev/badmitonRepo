export default function Card({ title, description }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-sm transition">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
