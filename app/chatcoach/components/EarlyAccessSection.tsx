"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import { Button } from "./Button"
import PlatformLinks from "./PlatformLinks"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { useWaitlist } from "./WaitlistProvider"

export const EarlyAccessSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const { openWaitlist } = useWaitlist()

  return (
    <section
      id="early-access"
      ref={ref}
      className={classNames(
        "px-4 py-20 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-28",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgb(14,14,18)] px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,202,254,0.12),transparent_55%)]"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-cyan-400/90 uppercase">
              Early access
            </p>
            <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance text-white sm:text-4xl">
              One month free on iOS and Chrome.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[rgb(160,160,170)] sm:text-lg">
              Join the first cohort shaping Chat Coach. Early testers get
              TestFlight access on iPhone, Chrome extension access on desktop,
              and unlimited use for 30 days while we refine the experience.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Button onClick={openWaitlist}>
                  Get Early Access — 1 Month Free
                </Button>
                <PlatformLinks />
              </div>
              <p className="text-sm text-[rgb(120,120,130)]">
                No credit card required · WhatsApp on mobile and web
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
