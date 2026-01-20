// Komponent der viser en fejlbesked hvis noget går galt
type ErrorMessageProps = {
    error: string;
};

export function ErrorMessage({ error }: ErrorMessageProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
            <div className="text-center max-w-md">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                    Vejr App
                </h1>
                <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 shadow-lg">
                    <p className="text-red-700 font-semibold mb-2">Ups! Noget gik galt</p>
                    <p className="text-red-600 text-sm">{error}</p>
                </div>
            </div>
        </div>
    );
}
