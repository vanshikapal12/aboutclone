"use client";

// import { useState, useEffect } from "react";
import Image from "next/image";
// import { useTheme } from "next-themes";

export default function StorySection() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] dark:before:bg-gradient-radial dark:before:from-white dark:before:to-transparent dark:after:from-sky-800 dark:after:via-blue-800 dark:opacity-50 sm:w-full">
        {/* Story Section Start */}
        <div className="container mx-auto mt-2 md:mt-10 p-2 md:p-4 flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-2 md:p-4 mt-4 md:mt-20">
            <h2 className="mb-4 md:mb-6 text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              The
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400">
                {" "}
                Story{" "}
              </span>
              Behind Us
            </h2>
            <h4 className="text-lg md:text-xl mt-2 text-left text-slate-700 dark:text-slate-300">
              It all started with one question: What if hiring didn&apos;t have
              to feel like gambling on a hunch?
            </h4>
            <div className="flex flex-wrap justify-center mt-6 md:mt-12 gap-2 md:gap-4">
              <div className="w-full sm:w-[calc(50%-0.5rem)] p-1 md:p-2">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow h-auto min-h-40 border-2 border-transparent hover:border-2 bg-gradient-to-br from-slate-200 via-gray-50 to-transparent dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-105 transition-all duration-300 relative overflow-hidden gradient-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-purple-400 mb-2"
                  >
                    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
                    <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
                    <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
                    <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
                    <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
                    <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
                    <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
                    <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
                    <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
                  </svg>

                  <h6 className="font-semibold text-slate-900 dark:text-white">
                    AI-Powered
                  </h6>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                    Advanced AI/ML Algorithm for precise matching
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-[calc(50%-0.5rem)] p-1 md:p-2">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow h-auto min-h-40 border-2 border-transparent hover:border-2 bg-gradient-to-br from-slate-200 via-gray-50 to-transparent dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-105 transition-all duration-300 relative overflow-hidden gradient-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-purple-400 mb-2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>

                  <h6 className="font-semibold text-slate-900 dark:text-white">
                    Human-Centric
                  </h6>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                    Built by recruiters, for recruiters
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-[calc(50%-0.5rem)] p-1 md:p-2">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow h-auto min-h-40 border-2 border-transparent hover:border-2 bg-gradient-to-br from-slate-200 via-gray-50 to-transparent dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-105 transition-all duration-300 relative overflow-hidden gradient-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-purple-400 mb-2"
                  >
                    <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
                    <path d="M22 10v6"></path>
                    <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
                  </svg>

                  <h6 className="font-semibold text-slate-900 dark:text-white">
                    Skill Assessment
                  </h6>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                    Comprehensive skill evaluation system
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-[calc(50%-0.5rem)] p-1 md:p-2">
                <div className="p-3 md:p-4 bg-white rounded-lg shadow h-auto min-h-40 border-2 border-transparent hover:border-2 bg-gradient-to-br from-slate-200 via-gray-50 to-transparent dark:from-black dark:via-slate-900 dark:to-slate-950 hover:scale-105 transition-all duration-300 relative overflow-hidden gradient-border">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-purple-400 mb-2"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>

                  <h6 className="font-semibold text-slate-900 dark:text-white">
                    Future-Ready
                  </h6>
                  <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                    Constantly evolving with industry needs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-2 md:p-4 mt-6 md:mt-20 relative h-[300px] md:h-[560px] transition-transform duration-200 hover:scale-x-105 overflow-hidden rounded-2xl">
            <Image
              src="/our-story.svg"
              alt="Team collaboration session"
              width={800}
              height={600}
              className="rounded-lg w-full h-auto object-cover"
              layout="responsive"
            />
          </div>
        </div>
        {/* Story Section End */}
      </div>

      {/* Add style tag for gradient border effect */}
      <style jsx global>{`
        .gradient-border {
          position: relative;
          z-index: 0;
        }

        .gradient-border::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: 0;
          padding: 2px;
          border-radius: 0.5rem;
          background: transparent;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .gradient-border:hover::before {
          background: linear-gradient(to right, #7c3aed, #3b82f6, #06b6d4);
          opacity: 1;
        }
      `}</style>
    </main>
  );
}
