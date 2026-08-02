"use client"

import { motion, useInView } from "motion/react"
import * as React from "react"

import { chatCoachConfig } from "../config"
import BookCallCta from "./BookCallCta"
import BrowserFrame from "./BrowserFrame"

const benefits = [
  {
    title: "Consistent quality, every thread",
    detail: "The same calibrated read across hundreds of conversations.",
  },
  {
    title: "Buyer psychology on tap",
    detail: "Every reply backed by intent, reasoning, and the next right move.",
  },
  {
    title: "Never let a lead go cold",
    detail: "Personalized follow-ups that move deals without sounding pushy.",
  },
]

export const RealEstateSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="real-estate"
      className="border-cc bg-cc-section scroll-mt-20 border-t px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div
        ref={ref}
        className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16"
      >
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="chatcoach-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase">
            For real estate agents
          </p>
          <h2 className="text-cc-primary text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
            One wrong call can cost you dollars.
          </h2>
          <p className="text-cc-muted mt-6 text-base leading-relaxed sm:text-lg">
            In a hyperlocal, cross-cultural business, tone and timing are
            everything. Context-switching across hundreds of clients — while
            keeping every conversation consistent, personal, and high-quality —
            is beyond any one person&apos;s physical limits.
          </p>

          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex items-start gap-3">
                <span className="border-cc bg-cc-elevated shadow-cc-card text-cc-primary mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>
                  <span className="text-cc-primary text-base font-medium">
                    {benefit.title}
                  </span>
                  <span className="text-cc-muted mt-0.5 block text-sm leading-relaxed">
                    {benefit.detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <BookCallCta label="Book a discovery call" />
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <BrowserFrame
            src={chatCoachConfig.realEstate.chromeExtension}
            alt="Chat Coach analyzing a real estate negotiation on WhatsApp Web with intent and reasoning"
            address="web.whatsapp.com"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </motion.div>
      </div>
    </section>
  )
}
