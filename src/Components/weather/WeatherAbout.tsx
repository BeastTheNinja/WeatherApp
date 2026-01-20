export function WeatherAbout() {
    const technologies = [
        { name: "React", color: "from-cyan-400 to-blue-500" },
        { name: "TypeScript", color: "from-blue-500 to-blue-600" },
        { name: "Vite", color: "from-purple-400 to-purple-600" },
        { name: "Tailwind CSS", color: "from-teal-400 to-cyan-500" },
    ];

    const links = [
        { name: "Open-Meteo API", url: "https://open-meteo.com/" },
        { name: "React Docs", url: "https://react.dev/" },
        { name: "Vite Docs", url: "https://vitejs.dev/" },
        { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
    ];

    return (
        <section
            className="rounded-3xl bg-white/80 backdrop-blur-sm p-6 shadow-xl border border-white/20"
            aria-labelledby="about-title"
        >
            <h2 id="about-title" className="text-xl font-bold text-slate-800 mb-6">
                Om denne app
            </h2>

            <div className="space-y-4">
                <div>
                    <h3 className="font-semibold text-slate-700 mb-3">
                        Teknologier
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                        {technologies.map((tech) => (
                            <div
                                key={tech.name}
                                className={`bg-gradient-to-r ${tech.color} rounded-xl p-3 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105`}
                            >
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-slate-700 mb-3">
                        Nyttige links
                    </h3>
                    <div className="space-y-2">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-3 bg-gradient-to-r from-slate-50 to-slate-100 hover:from-blue-50 hover:to-purple-50 rounded-xl p-3 transition-all duration-300 hover:shadow-md hover:scale-105 border border-slate-200"
                            >
                                <span className="font-medium text-slate-700 hover:text-blue-600">
                                    {link.name}
                                </span>
                                <span className="ml-auto text-slate-400">→</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}