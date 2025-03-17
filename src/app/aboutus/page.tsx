import Image from "next/image";
import { ArrowRight, DiamondIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Check } from "lucide-react";
import StorySection from "@/components/story-section";
import CompanyValuesSection from "@/components/company-value-section";
import JourneyTimeline from "@/components/journey-timeline";
import PhilosophyGrid from "@/components/philosophy-grid";
import Map from "@/components/map";
import Footer from "@/components/footer";

export default function page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-6 md:py-8 pb-12 md:pb-16">
        <header className="flex justify-between items-center mb-6 md:mb-12">
          <div className="font-bold text-lg md:text-xl">Everything Talent</div>
        </header>

        {/* First Section */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="relative z-8 px-1">
            <div className="absolute -z-10 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] rounded-full border border-purple-500/20 top-[-25px] sm:top-[-50px] left-[-50px] sm:left-[-100px]"></div>
            <div className="absolute -z-10 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full border border-purple-500/10 top-[-75px] sm:top-[-150px] left-[-100px] sm:left-[-200px]"></div>

            <div className="space-y-4 md:space-y-6">
              <div className="uppercase text-xs md:text-sm tracking-wider font-medium">
                About Us
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Shaping the Next Generation of HR{" "}
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Tech
                </span>
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent">
                  Recruitment.
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-xs sm:max-w-md">
                At Everything Talent, we help you launch your recruitment into a
                new dimension.
              </p>

              <Button
                size="lg"
                className="group bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black dark:hover:bg-gray-100 h-11 md:h-12 mt-2 md:mt-4"
              >
                Start for Free Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="relative mt-6 md:mt-8 lg:mt-0 w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto transform transition-transform duration-200 hover:scale-105">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden p-0.5 md:p-1 bg-gradient-to-r from-purple-500 via-yellow-300 to-pink-500">
              <Image
                src="/heroBg2.webp"
                alt="Team looking at recruitment analytics dashboard"
                width={600}
                height={600}
                className="rounded-xl md:rounded-2xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </main>
      </div>

      {/* Second Section */}
      <main className="h-200">
        <div className="text-center px-4 md:px-6 mb-8 md:mb-16 mt-10 md:mt-20">
          <div className="text-purple-600 dark:text-purple-400 text-base md:text-lg font-medium mb-2">
            Our Standards
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            The Fuel for{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-400 dark:from-purple-400 dark:to-blue-300 text-transparent bg-clip-text">
              Our Vision
            </span>
          </h1>

          <p className="text-muted-foreground text-sm md:text-base max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-6 md:mb-8">
            Driven by vision, we provide comprehensive solutions to meet all
            your hiring needs.
          </p>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="bg-purple-50 dark:bg-gray-900 rounded-2xl p-4 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-xl md:text-3xl font-bold">
                  Security-Driven Solutions
                </h1>
                <div className="text-purple-600 dark:text-purple-400 font-medium">
                  Vigilance
                </div>

                <p className="text-muted-foreground text-sm md:text-base">
                  Confidence starts with security, and we are committed to
                  enhancing your experience. Your security is woven into every
                  part of our platform so you can drive forward without a second
                  thought.
                </p>

                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                      <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-xs md:text-sm">
                      Prioritize end-to-end platform security
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                      <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-xs md:text-sm">
                      Ensure protected recruitment experience
                    </span>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                      <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                    </div>
                    <span className="text-xs md:text-sm">
                      Build confidence through data protection
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center md:justify-end mt-6 md:mt-0">
                <div className="relative w-full aspect-video md:aspect-auto md:h-auto">
                  <Image
                    src="/ambition.jpg"
                    alt="Security professional with digital lock interface"
                    width={800}
                    height={600}
                    className="rounded-lg object-cover w-full h-full"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Story Section as the Third Section */}
      <StorySection />

      {/* Philosophy Grid */}
      <PhilosophyGrid />

      <CompanyValuesSection />

      <JourneyTimeline />

      <Map />

      <Footer />
    </div>
  );
}
