"use client";

import {
  PanelRightOpen,
  PanelLeftOpen,
  House,
  User,
  Code2,
  FolderGit2,
  BriefcaseBusiness,
  Award,
  FileText,
  Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type NavbarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SideBar({ open, setOpen }: NavbarProps) {
  const HandleOpen = () => setOpen(!open);

  const navItems = [
    { name: "Home", icon: House, href: "#home" },
    { name: "Projects", icon: FolderGit2, href: "#projects" },
    { name: "Skills", icon: Code2, href: "#skills" },
    { name: "Experience", icon: BriefcaseBusiness, href: "#experience" },
    { name: "Certifications", icon: Award, href: "#certifications" },
    { name: "About", icon: User, href: "#About" },
    { name: "Education", icon: FileText, href: "#education" },
    { name: "Contact", icon: Mail, href: "#contact" },
  ];

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Toggle */}
      <div className={cn("mb-8 flex", open ? "justify-end" : "justify-center")}>
        {open ? (
          <button
            onClick={HandleOpen}
            className="rounded-xl border border-border bg-background/40 p-2 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            <PanelRightOpen className="h-5 w-5" />
          </button>
        ) : (
          <button
            onClick={HandleOpen}
            className="rounded-xl border border-border bg-background/40 p-2 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            <PanelLeftOpen className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col gap-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-transparent px-4 py-3 text-muted-foreground transition-all duration-300",
                "hover:border-primary/20 hover:bg-primary/10 hover:text-primary",
                open ? "justify-start" : "justify-center",
              )}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute left-0 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-primary/15 blur-2xl" />
              </div>

              <Icon className="relative z-10 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:scale-110" />

              {open && (
                <span className="relative z-10 whitespace-nowrap text-sm font-medium tracking-wide">
                  {item.name}
                </span>
              )}
            </Link>
          );
        })}

        {/* Bottom Decoration */}
        {open && (
          <div className="mt-8 rounded-2xl border border-primary/15 bg-linear-to-br from-primary/10 via-primary/5 to-transparent p-4">
            <p className="text-xs font-medium text-muted-foreground">
              Crafted with
            </p>

            <h3 className="mt-1 bg-linear-to-r from-blue-400 via-cyan-400 to-violet-500 bg-clip-text text-lg font-bold text-transparent">
              Next.js & Django
            </h3>
          </div>
        )}
      </nav>
    </div>
  );
}
