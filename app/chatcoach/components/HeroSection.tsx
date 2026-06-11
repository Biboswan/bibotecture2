"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import { chatCoachConfig } from "../config"
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
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(0,202,254,0.14),transparent)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[13px] text-[rgb(180,180,190)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            iOS app · Chrome extension · WhatsApp · early access
          </div>

          <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-7xl">
            Ace Conversations
            <br />
            with real-time coaching from AI clones of Experts
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[rgb(160,160,170)] sm:text-lg lg:text-xl">
            Get instant feedback on your WhatsApp messages — on iPhone or in
            Chrome — before you hit send, from AI modeled on the world&apos;s
            best negotiation experts, dating coaches, and communicators.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-[rgb(130,130,140)] sm:text-base">
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
                className="text-sm text-[rgb(140,140,150)] transition-colors hover:text-white"
              >
                See how it works
              </a>
            </div>
            <p className="text-xs text-[rgb(100,100,110)]">
              iOS app for WhatsApp on iPhone · Chrome extension for WhatsApp Web
              · iOS {chatCoachConfig.minIosVersion}+
            </p>
          </div>
        </div>

        <div className="relative mx-auto mt-16 w-full max-w-5xl lg:mt-20">
          <div
            className="pointer-events-none absolute -inset-4 rounded-[32px] bg-[radial-gradient(ellipse_at_center,rgba(0,202,254,0.08),transparent_70%)]"
            aria-hidden="true"
          />
          <p className="mb-4 text-center font-mono text-[11px] tracking-[0.18em] text-cyan-400/90 uppercase">
            Chrome extension preview
          </p>
          <ProductPreview platform="chrome" showCarousel variant="featured" />
          <p className="mt-4 text-center text-xs text-[rgb(120,120,130)]">
            Chrome extension preview · iOS app available via early access
          </p>
        </div>
      </div>
    </section>
  )
}
