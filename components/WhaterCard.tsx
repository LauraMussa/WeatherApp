import { WeatherDataType } from "@/types/weather.types";
import { Cloud, Droplets, Thermometer, Sun, Wind, CloudRain, Rainbow } from "lucide-react";
import React from "react";

export default function WeatherCard({ data }: { data: WeatherDataType | null }) {
  const statusIcon =
    data?.weather[0].main === "Clear" ? (
      <Sun size={40} color="#FFD700" />
    ) : data?.weather[0].main === "Clouds" ? (
      <Cloud size={40} color="#9bbcd5" />
    ) : data?.weather[0].main === "Rain" ? (
      <CloudRain size={40} color="#3d85c6" />
    ) : (
      <Thermometer size={40} />
    );

  return (
   <section
  className="max-w-full w-full rounded-2xl shadow-lg p-6 md:p-8 relative backdrop-blur-lg"
  style={{
    background: "var(--background)",
    color: "var(--foreground)",
  }}
>
  {!data ? (
    <div className="flex flex-col justify-center items-center gap-4 min-h-[250px] px-4 md:px-0 text-center">
      <span className="text-lg md:text-xl">
        Introduce el nombre de una ciudad y obtén el pronóstico.
      </span>
      <p className="text-xs md:text-sm opacity-50 italic">Por ejemplo: Buenos Aires, Nueva York, París...</p>
    </div>
  ) : (
    <>
      <div className="flex flex-wrap items-center gap-4 mb-2">
        {statusIcon && React.cloneElement(statusIcon, { size: 40 })} {/* Iconos ya tienen tamaño fijo, mantenlo */}
        <div className="flex-1 min-w-[150px]">
          <h2 className="text-xl md:text-2xl font-bold leading-6">
            {data?.name}, {data?.sys.country}
          </h2>
          <p className="capitalize text-base mt-2">{data?.weather[0].description}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-6 mb-3">
        <span className="text-4xl md:text-5xl font-extrabold">
          {data?.main.temp !== undefined ? `${Math.round(data.main.temp)}°` : "--"}
        </span>
        {data?.main.feels_like !== undefined && (
          <span className="text-base md:text-lg opacity-80">{`${Math.round(data.main.feels_like)}° sensación`}</span>
        )}
      </div>
      <div className="flex flex-wrap justify-between gap-6 mt-4 mb-2 text-center">
        <div className="flex flex-col items-center gap-1 flex-1 min-w-[70px]">
          <Droplets size={25} />
          <span className="font-bold text-sm">{data?.main.humidity ?? "--"}%</span>
          <span className="text-xs opacity-60">Humedad</span>
        </div>
        <div className="flex flex-col items-center gap-1 flex-1 min-w-[70px]">
          <Wind size={25} />
          <span className="font-bold text-sm">{data?.wind.speed ?? "--"} m/s</span>
          <span className="text-xs opacity-60">Viento</span>
        </div>
        <div className="flex flex-col items-center gap-1 flex-1 min-w-[70px]">
          <Cloud size={25} />
          <span className="font-bold text-sm">{data?.clouds.all ?? "--"}%</span>
          <span className="text-xs opacity-60">Nubosidad</span>
        </div>
      </div>
    </>
  )}
</section>

  );
}
