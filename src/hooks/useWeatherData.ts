import { useEffect, useState } from "react";
import type { OpenMeteoForecastResponse } from "../types/Types";

const API_URL = "https://api.open-meteo.com/v1/forecast";
const DEFAULT_LATITUDE = 57.05; // Aalborg, Danmark
const DEFAULT_LONGITUDE = 9.92;
const FORECAST_DAYS = 3;

// Custom hook til at hente vejrdata
export function useWeatherData() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [weatherData, setWeatherData] = useState<OpenMeteoForecastResponse | null>(null);

    useEffect(() => {
        async function fetchWeather() {
            setLoading(true);
            setError("");

            try {
                const url = new URL(API_URL);
                url.search = new URLSearchParams({
                    latitude: String(DEFAULT_LATITUDE),
                    longitude: String(DEFAULT_LONGITUDE),
                    hourly: "temperature_2m",
                    forecast_days: String(FORECAST_DAYS),
                    timezone: "auto",
                }).toString();

                const response = await fetch(url.toString());
                if (!response.ok) throw new Error(`Fejl ved hentning (HTTP ${response.status})`);

                const data = (await response.json()) as OpenMeteoForecastResponse;
                setWeatherData(data);
            } catch (e) {
                setError(e instanceof Error ? e.message : String(e));
            } finally {
                setLoading(false);
            }
        }

        fetchWeather();
    }, []);

    return { loading, error, weatherData };
}
