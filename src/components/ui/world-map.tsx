"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({ dots = [], lineColor = "#0ea5e9" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const { theme, resolvedTheme } = useTheme();

  // Create map with responsive grid density
  const getMapConfig = () => {
    // Adjust grid density based on screen size
    const gridDensity = windowWidth < 640 ? 80 : 100;
    return new DottedMap({ height: gridDensity, grid: "diagonal" });
  };

  // Handle window resize
  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Only generate map when we have a window width
  const map = windowWidth ? getMapConfig() : null;

  // Get the current theme
  const currentTheme = resolvedTheme || theme;

  // Generate SVG only if map is available
  const svgMap = map
    ? map.getSVG({
        radius: windowWidth < 640 ? 0.18 : 0.22, // Smaller dots on mobile
        color: currentTheme === "dark" ? "#FFFFFF40" : "#00000040",
        shape: "circle",
        backgroundColor: "transparent", // Use transparent to handle background in CSS
      })
    : "";

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    // Adjust curve height based on screen size
    const curveHeight = windowWidth < 640 ? 30 : 50;
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - curveHeight;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Don't render until we have window dimensions
  if (!windowWidth) return null;

  return (
    <div className="w-full h-full aspect-[2/1] bg-white dark:bg-black relative font-sans overflow-hidden">
      {svgMap && (
        <Image
          src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
          className="h-full w-full object-cover object-center [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
          alt="world map"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          draggable={false}
        />
      )}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth={windowWidth < 640 ? "0.8" : "1"}
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r={windowWidth < 640 ? "1.5" : "2"}
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r={windowWidth < 640 ? "1.5" : "2"}
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from={windowWidth < 640 ? "1.5" : "2"}
                  to={windowWidth < 640 ? "6" : "8"}
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r={windowWidth < 640 ? "1.5" : "2"}
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r={windowWidth < 640 ? "1.5" : "2"}
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from={windowWidth < 640 ? "1.5" : "2"}
                  to={windowWidth < 640 ? "6" : "8"}
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
