"use client";

import { useState } from "react";

import { Navbar } from "@/components/sections";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function SidebarWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <aside
      className={cn(
        "w-full overflow-hidden rounded-3xl border border-border bg-card/90 shadow-sm backdrop-blur-xl px-2 py-2 transition-all duration-300 sm:px-3 sm:py-3",
        isMobile ? "max-h-20" : "max-h-none",
        !isMobile && isOpen ? "lg:w-56 xl:w-60" : "lg:w-20",
      )}
      aria-label="Sidebar"
    >
      <div className="flex h-full flex-col md:justify-start">
        <Navbar open={isOpen} setOpen={setIsOpen} mobile={isMobile} />
      </div>
    </aside>
  );
}
