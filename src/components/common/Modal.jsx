export default function BreedModal({ isOpen, onClose, breed }) {
  if (!isOpen || !breed) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl">✕</button>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{breed.name}</h2>
          <p className="text-gray-600 mb-4">{breed.description}</p>
          <h4 className="font-semibold mb-2">Age & Pricing:</h4>
          <ul className="mb-4">
            {breed.ages.map((age, idx) => (
              <li key={idx} className="text-sm">{age.label}: {age.price}</li>
            ))}
          </ul>
          <div className="grid grid-cols-3 gap-2">
            {breed.images.map((img, idx) => (
              <img key={idx} src={img} alt={`${breed.name} ${idx}`} className="h-24 w-full object-cover rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

