"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, ChevronRight, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Solutions", path: "/solutions", hasDropdown: true },
  { name: "Pricing", path: "/pricing" },
  { name: "Blog", path: "/blog" },
  { name: "Support", path: "/support" },
  { name: "About", path: "/aboutus" },
]

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <nav className="w-full border-l border-r border-border/40 bg-background dark:bg-gray-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo, Everything Talent Text, and Desktop Navigation */}
        <div className="flex items-center border-2 border-gray-300 rounded-md p-3 ">
          <Link href="/" className="mr-4 flex items-center">
            <div className="relative h-8 w-8">
              <Image src="/acme-logo-dark.png" alt="Logo" width={32} height={32} className="object-contain" />
            </div>
          </Link>
          {/* Always Visible Text */}
          <span className="block lg:hidden whitespace-nowrap text-base font-semibold text-muted-foreground sm:text-sm md:text-lg">
            Everything Talent
          </span>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 md:flex ml-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <div className="flex items-center">
                  {item.name}
                  {item.hasDropdown && (
                    <span className="ml-1 inline-block">
                      <ChevronRight className="h-4 w-4 rotate-90" />
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden mr-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <SheetContent side="right" className="w-[80%] sm:w-[350px]">
              <div className="mt-6 flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="flex items-center py-2 text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronRight className="ml-auto h-4 w-4" />}
                  </Link>
                ))}
                <div className="mt-6 space-y-4">
                  <div className="relative group w-full">
                    <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                    <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Button className="w-full relative" variant="outline">
                      Request a Demo
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <Button className="w-full">Login</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Right Side - CTA, Theme Toggle, Login */}
        <div className="hidden items-center space-x-4 md:flex  border-2 border-gray-300 rounded-md p-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
            <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Button
              variant="outline"
              className="relative rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground dark:text-white border border-border group-hover:border-transparent transition-colors duration-300"
            >
              Request a Demo
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Theme Toggle Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle theme">
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white/30 place-content-center dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-black/20 rounded-lg shadow-lg flex flex-col gap-2"
            >
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className="rounded-lg dark:bg-black/40 bg-slate-200/40 backdrop-blur-[10px] transition-all duration-200 group border hover:gradient-border hover:bg-gradient-to-r from-[#B11AFF]/20 to-[#FF689F]/20 hover:scale-[101%] shadow-lg px-4 py-2"
              >
                <Sun className="mr-2 h-4 w-4 text-yellow-500 " />
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className="rounded-lg dark:bg-black/40 bg-slate-200/40 backdrop-blur-[10px] transition-all duration-200 group border hover:gradient-border hover:bg-gradient-to-r from-[#B11AFF]/20 to-[#FF689F]/20 hover:scale-[101%] shadow-lg px-4 py-2"
              >
                <Moon className="mr-2 h-4 w-4 text-blue-500 " />
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("system")}
                className="rounded-lg dark:bg-black/40 bg-slate-200/40 backdrop-blur-[10px] transition-all duration-200 group border hover:gradient-border hover:bg-gradient-to-r from-[#B11AFF]/20 to-[#FF689F]/20 hover:scale-[101%] shadow-lg px-4 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3h4.5a2.25 2.25 0 012.25 2.25v13.5a2.25 2.25 0 01-2.25 2.25h-4.5A2.25 2.25 0 017.5 18.75V5.25A2.25 2.25 0 019.75 3z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5h15M12 15.75h.008v.008H12v-.008z" />
                </svg>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button className="rounded-md bg-white px-6 text-black hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Login
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
export default Navbar

