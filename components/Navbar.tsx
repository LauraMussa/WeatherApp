"use client";
import { useState } from "react";
import { Search, Rainbow } from "lucide-react";
export default function Navbar({ onSearch }: { onSearch: (city: string) => void }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city.trim());
      setCity("");
    }
  };

  return (
    <nav className="p-4 flex flex-wrap items-center justify-between gap-4">
      <div className="flex gap-2 items-center flex-shrink-0">
        <span className="text-lg mt-1">WeatherSpot</span>
        <Rainbow size={24} />
      </div>

      <div className="flex justify-end flex-1 min-w-0 items-center gap-2">
        <input
          type="text"
          placeholder="Buscar ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className=" min-w-0 rounded border border-gray-300 px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          className="nav-button px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
          onClick={handleSearch}
          aria-label="Buscar ciudad"
        >
          <Search size={20} />
        </button>
      </div>
    </nav>
  );
}
