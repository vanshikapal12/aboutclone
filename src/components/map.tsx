"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WorldMap } from "@/components/ui/world-map";

export default function Map() {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col w-full bg-slate-200">
      {/* Hero Section - Responsive height with min-height to ensure visibility */}
      <section className="relative w-full min-h-[50vh] h-screen max-h-[800px] flex items-center justify-center bg-slate-900 dark:bg-black light:bg-slate-100 overflow-hidden">
        {/* World Map Background - Absolute positioning to fill the section */}
        <div className="absolute inset-0 z-10 opacity-50 sm:opacity-70 md:opacity-100 bg-slate-200">
          <div className="w-fullh-full bg-slate-500">
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

        {/* Central Card - Improved responsive sizing */}
        <div className="relative z-20 w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-[95%] sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
            <div className="p-2 xs:p-3 sm:p-5 md:p-7 lg:p-9 rounded-lg xs:rounded-xl sm:rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-md border border-transparent relative overflow-hidden">
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-2xl border border-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 -z-10"></div>
              <div className="absolute inset-[1px] rounded-lg xs:rounded-xl sm:rounded-2xl bg-transparent -z-10"></div>

              <div className="text-center space-y-1 xs:space-y-2 sm:space-y-3">
                <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white dark:text-white light:text-slate-900 leading-tight">
                  Join Our{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-yellow-300 to-fuchsia-500">
                    Mission
                  </span>
                </h1>
                <p className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-300 dark:text-slate-300 light:text-slate-800 max-w-md sm:max-w-lg md:max-w-xl mx-auto">
                  Help us reimagine the future of hiring in the tech industry.
                </p>
                <div className="pt-1 xs:pt-2 sm:pt-3">
                  <Button className="relative bg-black text-white hover:bg-slate-900 dark:bg-black dark:hover:bg-slate-900 light:hover:text-white px-2 xs:px-3 sm:px-4 md:px-5 py-1 sm:py-2 h-auto text-xs xs:text-sm sm:text-base md:text-lg group overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Start Here{" "}
                      <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
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
        </div>
      </section>
    </div>
  );
}
