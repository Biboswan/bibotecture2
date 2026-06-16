"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { Button } from "./Button"
import PlatformLinks from "./PlatformLinks"
import ProductPreview from "./ProductPreview"
import { useWaitlist } from "./WaitlistProvider"

export const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)
  const { openWaitlist } = useWaitlist()

  return (
    <section
      ref={ref}
      className={classNames(
        "relative overflow-hidden px-4 pt-16 pb-24 transition-all duration-1000 sm:px-6 lg:px-8 lg:pt-24 lg:pb-32",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      )}
    >
      <div
        className="chatcoach-glow-hero pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="cc-pill mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            WhatsApp · iPhone & Chrome · Early access
          </div>

          <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
            <span className="chatcoach-gradient-text">Ace Conversations</span>
            <br />
            <span className="text-cc-primary">
              with real-time coaching from Expert Minds
            </span>
          </h1>

          <p className="text-cc-muted mx-auto mt-6 max-w-3xl text-base leading-relaxed sm:text-lg lg:text-xl">
            Get instant feedback on your WhatsApp messages before you hit send —
            from AI modeled on the world&apos;s best negotiation experts, dating
            coaches, real estate pros, and communicators.
          </p>

          <p className="text-cc-subtle mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            Your messages are processed in real-time and never stored.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Button onClick={openWaitlist}>
                Get Early Access — 1 Month Free
              </Button>
              <PlatformLinks />
              <a
                href="#how-it-works"
                className="text-cc-subtle hover:text-cc-primary text-sm transition-colors"
              >
                See how it works
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto mt-16 w-full max-w-5xl lg:mt-20">
          <div
            className="chatcoach-glow-preview pointer-events-none absolute -inset-4 rounded-[32px]"
            aria-hidden="true"
          />
          <ProductPreview platform="chrome" showCarousel variant="featured" />
        </div>
      </div>
    </section>
  )
}
