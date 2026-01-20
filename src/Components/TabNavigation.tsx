// Komponent for navigation mellem forskellige sider
type TabNavigationProps = {
    activeTab: string;
    onTabChange: (tab: string) => void;
};

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
    return (
        <nav className="mb-6">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20 flex gap-2">
                <button
                    onClick={() => onTabChange("hjem")}
                    className={`flex-1 px-4 py-3 font-semibold rounded-xl transition-all duration-300 ${activeTab === "hjem"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md transform scale-105"
                        : "text-slate-600 hover:bg-white/50 hover:text-slate-900"
                        }`}
                >
                    Hjem
                </button>
                <button
                    onClick={() => onTabChange("prognose")}
                    className={`flex-1 px-4 py-3 font-semibold rounded-xl transition-all duration-300 ${activeTab === "prognose"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md transform scale-105"
                        : "text-slate-600 hover:bg-white/50 hover:text-slate-900"
                        }`}
                >
                    Prognose
                </button>
                <button
                    onClick={() => onTabChange("om")}
                    className={`flex-1 px-4 py-3 font-semibold rounded-xl transition-all duration-300 ${activeTab === "om"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md transform scale-105"
                        : "text-slate-600 hover:bg-white/50 hover:text-slate-900"
                        }`}
                >
                    Om
                </button>
            </div>
        </nav>
    );
}
