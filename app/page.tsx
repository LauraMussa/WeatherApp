"use client";
import Navbar from "@/components/Navbar";
import ToggleButton from "@/components/ToggleButton";
import WeatherCard from "@/components/WhaterCard";
import { getWeatherByCity, getWeatherUpcomingDays } from "@/services/weather.service";
import { UpcomingList, WeatherDataType } from "@/types/weather.types";
import { useState } from "react";
import { toastError } from "./helpers/alerts";
import DailyCard from "@/components/DailyCard";

export default function Home() {
  const [weather, setWeather] = useState<WeatherDataType | null>(null);
  const [weatherUpcoming, setWeatherUpcoming] = useState<UpcomingList[] | null>(null);

  const fetchWeather = async (city: string) => {
    try {
      const weatherData = await getWeatherByCity(city);
      const upcomingData = await getWeatherUpcomingDays(city);
      setWeather(weatherData);
      setWeatherUpcoming(upcomingData);
    } catch (error: any) {
      console.log(error);
      const msg = error?.message.charAt(0).toUpperCase() + error.message.slice(1);
      toastError(msg || "Ocurrió un error");
      throw error;
    }
  };

  const groupedByDate: { [date: string]: UpcomingList[] } = {};
  weatherUpcoming?.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!groupedByDate[date]) groupedByDate[date] = [];
    groupedByDate[date].push(item);
  });

  const dailySummaries = Object.entries(groupedByDate).map(([date, items]) => {
    const temps = items.map((i) => i.main.temp);
    const min = Math.min(...temps);
    const max = Math.max(...temps);

    const middayItem = items.find((i) => i.dt_txt.includes("12:00:00")) ?? items[0];

    return {
      date,
      tempMin: min,
      tempMax: max,
      weather: middayItem.weather[0],
    };
  });

  return (
    <div>
      <Navbar onSearch={fetchWeather} />
      <div className="flex justify-end">
        <ToggleButton />
      </div>
      <div className="flex flex-col justify-center items-center min-h-[60vh] gap-20">
        <div className="rounded-2xl shadow-lg bg-[rgba(255,255,255,0.13)] backdrop-blur-lg p-8 ">
          <WeatherCard data={weather} />
        </div>
      <div className="">
        <DailyCard dailySummaries={dailySummaries} />
      </div>
      </div>
    </div>
  );
}
