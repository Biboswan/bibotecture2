"use client"

import { motion } from "motion/react"
import type * as React from "react"

const HeroBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
          backgroundSize: "256px 256px",
          backgroundRepeat: "repeat",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      <motion.div
        animate={{ opacity: [0.5, 0.7, 0.5], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-[20%] -bottom-[30%] h-[70vh] w-[70vw] rounded-full blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255, 80, 60, 0.45) 0%, rgba(255, 180, 50, 0.25) 40%, transparent 70%)",
        }}
      />

      <div className="absolute top-[18%] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/80" />

      <svg
        className="absolute right-[8%] bottom-[12%] h-24 w-24 text-white/20"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden
      >
        <path
          d="M100 100 L100 40 L40 40"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  )
}

export default HeroBackground
