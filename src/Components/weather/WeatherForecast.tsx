import type { ForecastDay } from "../../types/Types";

type WeatherForecastProps = {
    days: ForecastDay[];
};

export function WeatherForecast({ days }: WeatherForecastProps) {
    return (
        <section
            className="rounded-3xl bg-white/80 backdrop-blur-sm p-6 shadow-xl border border-white/20"
            aria-labelledby="forecast-title"
        >
            <h2 id="forecast-title" className="text-xl font-bold text-slate-800 mb-4">
                3-dages prognose
            </h2>
            <div className="space-y-3">
                {days.map((d, index) => (
                    <div
                        key={d.date.toISOString()}
                        className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 border border-blue-100"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div>
                                    <p className="font-semibold text-slate-800">
                                        {d.date.toLocaleDateString("da-DK", {
                                            weekday: "long",
                                        })}
                                    </p>
                                    <p className="text-xs text-slate-600">
                                        {d.date.toLocaleDateString("da-DK", {
                                            day: "2-digit",
                                            month: "short",
                                        })}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {d.avg.toFixed(1)}°
                                </p>
                                <p className="text-xs text-slate-600">
                                    {d.min.toFixed(0)}° - {d.max.toFixed(0)}°
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}