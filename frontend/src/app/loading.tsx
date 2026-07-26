"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <section
      id="loading"
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background text-foreground"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/bgimg.jpg')] bg-cover bg-center opacity-10 dark:opacity-20" />

      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-cyan-500/10" />

      {/* Loader */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative flex flex-col items-center gap-8 rounded-3xl border border-border bg-card/95 dark:bg-card/80 px-12 py-10 shadow-2xl backdrop-blur-2xl"
      >
        {/* Animated Rings */}
        <div className="relative flex h-20 w-20 items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "linear",
            }}
            className="absolute h-20 w-20 rounded-full border-[3px] border-primary/20 border-t-primary"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            className="absolute h-14 w-14 rounded-full border-[3px] border-cyan-400/20 border-t-cyan-400"
          />

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
            }}
            className="h-3.5 w-3.5 rounded-full bg-primary"
          />
        </div>

        {/* Text */}
        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold tracking-wide">
            Loading Portfolio
          </h2>

          <p className="text-sm text-muted-foreground">
            Preparing experience...
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{
                opacity: [0.3, 1, 0.3],
                y: [0, -4, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
                delay: i * 0.2,
              }}
              className="h-2.5 w-2.5 rounded-full bg-primary"
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
