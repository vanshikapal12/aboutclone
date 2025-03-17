"use client";

import {
  Users,
  Lightbulb,
  Rocket,
  TrendingUp,
  Star,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function CompanyValuesSection() {
  return (
    <section className="container mx-auto px-4 py-10 mt-30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Image */}
        <div className="relative w-full h-64 lg:h-auto lg:w-auto">
          <Image
            src="/insight-img-2.webp"
            alt="Professional working with data visualizations"
            layout="fill"
            className="object-cover object-center rounded-4xl"
            priority
          />
        </div>

        {/* Right side - Values */}
        <div className="w-full p-8 lg:p-12 bg-slate-100 dark:bg-gray-800">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-[#e94dff]">How We </span>
            <span className="text-[#a8ff78]">Thrive</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-10">
            At Everything Talent, we break the norm. Driven by community, we
            empower individuals to innovate, learn, and push boundaries—
            fostering shared growth and a relentless pursuit of excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Value Card 1 */}
            <div className="bg-white dark:bg-[#1a1a2e] shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="text-[#e94dff] mb-3">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Community-Driven
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We build strong connections and foster collaboration within our
                team.
              </p>
            </div>
            {/* Value Card 2 */}
            <div className="bg-white dark:bg-[#1a1a2e] shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="text-[#a8ff78] mb-3">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Innovation First
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We encourage creative thinking and novel approaches to
                challenges.
              </p>
            </div>
            {/* Value Card 3 */}
            <div className="bg-white dark:bg-[#1a1a2e] shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="text-[#e94dff] mb-3">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Action Oriented
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We transform ideas into tangible results through decisive
                action.
              </p>
            </div>
            {/* Value Card 4 */}
            <div className="bg-white dark:bg-[#1a1a2e] shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="text-[#a8ff78] mb-3">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Continuous Growth
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We embrace learning and development as core principles.
              </p>
            </div>
            {/* Value Card 5 */}
            <div className="bg-white dark:bg-[#1a1a2e] shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="text-[#e94dff] mb-3">
                <Star className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Excellence Pursuit
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We strive for exceptional quality in everything we do.
              </p>
            </div>
            {/* Value Card 6 */}
            <div className="bg-white dark:bg-[#1a1a2e] shadow-md rounded-lg p-6 hover:shadow-lg transition-all">
              <div className="text-[#a8ff78] mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Shared Success
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We celebrate achievements and grow together as one team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
