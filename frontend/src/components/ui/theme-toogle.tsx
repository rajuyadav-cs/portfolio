"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-11 w-20 rounded-full border border-border bg-card" />
    );
  }

  const dark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="group relative flex h-11 w-20 items-center rounded-full border border-border bg-card p-1 transition-all duration-300 hover:shadow-lg"
    >
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="absolute h-9 w-9 rounded-full bg-primary shadow-lg"
        animate={{
          x: dark ? 36 : 0,
        }}
      />

      <div className="relative z-10 flex w-full items-center justify-between px-2">
        <Sun
          className={`h-4 w-4 transition-all ${
            dark ? "text-muted-foreground" : "text-foreground"
          }`}
        />

        <Moon
          className={`h-4 w-4 transition-all ${
            dark ? "text-foreground" : "text-muted-foreground"
          }`}
        />
      </div>
    </button>
  );
}
