import { toastError } from "@/app/helpers/alerts";

// https://api.openweathermap.org/data/2.5/weather?q={ciudad}&appid={tu_api_key}&units=metric&lang=es
const API_KEY_ = process.env.NEXT_PUBLIC_API_KEY;

export const getWeatherByCity = async (city: string) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY_}&units=metric&lang=es`
    );
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error al obtener datos de clima ");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
