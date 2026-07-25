"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Header,
  Navbar,
  Hero,
  About,
  Education,
  Skills,
  Projects,
  Experience,
  Certifications,
  Contact,
  Footer,
} from "@/components/sections";

export default function ClientLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div
      id="about"
      className="relative flex h-screen flex-col overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-[url('/bgimg.png')] bg-cover bg-center bg-no-repeat opacity-30 pointer-events-none" />
      <Header />

      <main className="overflow-hidden flex flex-1 min-h-0 gap-2 p-2 sm:gap-4 sm:p-4 md:gap-6 md:p-6 lg:gap-8 lg:p-8">
        <aside
          className={cn(
            "z-20 overflow-y-auto rounded-3xl border border-border/60 bg-card/80 px-1 py-2 sm:py-4 sm:px-1  md:py-6 md:px-2  lg:py-8 lg:px-4 backdrop-blur-2xl shadow-xl shadow-black/20 transition-all duration-300",
            open ? "w-72" : "",
          )}
        >
          <Navbar open={open} setOpen={setOpen} />
        </aside>

        <section
          onClick={() => open && setOpen(false)}
          className={cn(
            " relative flex overflow-y-auto flex-col flex-1 py-2 rounded-2xl border bg-card shadow-sm transition-all duration-300",
            open && "opacity-40 blur-[2px] cursor-pointer",
          )}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}
