"use client";

import Link from "next/link";
import {
  Award,
  BriefcaseBusiness,
  Code2,
  FileText,
  FolderGit2,
  House,
  Mail,
  PanelLeftOpen,
  PanelRightOpen,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";

type NavbarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mobile?: boolean;
};

const navItems = [
  { name: "Home", icon: House, href: "#home" },
  { name: "Projects", icon: FolderGit2, href: "#projects" },
  { name: "Skills", icon: Code2, href: "#skills" },
  { name: "Experience", icon: BriefcaseBusiness, href: "#experience" },
  { name: "Certifications", icon: Award, href: "#certifications" },
  { name: "About", icon: User, href: "#about" },
  { name: "Education", icon: FileText, href: "#education" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export default function Navbar({ open, setOpen, mobile = false }: NavbarProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      {!mobile && (
        <div
          className={cn(
            "mb-3 flex shrink-0",
            open ? "justify-end" : "justify-center",
          )}
        >
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Collapse sidebar" : "Expand sidebar"}
            className="rounded-xl border border-border/70 bg-background/70 p-2 text-foreground shadow-sm transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-ring"
          >
            {open ? (
              <PanelRightOpen className="h-5 w-5" />
            ) : (
              <PanelLeftOpen className="h-5 w-5" />
            )}
          </button>
        </div>
      )}

      <nav
        aria-label="Main navigation"
        className={cn(
          "flex-1 overflow-x-auto overflow-y-auto",
          mobile ? "pb-1" : "pb-2",
        )}
      >
        <div
          className={cn(
            "flex w-full",
            mobile ? "flex-row gap-2 overflow-x-auto pb-1" : "flex-col gap-2",
          )}
        >
          {navItems.map(({ name, icon: Icon, href }) => (
            <Link
              key={name}
              href={href}
              title={name}
              className={cn(
                "group relative flex items-center overflow-hidden rounded-2xl border border-transparent text-muted-foreground transition-all duration-300",
                "hover:border-primary/20 hover:bg-primary/10 hover:text-primary",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                mobile
                  ? "h-10 min-w-[76px] shrink-0 justify-center px-2"
                  : "w-full justify-center gap-2 px-2 py-2 md:px-2 md:py-2",
                open && !mobile ? "justify-start" : "justify-center",
              )}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute left-0 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-primary/15 blur-2xl" />
              </div>

              <Icon className="relative z-10 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:scale-110" />

              {mobile ? (
                <span className="relative z-10 whitespace-nowrap text-[10px] font-medium tracking-wide">
                  {name}
                </span>
              ) : (
                open && (
                  <span className="relative z-10 whitespace-nowrap text-sm font-medium tracking-wide">
                    {name}
                  </span>
                )
              )}
            </Link>
          ))}
        </div>

        {!mobile && open && (
          <div className="mt-6 rounded-2xl border border-primary/15 bg-linear-to-br from-primary/10 via-primary/5 to-transparent p-4">
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
