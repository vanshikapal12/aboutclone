"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Youtube, Facebook } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Footer() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show theme UI after component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="bg-white text-slate-800 dark:bg-black dark:text-white transition-colors duration-200">
      <div className="container mx-auto px-4 pt-16 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex">
                <div className="w-8 h-8 rounded-full bg-fuchsia-500 relative -mr-1"></div>
                <div className="w-8 h-8 rounded-full bg-sky-400 relative -mr-1"></div>
                <div className="w-8 h-8 rounded-full bg-amber-400 relative"></div>
              </div>
              <h2 className="text-2xl font-bold">Everything Talent</h2>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
              Enhancing hiring with AI-powered assessment and tracking for
              accurate recruitment.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/everythingtalent"
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/everythingtalent"
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.youtube.com/c/everythingtalent"
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://www.facebook.com/everythingtalent"
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>

            {/* Theme Toggle Button */}
            {mounted && (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="flex items-center justify-center rounded-md p-2 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  {theme === "dark"
                    ? "Switch to Light Mode"
                    : "Switch to Dark Mode"}
                </button>
              </div>
            )}
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources/blog"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/success-stories"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/case-studies"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/whitepapers"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/faq"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/hiring-guides"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Hiring Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Get Started
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/pricing"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Hiring Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/for-startups"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Funded Startups
                </Link>
              </li>
              <li>
                <Link
                  href="/free-trial"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Free Trial
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-support"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="/request-demo"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Request Demo
                </Link>
              </li>
              <li>
                <Link
                  href="/trust"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Trust
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/legal/privacy-policy"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/terms"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/cookie-policy"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/ccpa"
                  className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm"
                >
                  CCPA Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Cityscape */}
        <div className="relative w-full h-40 sm:h-60 md:h-80 mb-4 overflow-hidden">
          <Image
            src="/bottom_san_fransisco_skyline.webp"
            alt="San Francisco skyline"
            fill
            className="object-cover object-bottom"
          />
          <div className="absolute top-4 right-4 text-fuchsia-500 font-bold">
            EVERYTHINGTALENT.AI
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-slate-500 dark:text-slate-500 pt-4 border-t border-slate-200 dark:border-slate-800">
          © 2025 Everything Talent Labs, LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
