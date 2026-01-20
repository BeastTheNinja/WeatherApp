export type OpenMeteoForecastResponse = {
    latitude: number;
    longitude: number;
    elevation: number;
    hourly: {
        time: string[];
        temperature_2m: number[];
    };
};

export type HourPoint = { time: Date; temp: number };

export type ForecastDay = { date: Date; min: number; max: number; avg: number };