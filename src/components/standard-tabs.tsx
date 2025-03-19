"use client";
import Image from "next/image";

import type React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tiles } from "@/components/ui/tiles";

const DiamondIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    {...props}
  >
    <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
  </svg>
);

export default function StandardsTabs() {
  return (
    <div className=" w-full">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Tiles
          rows={50}
          cols={8}
          tileSize="md"
          className="opacity-30 dark:opacity-20"
        />
      </div>
      <div className="relative z-10 w-full py-8 md:py-16">
        <div className="text-center px-4 md:px-6 mb-8 md:mb-16 mt-10 md:mt-20">
          <div className="inline-block text-black dark:text-white font-medium px-3 py-1 mb-2 bg-gray-600 dark:bg-gray-700 rounded-full">
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

        <div className="container mx-auto px-4">
          <Tabs defaultValue="ambition" className="w-full">
            <TabsList className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-8 h-auto rounded-full w-full max-w-3xl mx-auto dark:bg-gray-900">
              <TabsTrigger
                value="ambition"
                className="rounded-full text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base whitespace-nowrap h-12 sm:h-14 flex items-center justify-center"
              >
                Ambition
              </TabsTrigger>
              <TabsTrigger
                value="satisfaction"
                className="rounded-full text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base whitespace-nowrap h-12 sm:h-14 flex items-center justify-center"
              >
                Satisfaction
              </TabsTrigger>
              <TabsTrigger
                value="integrity"
                className="rounded-full text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base whitespace-nowrap h-12 sm:h-14 flex items-center justify-center"
              >
                Integrity
              </TabsTrigger>
              <TabsTrigger
                value="vigilance"
                className="rounded-full text-center py-3 sm:py-4 px-3 sm:px-4 text-sm sm:text-base whitespace-nowrap h-12 sm:h-14 flex items-center justify-center"
              >
                Vigilance
              </TabsTrigger>
            </TabsList>
            <TabsContent value="ambition">
              <Card className="bg-purple-50 dark:bg-gray-900 rounded-2xl shadow-sm border-0">
                <CardContent className="p-4 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                    <div className="space-y-4 md:space-y-6">
                      <CardTitle className="text-xl md:text-3xl font-bold">
                        Forward-Thinking Innovations
                      </CardTitle>
                      <div className="text-black dark:text-white font-medium">
                        Ambition
                      </div>

                      <p className="text-muted-foreground text-sm md:text-base">
                        We strive to exceed expectations through innovative
                        approaches and cutting-edge solutions. Our ambition
                        drives us to create transformative recruitment
                        experiences.
                      </p>

                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Develop breakthrough recruitment technologies
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Push boundaries to create exceptional experiences
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Set new industry standards through bold initiatives
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-end mt-6 md:mt-0">
                      <div className="relative w-full aspect-video md:aspect-auto md:h-auto">
                        <Image
                          src="/ambition.jpg"
                          alt="Ambition representation"
                          width={600}
                          height={400}
                          className="rounded-lg object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="satisfaction">
              <Card className="bg-purple-50 dark:bg-gray-900 rounded-2xl shadow-sm border-0">
                <CardContent className="p-4 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                    <div className="space-y-4 md:space-y-6">
                      <CardTitle className="text-xl md:text-3xl font-bold">
                        Client-Centered Approach
                      </CardTitle>
                      <div className="text-black dark:text-white font-medium">
                        Satisfaction
                      </div>

                      <p className="text-muted-foreground text-sm md:text-base">
                        We prioritize client satisfaction by delivering
                        personalized solutions that address unique recruitment
                        challenges. Our commitment to excellence ensures lasting
                        partnerships.
                      </p>

                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Tailor solutions to meet specific client needs
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Continuously improve based on client feedback
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Measure success through client satisfaction metrics
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-end mt-6 md:mt-0">
                      <div className="relative w-full max-w-md aspect-video overflow-hidden rounded-lg">
                        <Image
                          src="/some1.avif"
                          alt="Satisfaction representation"
                          fill={true}
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integrity">
              <Card className="bg-purple-50 dark:bg-gray-900 rounded-2xl shadow-sm border-0">
                <CardContent className="p-4 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                    <div className="space-y-4 md:space-y-6">
                      <CardTitle className="text-xl md:text-3xl font-bold">
                        Ethical Business Practices
                      </CardTitle>
                      <div className="text-black dark:text-white font-medium">
                        Integrity
                      </div>

                      <p className="text-muted-foreground text-sm md:text-base">
                        We uphold the highest ethical standards in all our
                        operations. Our transparent processes and honest
                        communication build trust with clients and candidates
                        alike.
                      </p>

                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Maintain transparency in all client interactions
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Adhere to ethical recruitment practices
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Protect confidential information with rigorous
                            security
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-end mt-6 md:mt-0">
                      <div className="relative w-full aspect-video md:aspect-auto md:h-auto">
                        <Image
                          src="/integrity.webp"
                          alt="Integrity representation"
                          width={600}
                          height={400}
                          className="rounded-lg object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="vigilance">
              <Card className="bg-purple-50 dark:bg-gray-900 rounded-2xl shadow-sm border-0">
                <CardContent className="p-4 md:p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
                    <div className="space-y-4 md:space-y-6">
                      <CardTitle className="text-xl md:text-3xl font-bold">
                        Proactive Problem Solving
                      </CardTitle>
                      <div className="text-black dark:text-white font-medium">
                        Vigilance
                      </div>

                      <p className="text-muted-foreground text-sm md:text-base">
                        We remain vigilant in anticipating industry trends and
                        challenges. Our proactive approach allows us to identify
                        opportunities and mitigate risks before they impact our
                        clients.
                      </p>

                      <div className="space-y-2 md:space-y-3">
                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Monitor industry trends to stay ahead of changes
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Implement preventative measures to avoid recruitment
                            pitfalls
                          </span>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="mt-1 bg-purple-100 dark:bg-purple-900/50 p-1 rounded-full">
                            <DiamondIcon className="h-3 w-3 text-purple-600 dark:text-purple-400" />
                          </div>
                          <span className="text-xs md:text-sm">
                            Continuously refine processes for optimal
                            performance
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-end mt-6 md:mt-0">
                      <div className="relative w-full aspect-video md:aspect-auto md:h-auto">
                        <Image
                          src="/security.jpg"
                          alt="Vigilance representation"
                          width={600}
                          height={400}
                          className="rounded-lg object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
