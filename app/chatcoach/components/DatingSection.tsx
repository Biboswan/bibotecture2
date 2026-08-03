"use client"

import { motion, useInView } from "motion/react"
import * as React from "react"

import DownloadCta from "./DownloadCta"
import MobileCoachDemo from "./MobileCoachDemo"
import { datingCoachScenario } from "./mobileCoachScenarios"

export const DatingSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="dating"
      className="border-cc scroll-mt-20 border-t px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16"
      >
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative order-last lg:order-first"
        >
          <MobileCoachDemo
            scenario={datingCoachScenario}
            initialExperience="coach-chat"
            outcome="Outcome: protect your time with a clear boundary, without attacking or trying to control the other person."
          />
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <p className="chatcoach-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase">
            For dating &amp; relationships
          </p>
          <h2 className="text-cc-primary text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            In relationships, communication goes both ways.
          </h2>
          <p className="text-cc-muted mt-6 text-base leading-relaxed sm:text-lg">
            Understanding yourself. Understanding them. Then finding the right
            words. Most of us learn the hard way, or stay clueless about what
            went wrong for years.
          </p>
          <p className="text-cc-muted mt-4 text-base leading-relaxed sm:text-lg">
            A mentor available 24/7, at the price of a T-shirt, could be the
            biggest investment you make in the relationships that matter.
          </p>
          <p className="text-cc-primary mt-6 text-base font-medium sm:text-lg">
            Stop scrolling endless reels. Start learning from the communicators
            you actually connect with.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 text-center lg:flex-row lg:items-center lg:text-left">
            <DownloadCta brandedChromeIcon />
            <span className="text-cc-faint text-xs">
              Modeled on Matthew Hussey-style coaching
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
