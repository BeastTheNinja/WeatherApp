import type { HourPoint } from "../../types/Types";

type WeatherHomeProps = {
    current: HourPoint | undefined;
};

export function WeatherHome({ current }: WeatherHomeProps) {
    return (
        <section
            className="rounded-3xl bg-gradient-to-br from-blue-400 via-blue-500 to-purple-500 p-8 shadow-2xl border border-white/20 backdrop-blur-sm"
            aria-labelledby="now-title"
        >
            <h2 id="now-title" className="text-xl font-bold text-white/90">
                Aktuelt vejr
            </h2>
            {current ? (
                <div className="mt-6 text-center">
                    <div className="inline-block bg-white/20 backdrop-blur-md rounded-3xl px-8 py-6 shadow-xl">
                        <p className="text-7xl font-black text-white drop-shadow-lg">
                            {current.temp.toFixed(1)}°
                        </p>
                        <p className="mt-3 text-lg text-white/90 font-medium">
                            Kl. {current.time.toLocaleTimeString("da-DK", { hour: "2-digit", minute: "2-digit" })}
                        </p>
                    </div>
                    <p className="mt-6 text-white/80 text-sm font-medium">Aalborg, Danmark</p>
                </div>
            ) : (
                <p className="mt-4 text-white/70">Ingen data tilgængelig</p>
            )}
        </section>
    );
}