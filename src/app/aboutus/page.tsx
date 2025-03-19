import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Squares } from "@/components/ui/squares-background";

// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Check } from "lucide-react";
import StandardsTabs from "@/components/standard-tabs";
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

        {/* background */}
        {/* First Section */}
        <main className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="relative z-8 px-1">
            {/* <div className="absolute -z-10 w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] rounded-full border border-purple-500/20 top-[-25px] sm:top-[-50px] left-[-50px] sm:left-[-100px]"></div> */}
            {/* <div className="absolute -z-10 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] rounded-full border border-purple-500/10 top-[-75px] sm:top-[-150px] left-[-100px] sm:left-[-200px]"></div> */}

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

      {/* second section */}
      <StandardsTabs />

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
