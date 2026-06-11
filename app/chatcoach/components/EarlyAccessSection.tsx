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
        <div className="border-cc bg-cc-elevated shadow-cc-featured relative overflow-hidden rounded-[28px] px-6 py-12 text-center sm:px-10 sm:py-16">
          <div
            className="chatcoach-glow-cta pointer-events-none absolute inset-0"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="chatcoach-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase">
              Early access
            </p>
            <h2 className="text-cc-primary text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl">
              One month free for early testers.
            </h2>
            <p className="text-cc-muted mx-auto mt-5 max-w-2xl text-base leading-relaxed sm:text-lg">
              Join the first cohort shaping Chat Coach — unlimited use for 30
              days while we refine the experience.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                <Button onClick={openWaitlist}>
                  Get Early Access — 1 Month Free
                </Button>
                <PlatformLinks />
              </div>
              <p className="text-cc-subtle text-sm">No credit card required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
