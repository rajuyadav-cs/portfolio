"use client";
import { Menu, PanelLeftOpen, PanelRightOpen } from "lucide-react";

import {
  color,
  motion,
  AnimatePresence,
  animate,
  easeInOut,
} from "framer-motion";
import { div, main } from "framer-motion/client";
import React, { useState } from "react";

type SideBarProps = {
  menuValue: boolean;
  menuFunc: React.Dispatch<React.SetStateAction<boolean>>;
};
function SideBar({ menuValue, menuFunc }: SideBarProps) {
  const menuItems = ["Home", "About", "Content", "Projects", "Contact"];
  return (
    <motion.div
      initial={{ x: 250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 250, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 25,
      }}
      className="flex flex-col items-center h-full overflow-y-auto px-4 py-2 justify-center gap-8 bg-slate-800 text-slate-200"
    >
      <div className="flex flex-col gap-8">
        {menuItems.map((item) => (
          <div
            key={item}
            className={`
        rounded-2xl
        text-center
        transition-all
        duration-300
        hover:bg-zinc-300
        hover:text-zinc-800
        hover:scale-105
        active:scale-95
        cursor-pointer
        ${menuValue ? "px-20 py-2" : "hidden"}
      `}
          >
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function DemoNavbar() {
  const [move, setMove] = useState(false);
  const count = [1, 2, 3, 4, 5, 6];
  const [menu, setMenu] = useState(false);
  const containerVariants = {
    start: {},
    end: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const ballVariants = {
    start: {
      y: -100,
      opacity: 0,
    },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        mass: 1,
      },
    },
  };
  return (
    <div className="flex flex-col h-screen gap-6 p-4 border-2 border-black ">
      <div className="flex overflow-auto justify-between items-center gap-6 p-4 border-2 border-black">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="border px-2 py-2 bg-slate-800 text-slate-300"
          onClick={() => setMove(!move)}
        >
          Move
        </motion.button>
        {count.map((value, id) => {
          return (
            <motion.div
              key={id}
              initial={{ x: 0, opacity: 0 }}
              animate={{ x: move ? 300 : 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: easeInOut }}
              className="h-32 w-32 px-6  py-4 border bg-blue-500 text-blue-50"
            >
              {value}
            </motion.div>
          );
        })}
      </div>
      <div className="flex h-96 justify-between p-4 border-2 border-black">
        <div className="flex flex-col justify-end p-4 border-2 border-black">
          <motion.div
            className="flex gap-6"
            variants={containerVariants}
            initial="start"
            animate="end"
          >
            {count.map((value, id) => (
              <motion.div
                key={id}
                variants={ballVariants}
                className="border-2 border-black/50 rounded-full size-12 flex items-center justify-center"
              >
                {value}
              </motion.div>
            ))}
          </motion.div>
          <div className="border-2 border-black/50  h-12 w-108 text-center">
            rectangle
          </div>
        </div>
        <div className="flex h-full border-2 border-black">
          <div className="m-4">
            {menu ? (
              <PanelLeftOpen onClick={() => setMenu(!menu)} />
            ) : (
              <PanelRightOpen onClick={() => setMenu(!menu)} />
            )}
          </div>
          <AnimatePresence>
            {menu && <SideBar menuValue={menu} menuFunc={setMenu} />}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
