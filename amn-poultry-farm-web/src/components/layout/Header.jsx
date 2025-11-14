export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-semibold">Nap Poultry Farm</div>
          <div className="text-sm text-gray-400 mt-2">
            Freshness you can trust — straight from our coop to your kitchen.
          </div>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <div className="text-sm text-gray-400 mt-2">Email: hello@nappoultry.example</div>
          <div className="text-sm text-gray-400">Phone: +1 (555) 123-4567</div>
        </div>
        <div>
          <div className="font-semibold">Follow</div>
          <div className="flex gap-3 mt-2">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition">Instagram</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition">Facebook</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition">@abigael_ngalu</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-6 text-sm text-gray-400">
          © {new Date().getFullYear()} Nap Poultry Farm — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
