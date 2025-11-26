import {
  AshIcon,
  ClearIcon,
  CloudsIcon,
  DrizzleIcon,
  DustIcon,
  FogIcon,
  HazeIcon,
  iconThunderstorm,
  MistIcon,
  RainIcon,
  SandIcon,
  SmokeIcon,
  SnowIcon,
  SquallIcon,
  TornadoIcon,
} from "@/app/helpers/Icons";
import { DailyForecast, weatherMain } from "@/types/weather.types";

const getWeatherIconByMain = (main: string) => {
  switch (main) {
    case weatherMain.Thunderstorm:
      return iconThunderstorm();
    case weatherMain.Drizzle:
      return DrizzleIcon();
    case weatherMain.Rain:
      return RainIcon();
    case weatherMain.Snow:
      return SnowIcon();
    case weatherMain.Clear:
      return ClearIcon();
    case weatherMain.Clouds:
      return CloudsIcon();
    case weatherMain.Mist:
      return MistIcon();
    case weatherMain.Smoke:
      return SmokeIcon();
    case weatherMain.Haze:
      return HazeIcon();
    case weatherMain.Dust:
      return DustIcon();
    case weatherMain.Fog:
      return FogIcon();
    case weatherMain.Sand:
      return SandIcon();
    case weatherMain.Ash:
      return AshIcon();
    case weatherMain.Squall:
      return SquallIcon();
    case weatherMain.Tornado:
      return TornadoIcon();
    default:
      return null;
  }
};

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
const DailyCard = ({ dailySummaries }: { dailySummaries: DailyForecast[] }) => {
  const descriptionToUppercase = (description: string) =>
    description.charAt(0).toUpperCase() + description.slice(1);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-6 p-4 max-w-500 mx-auto">
      {dailySummaries.map((d, i) => (
        <div className="rounded-2xl shadow-lg bg-[rgba(255,255,255,0.13)] backdrop-blur-lg p-5 ">
          <div
            key={i}
            className="relative daily-card rounded-lg shadow-md p-6 flex flex-col items-center text-center"
          >
            <span className="absolute -top-23 left-1/2 transform -translate-x-1/2">
              {getWeatherIconByMain(d.weather.main)}
            </span>

            <p className="mt-5 font-semibold text-lg">{formatDate(d.date)}</p>
            <p className=" mt-1 rounded-2xl px-2 py-0.5 daily-label text-slate-200 ">
              {descriptionToUppercase(d.weather.description)}
            </p>

            <div className="mt-3 flex justify-center gap-4 w-full text-sm daily-card-temp ">
              <p>
                Max: <span className="font-medium">{d.tempMax}°</span>
              </p>
              <p>
                Min: <span className="font-medium">{d.tempMin}°</span>
              </p>
            </div>

            <p className="mt-2 uppercase tracking-wide text-xs ">{d.weather.main}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DailyCard;
