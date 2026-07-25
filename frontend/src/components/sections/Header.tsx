"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";
import { wrap } from "module";
import { getHero } from "@/lib/api";

interface HeroData {
  resume: string;
}

export default function Header() {
  const word = "Portfolio.";
  const [active, setActive] = useState(0);
  const [hero, setHero] = useState<HeroData | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % word.length);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % word.length);
    }, 200);

    async function fetchHero() {
      try {
        const data = await getHero();
        setHero(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchHero();

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="select-none">
          <h1 className="bg-linear-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-xl font-bold tracking-widest">
            {word.split("").map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                animate={{ scale: active === i ? 1.4 : 1 }}
                transition={{ duration: 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button className="rounded-xl bg-linear-to-r from-blue-600 to-violet-600 px-4 text-white shadow-lg shadow-blue-500/20 tracking-widest transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-violet-500 hover:shadow-blue-500/40">
            <a href={hero?.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
            <Download className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
