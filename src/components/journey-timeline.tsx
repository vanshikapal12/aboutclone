"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
// import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ReactLenis } from "lenis/react";

// Define interfaces for the component props
interface Stat {
  value: string;
  label: string;
}

interface TimelineCardProps {
  year: string;
  label: string;
  description: string;
  image: string;
  stats: Stat[];
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

// Timeline data
const timelineData = [
  {
    year: "2024",
    label: "The Future is Now",
    description:
      "Launched Everything AI 2.0 with enhanced AI-powered features, cutting-edge technologies, and improved user experience.",
    image: "/2024.webp",
    // color: "#6366f1",
    stats: [
      { value: "50K+", label: "Users" },
      { value: "98%", label: "Satisfaction" },
      { value: "2x Faster", label: "Processing" },
    ],
  },
  {
    year: "2023",
    label: "Growth & Expansion",
    description:
      "Added advanced machine learning models for user-centric automation, prediction accuracy by 30%, improving AI data handling for best-in-class user experience.",
    image: "/2023.webp",
    // color: "",
    stats: [
      { value: "+30%", label: "Accuracy" },
      { value: "15+", label: "Integrations" },
      { value: "25K+", label: "Users" },
    ],
  },
  {
    year: "2022",
    label: "The Beginning",
    description:
      "Everything AI was officially launched! Developed state-of-the-art predictive performance features for data processing with machine learning, a foundation for growth in intelligent user solutions.",
    image: "/2022.jpg",
    // color: "#ec4899",
    stats: [
      { value: "10+", label: "Features" },
      { value: "15K+", label: "Early Users" },
      { value: "5+", label: "Awards" },
    ],
  },
];

export default function JourneyTimeline() {
  // const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ReactLenis root>
      <main
        ref={container}
        className="bg-slate-100 dark:bg-slate-950 transition-colors duration-300 "
      >
        {/* Theme Toggle
        <div className="fixed top-4 right-4 z-50">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full bg-white/50 backdrop-blur-sm border-slate-200 dark:bg-slate-800/50 dark:border-slate-700"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div> */}
        {/* Hero Section */}
        <section className="h-[40vh] w-full grid place-content-center relative ">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

          <div className="text-center space-y-4 px-4 relative z-10">
            <p className="text-sm uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Our Values & Achievements
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
                Journey
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-slate-700 dark:text-slate-300">
              Explore the milestones that have shaped our path to innovation,
              where every step brings us closer to transforming the future.
            </p>
            <div className="pt-4">
              <Button className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                Subscribe to updates <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        {/* Timeline Cards Section */}
        <section className="w-full">
          {timelineData.map((item, i) => {
            const targetScale = 1 - (timelineData.length - i) * 0.05;
            return (
              <TimelineCard
                key={`timeline_${i}`}
                index={i}
                year={item.year}
                label={item.label}
                description={item.description}
                image={item.image}
                stats={item.stats}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
        {/* Footer */}
      </main>
    </ReactLenis>
  );
}

const TimelineCard = ({
  year,
  label,
  description,
  image,
  stats,
  index,
  progress,
  range,
  targetScale,
}: TimelineCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-150 flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className="flex flex-col relative h-[600px] w-[100%] max-w-7xl rounded-xl p-6 md:p-10 origin-top text-slate-900 dark:text-white shadow-xl bg-white dark:bg-slate-900 transition-colors"
      >
        {/* Opaque Background */}
        <div className="absolute inset-0 bg-white dark:bg-slate-900 rounded-xl" />

        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <div className="text-sm font-medium opacity-80">{label}</div>
              <h3 className="text-3xl md:text-4xl font-bold">{year}</h3>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Description and Stats */}
            <div className="md:w-[40%]">
              <p className="text-sm md:text-base opacity-90">{description}</p>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {stats.map((stat, statIndex) => (
                  <div
                    key={statIndex}
                    className="p-3 rounded-lg bg-slate-100 dark:bg-white/10 border border-slate-300 dark:border-white/20"
                  >
                    <div className="text-lg font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="relative md:w-[80%] h-[200px] md:h-[400px] rounded-lg overflow-hidden">
              <motion.div
                className="w-full h-full"
                style={{ scale: imageScale }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${year} milestone`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
