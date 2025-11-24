import { WeatherDataType } from "@/types/weather.types";
import { Cloud, Droplets, Thermometer, Sun, Wind, CloudRain } from "lucide-react";

export default function WeatherCard({ data }: { data: WeatherDataType | null }) {
  const estadoIcono =
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
      className="max-w-lg min-w-[400px] w-full rounded-2xl shadow-lg p-8 relative bg-[rgba(255,255,255,0.12)] backdrop-blur-lg"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      {/* Ciudad y estado principal */}
      <div className="flex items-center gap-5 mb-2">
        {estadoIcono}
        <div>
          <h2 className="text-2xl font-bold leading-6">
            {data?.name}, {data?.sys.country}
          </h2>
          <p className="capitalize text-base mt-2">{data?.weather[0].description}</p>
        </div>
      </div>
      {/* Temperatura */}
      <div className="flex items-center mt-6 mb-3 gap-4">
        <span className="text-5xl font-extrabold">
          {data?.main.temp !== undefined ? `${Math.round(data.main.temp)}°` : "--"}
        </span>
        {data?.main.feels_like !== undefined && (
          <span className="text-lg opacity-80">
            {`${Math.round(data.main.feels_like)}° sensación`}
          </span>
        )}
      </div>
      {/* Datos secundarios ordenados horizontalmente */}
      <div className="flex justify-between mt-4 mb-2">
        <div className="flex flex-col items-center gap-1">
          <Droplets size={25} />
          <span className="font-bold text-sm">{data?.main.humidity ?? "--"}%</span>
          <span className="text-xs opacity-60">Humedad</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Wind size={25} />
          <span className="font-bold text-sm">{data?.wind.speed ?? "--"} m/s</span>
          <span className="text-xs opacity-60">Viento</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Cloud size={25} />
          <span className="font-bold text-sm">{data?.clouds.all ?? "--"}%</span>
          <span className="text-xs opacity-60">Nubosidad</span>
        </div>
      </div>
      {/* Botón fijo abajo a la derecha */}
      <button
        style={{ background: "#f7d4c0", color: "var(--background)", borderRadius: "12px" }}
        className="absolute right-6 -bottom-5 px-4 py-2 font-semibold shadow"
      >
        Ver más datos
      </button>
    </section>
  );
}
