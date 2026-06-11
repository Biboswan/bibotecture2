"use client"

import * as React from "react"
import Image from "next/image"

import classNames from "@/utils/classNames"

import { chatCoachConfig } from "../config"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { Button } from "./Button"
import PlatformLinks from "./PlatformLinks"
import { useWaitlist } from "./WaitlistProvider"

const chatcoachImages = [
  "/images/chatcoach/chatcoach.png",
  "/images/chatcoach/chatcoach2.png",
  "/images/chatcoach/chatcoach3.png",
  "/images/chatcoach/chatcoach4.png",
]

export const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)
  const { openWaitlist } = useWaitlist()
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % chatcoachImages.length)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [])

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

          <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">
              Ace Conversations
            </span>
            <br />
            <span className="text-white">
              with real-time coaching from AI clones of Experts
            </span>
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
            className="absolute -inset-px rounded-[28px] bg-gradient-to-b from-white/20 via-white/5 to-transparent opacity-60"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[rgb(16,16,20)] shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
            <div className="relative aspect-[16/10] w-full">
              {chatcoachImages.map((src, index) => (
                <div
                  key={src}
                  className={classNames(
                    "absolute inset-0 transition-opacity duration-700",
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Image
                    src={src}
                    alt={`Chat Coach interface screenshot ${index + 1}`}
                    width={1920}
                    height={1200}
                    className="h-full w-full object-cover object-top"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-5 py-4">
              <div className="flex gap-2">
                {chatcoachImages.map((src, index) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setCurrentImageIndex(index)}
                    className={classNames(
                      "h-1.5 rounded-full transition-all duration-300",
                      index === currentImageIndex
                        ? "w-6 bg-white"
                        : "w-1.5 bg-white/30 hover:bg-white/50"
                    )}
                    aria-label={`View screenshot ${index + 1}`}
                  />
                ))}
              </div>
              <div className="hidden items-center gap-2 sm:flex">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) =>
                        (prev - 1 + chatcoachImages.length) %
                        chatcoachImages.length
                    )
                  }
                  className="rounded-full border border-white/10 p-2 text-[rgb(160,160,170)] transition-colors hover:border-white/20 hover:text-white"
                  aria-label="Previous screenshot"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev + 1) % chatcoachImages.length
                    )
                  }
                  className="rounded-full border border-white/10 p-2 text-[rgb(160,160,170)] transition-colors hover:border-white/20 hover:text-white"
                  aria-label="Next screenshot"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
