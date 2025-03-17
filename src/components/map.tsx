"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, ArrowRight } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map";

export default function Map() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-full bg-slate-800/50 backdrop-blur-sm border-slate-700 dark:bg-slate-800/50 dark:border-slate-700 light:bg-white/50 light:border-slate-200"
        >
          {theme === "dark" ? (
            <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-300" />
          ) : (
            <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Hero Section - Container with overflow hidden */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[600px] flex items-center justify-center bg-slate-900 dark:bg-black light:bg-slate-100 py-8 sm:py-12 md:py-16 overflow-hidden">
        {/* World Map Background - Absolute positioning to fill the section */}
        <div className="absolute inset-0 z-10 opacity-70 sm:opacity-100">
          <div className="w-full h-full">
            <WorldMap
              dots={[
                {
                  start: {
                    lat: 64.2008,
                    lng: -149.4937,
                  }, // Alaska (Fairbanks)
                  end: {
                    lat: 34.0522,
                    lng: -118.2437,
                  }, // Los Angeles
                },
                {
                  start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                  end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                },
                {
                  start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                  end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                },
                {
                  start: { lat: 51.5074, lng: -0.1278 }, // London
                  end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                },
                {
                  start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                  end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                },
                {
                  start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                  end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                },
              ]}
            />
          </div>
        </div>

        {/* Central Card - Fully contained within section with padding adjustment */}
        <div className="relative z-20 w-full max-w-[90%] xs:max-w-[85%] sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
          <div className="p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg xs:rounded-xl sm:rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-md border border-transparent relative overflow-hidden">
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-2xl border border-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 -z-10"></div>
            <div className="absolute inset-[1px] rounded-lg xs:rounded-xl sm:rounded-2xl bg-transparent -z-10"></div>

            <div className="text-center space-y-1 xs:space-y-2 sm:space-y-4 md:space-y-6">
              <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white dark:text-white light:text-slate-900 leading-tight">
                Join Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-yellow-300 to-fuchsia-500">
                  Mission
                </span>
              </h1>
              <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 dark:text-slate-300 light:text-slate-800 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
                Help us reimagine the future of hiring in the tech industry.
              </p>
              <div className="pt-1 xs:pt-2 sm:pt-4">
                <Button className="relative bg-black text-white hover:bg-slate-900 dark:bg-black dark:hover:bg-slate-900 light:hover:text-white px-2 xs:px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-4 h-auto text-xs xs:text-sm sm:text-base md:text-lg group overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Start Here{" "}
                    <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  </span>

                  {/* Gradient border that appears on hover */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="absolute inset-0 rounded border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 z-0"></span>
                    <span className="absolute inset-[2px] rounded bg-white dark:bg-white light:bg-slate-900 z-0"></span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
