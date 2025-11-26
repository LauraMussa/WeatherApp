const API_KEY_ = process.env.NEXT_PUBLIC_API_KEY;
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getWeatherByCity = async (city: string) => {
  try {
    const response = await fetch(`${API_URL}/weather?q=${city}&appid=${API_KEY_}&units=metric&lang=es`);
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

export const getWeatherUpcomingDays = async (city: string) => {
  try {
    const response = await fetch(`${API_URL}/forecast?q=${city}&appid=${API_KEY_}&units=metric&lang=es`);
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Error al obtener upcoming datos");
    }
    const data = await response.json();
    console.log("esta es mi lista", data.list);
    return data.list;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
