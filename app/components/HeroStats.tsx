"use client";

import { useState, useEffect } from "react";

export default function HeroStats() {
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [yearProgress, setYearProgress] = useState<number>(0);
  const [weather, setWeather] = useState<{ temp: string; condition: string } | null>(null);

  useEffect(() => {
    // Update time every second
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      }));
      setDate(now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
      }));

      // Calculate year progress
      const start = new Date(now.getFullYear(), 0, 1);
      const end = new Date(now.getFullYear() + 1, 0, 1);
      const progress = ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100;
      setYearProgress(Math.round(progress * 10) / 10);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Fetch weather for Kolkata
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=22.5726&longitude=88.3639&current_weather=true`
        );
        const data = await res.json();
        const temp = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;

        // Simple weather code mapping
        let condition = "Clear";
        if (code >= 1 && code <= 3) condition = "Cloudy";
        else if (code >= 45 && code <= 48) condition = "Foggy";
        else if (code >= 51 && code <= 67) condition = "Rainy";
        else if (code >= 71 && code <= 77) condition = "Snowy";
        else if (code >= 80 && code <= 99) condition = "Stormy";

        setWeather({ temp: `${temp}°C`, condition });
      } catch (error) {
        setWeather({ temp: "28°C", condition: "Clear" });
      }
    };

    fetchWeather();

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Left - Current Time */}
      <div className="absolute top-8 left-8">
        <div className="text-xs font-serif text-neutral-500 uppercase tracking-widest mb-1">Local Time</div>
        <div className="text-2xl font-light text-white font-mono tracking-wide">{time}</div>
        <div className="text-xs text-neutral-400 font-mono mt-1">{date}</div>
      </div>

      {/* Top Right - Weather */}
      <div className="absolute top-8 right-8 text-right">
        <div className="text-xs font-serif text-neutral-500 uppercase tracking-widest mb-1">Kolkata</div>
        <div className="text-2xl font-light text-white font-mono tracking-wide">
          {weather?.temp || "—"}
        </div>
        <div className="text-xs text-neutral-400 font-mono mt-1">{weather?.condition || "Loading..."}</div>
      </div>

      {/* Bottom Left - Year Progress */}
      <div className="absolute bottom-28 left-8">
        <div className="text-xs font-serif text-neutral-500 uppercase tracking-widest mb-2">Year Progress</div>
        <div className="flex items-center gap-3">
          <div className="w-32 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-neutral-500 to-white rounded-full transition-all duration-1000"
              style={{ width: `${yearProgress}%` }}
            />
          </div>
          <span className="text-sm font-mono text-white">{yearProgress}%</span>
        </div>
        <div className="text-xs text-neutral-500 font-mono mt-1">of 2025</div>
      </div>

      {/* Bottom Right - Status */}
      <div className="absolute bottom-28 right-8 text-right">
        <div className="text-xs font-serif text-neutral-500 uppercase tracking-widest mb-2">Status</div>
        <div className="flex items-center gap-2 justify-end">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-mono text-white">Available</span>
        </div>
        <div className="text-xs text-neutral-500 font-mono mt-1">Open to work</div>
      </div>
    </>
  );
}
