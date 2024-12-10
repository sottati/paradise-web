import {
  Sun,
  Cloud,
  CloudSun,
  CloudRain,
  CloudFog,
  CloudSnow,
  CloudDrizzle,
  CloudLightning,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { waitForDebugger } from "inspector";

interface WeatherData {
  current_weather: {
    temperature: number;
    weathercode: number;
  };
  daily: {
    time: string[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
}

const API_URL = "https://api.open-meteo.com/v1/forecast";

async function getWeatherData(): Promise<WeatherData> {
  const res = await fetch(
    `${API_URL}?latitude=-38.0451&longitude=-57.5362&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=America/Argentina/Buenos_Aires&forecast_days=6`,
    { next: { revalidate: 3600 } } // Revalidate every hour
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
}

const getDayName = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("es-ES", { weekday: "short" });
};

const getWeatherIcon = (weatherCode: number) => {
  if (weatherCode === 0) {
    return <Sun className="w-8 h-8 text-yellow-400" />;
  } else if (weatherCode >= 1 && weatherCode <= 3) {
    return <CloudSun className="w-8 h-8 text-white" />;
  } else if (weatherCode === 45 || weatherCode === 48) {
    return <CloudFog className="w-8 h-8 text-white" />;
  } else if (
    (weatherCode >= 51 && weatherCode <= 55) ||
    (weatherCode >= 56 && weatherCode <= 57)
  ) {
    return <CloudDrizzle className="w-8 h-8 text-white" />;
  } else if (
    (weatherCode >= 61 && weatherCode <= 65) ||
    (weatherCode >= 66 && weatherCode <= 67)
  ) {
    return <CloudRain className="w-8 h-8 text-white" />;
  } else if (
    (weatherCode >= 71 && weatherCode <= 75) ||
    weatherCode === 77 ||
    (weatherCode >= 85 && weatherCode <= 86)
  ) {
    return <CloudSnow className="w-8 h-8 text-white" />;
  } else if (weatherCode >= 80 && weatherCode <= 82) {
    return <CloudRain className="w-8 h-8 text-white" />;
  } else if (weatherCode === 95 || weatherCode === 96 || weatherCode === 99) {
    return <CloudLightning className="w-8 h-8 text-yellow-400" />;
  } else {
    return <Cloud className="w-8 h-8 text-gray-400" />;
  }
};

export async function WeatherWidget() {
  let weatherData: WeatherData;

  try {
    weatherData = await getWeatherData();
    console.log(waitForDebugger);
  } catch (error) {
    return (
      <Card className="w-full max-w-md mx-auto bg-red-500">
        <CardContent className="flex items-center justify-center h-96">
          <p className="text-white">Error fetching weather data</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex flex-col justify-between p-3 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 text-white aspect-square">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-2">Chapadmalal</h2>
        <div className="flex flex-row items-center gap-2">
          {getWeatherIcon(weatherData.current_weather.weathercode)}
          <span className="text-5xl">
            {Math.round(weatherData.current_weather.temperature)}°
          </span>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {weatherData.daily.time.slice(1).map((day, index) => (
          <div key={day} className="flex flex-col items-center">
            <span className="text-sm mb-1">{getDayName(day)}</span>
            {getWeatherIcon(weatherData.daily.weathercode[index + 1])}
            <div className="flex justify-between w-full mt-1">
              <span className="text-xs">
                {Math.round(weatherData.daily.temperature_2m_min[index + 1])}°
              </span>
              <span className="text-xs">
                {Math.round(weatherData.daily.temperature_2m_max[index + 1])}°
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
