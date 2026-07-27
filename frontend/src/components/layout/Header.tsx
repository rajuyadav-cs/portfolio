"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "../ui/theme-toogle";

interface HeaderProps {
  resume: string;
}

export default function Header({ resume }: HeaderProps) {
  const logo = "Portfolio.";
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % logo.length);
    }, 200);

    return () => clearInterval(interval);
  }, [logo.length]);

  return (
    <header className="border-b border-border/60 bg-card/80 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex min-w-0 items-center">
          <h1 className="select-none bg-linear-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-lg font-bold tracking-[0.25em] text-transparent sm:text-xl">
            {logo.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                animate={{
                  scale: activeIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.15 }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <Button className="h-10 rounded-xl bg-linear-to-r from-blue-600 to-violet-600 px-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02] hover:from-blue-500 hover:to-violet-500 sm:px-4">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Resume</span>
              <span className="sm:hidden">CV</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
