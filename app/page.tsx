"use client";
import Navbar from "@/components/Navbar";
import ToggleButton from "@/components/ToggleButton";
import WeatherCard from "@/components/WhaterCard";
import { getWeatherByCity } from "@/services/weather.service";
import { WeatherDataType } from "@/types/weather.types";
import { useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState<WeatherDataType | null>(null);
  const fetchWeather = async (city: string) => {
    try {
      const weatherData = await getWeatherByCity(city);
      setWeather(weatherData);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <div>
      <Navbar onSearch={fetchWeather} />
      <div className="flex justify-end">
        <ToggleButton />
      </div>
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="rounded-2xl shadow-lg bg-[rgba(255,255,255,0.13)] backdrop-blur-lg p-8 ">
          <WeatherCard data={weather} />
        </div>
      </div>
    </div>
  );
}
