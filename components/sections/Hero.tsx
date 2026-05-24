"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import type * as React from "react"

import WordsCenter from "@/components/animations/WordsCenter"
import { SLOW_TRANSITION } from "@/utils/animation"

const socialLinks = [
  {
    href: "https://x.com/Biboswan98",
    icon: "/icons/x.svg",
    label: "X",
  },
  {
    href: "http://github.com/Biboswan",
    icon: "/icons/github.svg",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/company/105943730",
    icon: "/icons/linkedin.svg",
    label: "LinkedIn",
  },
]

const rotatingWords = ["Startups", "Founders", "Teams", "You"]

const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden bg-[rgb(6,6,6)] px-[30px] pb-[60px]">
      <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-14 lg:flex-row lg:items-end lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={SLOW_TRANSITION}
          className="flex flex-col gap-[22px]"
        >
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              <Image
                src={link.icon}
                alt={link.label}
                width={22}
                height={22}
                className="h-[22px] w-[22px] invert"
              />
            </Link>
          ))}
        </motion.div>

        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, ...SLOW_TRANSITION }}
            className="mb-6 pl-2 text-[15px] tracking-[0.1em] text-white uppercase"
          >
            Full-stack agency
          </motion.p>

          <div className="space-y-0">
            <motion.h1
              initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "none" }}
              transition={{ delay: 0.15, ...SLOW_TRANSITION }}
              className="text-[clamp(3rem,10vw,7.5rem)] leading-none font-normal tracking-[-0.03em] text-white"
            >
              Building
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "none" }}
              transition={{ delay: 0.25, ...SLOW_TRANSITION }}
              className="flex flex-wrap items-baseline gap-x-4 text-[clamp(3rem,10vw,7.5rem)] leading-none tracking-[-0.03em] text-white"
            >
              <span className="font-extralight">for</span>
              <WordsCenter words={rotatingWords} />
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, ...SLOW_TRANSITION }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-[rgb(204,204,204)]"
          >
            Bibotecture is a full-stack agency, architecting future-proof
            products for startups and founders from idea to launch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, ...SLOW_TRANSITION }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/20 px-8 py-3 text-base text-white transition-colors hover:bg-white/5"
            >
              work with us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
