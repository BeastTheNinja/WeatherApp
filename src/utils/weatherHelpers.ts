import type { OpenMeteoForecastResponse, HourPoint, ForecastDay } from "../types/Types";

const FORECAST_DAYS = 3;

// Konverter API data til HourPoint format
export function getHourPoints(data: OpenMeteoForecastResponse): HourPoint[] {
    return data.hourly.time.map((t, i) => ({
        time: new Date(t),
        temp: data.hourly.temperature_2m[i],
    }));
}

// Beregn prognose for de næste dage
export function getForecast(hours: HourPoint[]): ForecastDay[] {
    const dayGroups: Record<string, number[]> = {};

    // Grupper temperaturer efter dato
    hours.forEach((h) => {
        const dateKey = h.time.toISOString().slice(0, 10);
        if (!dayGroups[dateKey]) dayGroups[dateKey] = [];
        dayGroups[dateKey].push(h.temp);
    });

    // Beregn min, max og gennemsnit for hver dag
    return Object.keys(dayGroups)
        .sort()
        .slice(0, FORECAST_DAYS)
        .map((dateKey) => {
            const temps = dayGroups[dateKey];
            return {
                date: new Date(dateKey),
                min: Math.min(...temps),
                max: Math.max(...temps),
                avg: temps.reduce((sum, t) => sum + t, 0) / temps.length,
            };
        });
}

// Find den aktuelle time (nærmeste fremtidige tidspunkt)
export function getCurrentHour(hours: HourPoint[]): HourPoint | undefined {
    const now = new Date();
    return hours.find((h) => h.time >= now) || hours[0];
}
