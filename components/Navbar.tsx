"use client";
import { useState } from "react";
import { Search,Rainbow } from "lucide-react";
export default function Navbar({ onSearch }: { onSearch: (city: string) => void }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim() !== "") {
      onSearch(city.trim());
      setCity("");
    }
  };

  return (
    <nav className=" p-4 flex items-center justify-between">
      <div className=" flex gap-2 items-center">
        <span className="text-lg mt-1">WeatherSpot</span>
      
        <Rainbow />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Buscar ciudad..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button className="nav-button px-3 py-1 rounded" onClick={handleSearch}>
          <Search />
        </button>
      </div>
    </nav>
  );
}
