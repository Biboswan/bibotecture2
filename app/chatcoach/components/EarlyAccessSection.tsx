"use client"

import { motion, useInView } from "motion/react"
import * as React from "react"

import DownloadCta from "./DownloadCta"

export const EarlyAccessSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="early-access" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div ref={ref} className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="border-cc bg-cc-elevated shadow-cc-featured relative overflow-hidden rounded-[28px] border px-6 py-12 text-center sm:px-10 sm:py-16"
        >
          <div
            className="chatcoach-glow-cta pointer-events-none absolute inset-0"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="chatcoach-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase">
              The next message matters
            </p>
            <h2 className="text-cc-primary text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
              Don&apos;t send it alone.
            </h2>
            <p className="text-cc-muted mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
              Add Chat Coach to Chrome and get a mentor beside your WhatsApp
              threads — reading the moment, before you hit send.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <DownloadCta />
              <p className="text-cc-subtle text-sm">
                Free to start · Real-time · Nothing stored
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
