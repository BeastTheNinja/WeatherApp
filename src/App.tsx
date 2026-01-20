import { useState } from "react";
import { LoadingScreen } from "./Components/LoadingScreen";
import { ErrorMessage } from "./Components/ErrorMessage";
import { TabNavigation } from "./Components/TabNavigation";
import { WeatherHome } from "./Components/weather/WeatherHome";
import { WeatherForecast } from "./Components/weather/WeatherForecast";
import { WeatherAbout } from "./Components/weather/WeatherAbout";
import { useWeatherData } from "./hooks/useWeatherData";
import { getHourPoints, getForecast, getCurrentHour } from "./utils/weatherHelpers";

function App() {
  // State til at holde styr på hvilken fane der er aktiv
  const [activeTab, setActiveTab] = useState("hjem");

  // Hent vejrdata med vores custom hook
  const { loading, error, weatherData } = useWeatherData();

  // Vis loading screen mens data hentes
  if (loading) {
    return <LoadingScreen />;
  }

  // Vis fejlbesked hvis der er en fejl
  if (error) {
    return <ErrorMessage error={error} />;
  }

  // Hvis der ikke er nogen data, vis ingenting
  if (!weatherData) return null;

  // Beregn data for visning ved hjælp af vores helper funktioner
  const hours = getHourPoints(weatherData);
  const currentHour = getCurrentHour(hours);
  const forecast = getForecast(hours);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="mx-auto max-w-md p-4 sm:p-6">
        {/* Header */}
        <header className="text-center mb-8 pt-4">
          <div className="inline-block">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Vejr App
            </h1>
            <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-2"></div>
          </div>
        </header>

        {/* Navigation mellem forskellige sider */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Hovedindhold - viser den valgte side */}
        <main className="animate-fadeIn">
          {activeTab === "hjem" && <WeatherHome current={currentHour} />}
          {activeTab === "prognose" && <WeatherForecast days={forecast} />}
          {activeTab === "om" && <WeatherAbout />}
        </main>
      </div>
    </div>
  );
}

export default App;