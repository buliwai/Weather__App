import axios from "axios";

async function getWeatherAndForecast(coordinates) {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?",
    {
      params: {
        lat: coordinates.lat,
        lon: coordinates.lng,
        exclude: "minutely,hourly,alerts",
        appid: "4899f27ad844d9204f6a7e665c628377",
        units: "metric"
      }
    }
  );

  return response;
}

export default getWeatherAndForecast;
