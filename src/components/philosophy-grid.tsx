"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const philosophyItems = [
  {
    id: "01",
    title:
      "With us, there are no surprises—just straight talk and genuine commitment.",
    tag: "HONESTY",
    color: "bg-yellow-300 ",
    size: "col-span-1",
  },
  {
    id: "02",
    title:
      "We act with urgency to ensure progress and deliver results efficiently. Every moment matters.",
    tag: "EFFICIENCY",
    color: "bg-violet-500 ",
    size: "col-span-1 md:col-span-2",
    tooltip: [
      {
        name: "John Doe",
        role: "Software Engineer",
        image: "/photo-1.avif",
      },
      {
        name: "Jane Smith",
        role: "UX Designer",
        image: "/photo-2.avif",
      },
      {
        name: "Emily Davis",
        role: "Frontend Developer",
        image: "/photo-3.avif",
      },
      {
        name: "Michael Wilson",
        role: "Backend Developer",
        image: "/photo-4.avif",
      },
      {
        name: "Sarah Thompson",
        role: "Data Scientist",
        image: "/photo-5.avif",
      },
    ],
  },
  {
    id: "03",
    title: "Embrace hard work",
    tag: "DEDICATION",
    color: "bg-orange-300 ",
    size: "col-span-1",
  },
  {
    id: "04",
    title:
      "We're here to help you aim higher, break limits, and achieve what others might think impossible.",
    tag: "ASPIRATION",
    color: "bg-lime-300 ",
    size: "col-span-1 md:col-span-2",
  },
  {
    id: "05",
    title: "DO HARD THINGS",
    tag: "RESILIENT",
    color: "bg-zinc-300 ",
    size: "col-span-1 md:col-span-2",
  },
  {
    id: "06",
    title: "Grow 1% every day",
    tag: "GROWTH MINDSET",
    color: "bg-green-200 ",
    size: "col-span-1",
  },
  {
    id: "07",
    title:
      "We value fresh ideas, bold solutions, and the freedom to be creative",
    tag: "CREATIVITY",
    color: "bg-rose-300 ",
    size: "col-span-1",
  },
  {
    id: "08",
    title: "Commit to continuous learning and improvement",
    tag: "LEARNING",
    color: "bg-blue-200 ",
    size: "col-span-1 md:col-span-2",
  },
  {
    id: "09",
    title:
      "Every project, every solution we create is aimed at contributing to something greater.",
    tag: "CONTRIBUTION",
    color: "bg-yellow-300  ",
    size: "col-span-1 md:col-span-2",
  },
  {
    id: "10",
    title: "Build trust through actions, not just words.",
    tag: "TRUST",
    color: "bg-[#F77C73] ",
    size: "col-span-1 md:col-span-2",
  },
];

export default function PhilosophyGrid() {
  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm md:text-base text-purple-600 dark:text-purple-400 mb-2">
            Our Values
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Philosophy in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
              Action
            </span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            At Everything Talent, Bringing Our Values to Life Through Meaningful
            Actions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {philosophyItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.size}`}
            >
              <Card
                className={`h-full ${item.color} border-none shadow-sm hover:shadow-md transition-shadow duration-200`}
              >
                <div className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <span className="text-xl font-bold text-gray-500 dark:text-gray-400">
                        {item.id}
                      </span>
                    </div>
                    <p className="text-base md:text-lg font-bold text-gray-900  mb-4 ">
                      {item.title}
                    </p>
                    <div className="mt-auto">
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                        #{item.tag}
                      </span>
                    </div>
                    {item.tooltip && (
                      <div className="flex flex-wrap items-start">
                        {item.tooltip.map((tooltipItem, i) => (
                          <div
                            key={i}
                            className="group relative z-0 -mr-5 mb-2 flex items-center transition-all duration-200 ease-in-out hover:z-10 hover:scale-110"
                          >
                            <div className="relative overflow-hidden rounded-full bg-white">
                              <div className="absolute inset-0 bg-size pointer-events-none animate-bg-position from-violet-500 from-30% via-cyan-400 via-50% to-pink-500 to-80% bg-[length:300%_auto] opacity-15 group-hover:bg-gradient-to-r"></div>
                              <img
                                src={tooltipItem.image}
                                alt={tooltipItem.name}
                                className="rounded-full object-cover m-1 w-10 h-10"
                              />
                            </div>
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded bg-slate-900 p-2 text-white opacity-0 transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:opacity-100 dark:bg-slate-100 dark:text-slate-900">
                              <div className="text-sm font-semibold">
                                {tooltipItem.name}
                              </div>
                              <div className="text-sm">{tooltipItem.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
