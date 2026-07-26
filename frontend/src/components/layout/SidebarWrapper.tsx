"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/sections";

interface SidebarWrapperProps {
  isOpen?: boolean;
  onToggle?: (open: boolean) => void;
}

export default function SidebarWrapper({
  isOpen,
  onToggle,
}: SidebarWrapperProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  // Support controlled or uncontrolled usage
  const open = isOpen !== undefined ? isOpen : internalOpen;
  const setOpen = (val: boolean | ((prev: boolean) => boolean)) => {
    const nextVal = typeof val === "function" ? val(open) : val;
    if (isOpen === undefined) setInternalOpen(nextVal);
    onToggle?.(nextVal);
  };

  return (
    <aside
      className={cn(
        "h-full overflow-hidden rounded-3xl border border-border/60 bg-card/80 px-1 py-2 backdrop-blur-2xl shadow-xl shadow-black/20 transition-all duration-300 sm:py-4 sm:px-1 md:py-6 md:px-2 lg:py-8 lg:px-4 shrink-0",
        open ? "w-72" : "w-14 sm:w-16 md:w-20",
      )}
    >
      <Navbar open={open} setOpen={setOpen} />
    </aside>
  );
}
