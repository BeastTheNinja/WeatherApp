// Komponent der viser en loading screen mens data hentes
export function LoadingScreen() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Vejr App
                </h1>
                <div className="mt-6 flex justify-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-150"></div>
                </div>
                <p className="mt-4 text-slate-600 font-medium">Henter vejrdata...</p>
            </div>
        </div>
    );
}
