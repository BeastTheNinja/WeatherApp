# Vejr App

En simpel vejr-applikation lavet med React, TypeScript, Vite og Tailwind CSS.

## Hvad er det?

Dette er et begynderprojekt der viser:

- 📱 Hvordan man laver en simpel React app
- 🎨 Hvordan man bruger Tailwind CSS til styling
- 🌤️ Hvordan man henter data fra et API (Open-Meteo)
- 🔄 Hvordan man bruger `useState` og `useEffect` hooks
- 📑 Hvordan man skifter mellem forskellige visninger uden routing

## Kom i gang

### Installation

```bash
npm install
```

### Kør udviklings-server

```bash
npm run dev
```

Åbn [http://localhost:5173](http://localhost:5173) i din browser.

### Byg til produktion

```bash
npm run build
```

## Sådan virker det

### App.tsx (hovedfilen)

- Henter vejrdata fra Open-Meteo API når appen starter
- Bruger `useState` til at gemme data og hvilken fane der er aktiv
- Bruger `useEffect` til at hente data automatisk
- Viser forskellige komponenter baseret på hvilken fane brugeren klikker på

### Komponenter

- **WeatherHome** - Viser det aktuelle vejr
- **WeatherForecast** - Viser 3-dages prognose
- **WeatherAbout** - Viser information om appen

### Ingen routing

Dette projekt bruger IKKE React Router. I stedet bruger vi `useState` til at skifte mellem forskellige visninger. Dette er enklere for begyndere at forstå.

## Teknologier

- **React** - JavaScript framework til at bygge brugergrænseflader
- **TypeScript** - Tilføjer type-sikkerhed til JavaScript
- **Vite** - Hurtig udviklings-server og build-værktøj
- **Tailwind CSS** - CSS framework til styling
- **Open-Meteo API** - Gratis vejr API (ingen API-nøgle nødvendig)

## Links

- [React dokumentation](https://react.dev/)
- [TypeScript dokumentation](https://www.typescriptlang.org/)
- [Vite dokumentation](https://vitejs.dev/)
- [Tailwind CSS dokumentation](https://tailwindcss.com/)
- [Open-Meteo API](https://open-meteo.com/)
