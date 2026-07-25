"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import Link from "next/link";

export default function CloseDoorNavbar() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      {/* ================= Desktop Navbar ================= */}
      <nav className="hidden sm:flex justify-between items-center px-8 py-5 shadow-md">
        <h1 className="text-xl font-bold">Logo</h1>

        <div className="flex gap-8">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Projects</Link>
          <Link href="#">Technologies</Link>
          <Link href="#">Contact</Link>
        </div>
      </nav>

      {/* ================= Mobile Sidebar ================= */}
      <div className="sm:hidden">
        {/* Toggle Button */}
        <button
          onClick={() => setMenu(!menu)}
          className="fixed top-5 right-5 z-[100] bg-white p-2 rounded-md shadow-lg"
        >
          {menu ? <PanelLeftClose size={24} /> : <PanelLeftOpen size={24} />}
        </button>

        {/* Sidebar */}
        <motion.aside
          initial={false}
          animate={{
            width: menu ? 260 : 60,
          }}
          transition={{
            duration: 0.4,
          }}
          className="fixed top-0 right-0 h-screen bg-white shadow-2xl overflow-hidden z-50"
        >
          <div className="h-full overflow-y-auto pt-20">
            {menu && (
              <div className="flex flex-col gap-8 px-8">
                <Link href="#">Home</Link>
                <Link href="#">About</Link>
                <Link href="#">Projects</Link>
                <Link href="#">Technologies</Link>
                <Link href="#">Contact</Link>
              </div>
            )}
          </div>
        </motion.aside>
      </div>
    </>
  );
}
