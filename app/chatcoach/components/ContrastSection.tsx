"use client"

import { motion, useInView } from "motion/react"
import * as React from "react"

const withoutPoints = [
  "Learn the hard way.",
  "Rewrite the message five times.",
  "Stay clueless about what went wrong.",
  "Watch reel after reel — and change nothing.",
]

const withPoints = [
  "A mentor in your corner, 24/7.",
  "Read the moment — both sides of it.",
  "Understand yourself and them.",
  "Say the thing that actually lands.",
]

export const ContrastSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="border-cc bg-cc-section border-t px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div ref={ref} className="mx-auto max-w-5xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="chatcoach-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase">
            Two ways to send the next message
          </p>
          <h2 className="text-cc-primary text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            Keep guessing — or start understanding.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="border-cc bg-cc-elevated rounded-2xl border p-8 opacity-70 grayscale"
          >
            <p className="text-cc-subtle mb-5 text-[11px] font-medium tracking-wide uppercase">
              Without Chat Coach
            </p>
            <ul className="space-y-4">
              {withoutPoints.map((point) => (
                <li
                  key={point}
                  className="text-cc-muted flex items-start gap-3 text-base leading-relaxed"
                >
                  <span className="border-cc mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full border" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow */}
          <div className="flex items-center justify-center py-2 md:py-0">
            <div className="border-cc bg-cc-elevated shadow-cc-card chatcoach-gradient-text flex h-10 w-10 items-center justify-center rounded-full border">
              <svg
                className="h-4 w-4 rotate-90 md:rotate-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, x: 24, filter: "grayscale(1)" }}
            animate={
              isInView ? { opacity: 1, x: 0, filter: "grayscale(0)" } : {}
            }
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="border-cc-accent bg-cc-elevated shadow-cc-featured rounded-2xl border p-8"
          >
            <p className="chatcoach-label mb-5 text-[11px] font-medium tracking-wide uppercase">
              With Chat Coach
            </p>
            <ul className="space-y-4">
              {withPoints.map((point) => (
                <li
                  key={point}
                  className="text-cc-primary flex items-start gap-3 text-base leading-relaxed"
                >
                  <span className="cc-dot-active mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
