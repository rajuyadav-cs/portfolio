"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/sections";

export default function SidebarWrapper() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={cn(
        "max-h-[calc(100vh-120px)] overflow-y-auto rounded-3xl border border-border/60 bg-card/80 px-1 py-2 backdrop-blur-2xl shadow-xl shadow-black/20 transition-all duration-300 sm:py-4 sm:px-1 md:py-6 md:px-2 lg:py-8 lg:px-4",
        open ? "w-72" : "w-12",
      )}
    >
      <Navbar open={open} setOpen={setOpen} />
    </aside>
  );
}
