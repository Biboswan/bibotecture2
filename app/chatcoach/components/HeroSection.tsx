"use client"

import { motion } from "motion/react"
import * as React from "react"

import { SLOW_TRANSITION } from "@/utils/animation"

import { chatCoachConfig } from "../config"
import BrowserFrame from "./BrowserFrame"
import DownloadCta from "./DownloadCta"
import PhoneShot from "./PhoneShot"
import PrivateAlphaForm from "./PrivateAlphaForm"

const Chip: React.FC<{
  className?: string
  title: string
  detail: string
  delay: number
}> = ({ className, title, detail, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 8 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.5, ease: "easeOut" }}
    className={className}
  >
    <div className="cc-chip rounded-2xl px-4 py-3">
      <p className="chatcoach-label font-mono text-[10px] tracking-[0.16em] uppercase">
        {title}
      </p>
      <p className="text-cc-primary mt-1 text-sm font-medium">{detail}</p>
    </div>
  </motion.div>
)

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-24 sm:px-6 lg:px-8 lg:pt-24 lg:pb-32">
      <div
        className="chatcoach-glow-hero pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SLOW_TRANSITION}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
            <span className="chatcoach-gradient-text">Ace Conversations</span>
            <br />
            <span className="text-cc-primary">
              Real-time Coaching from Expert Minds
            </span>
          </h1>

          <p className="text-cc-muted mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg lg:text-xl">
            Choose a specialized communication coach for your goals and niche,
            available 24/7 for the price of a T-shirt.
          </p>

          <p className="text-cc-subtle mx-auto mt-4 max-w-2xl text-sm sm:text-base">
            Real-time guidance, right beside your chat.
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 lg:flex-row lg:items-start">
            <DownloadCta
              label="Add to Chrome"
              brandedChromeIcon
              className="min-h-14"
            />
            <PrivateAlphaForm />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SLOW_TRANSITION, delay: 0.15 }}
          className="relative mx-auto mt-16 w-full max-w-5xl lg:mt-20"
        >
          <div
            className="chatcoach-glow-preview pointer-events-none absolute -inset-4 rounded-[32px]"
            aria-hidden="true"
          />
          <div className="cc-float relative">
            <BrowserFrame
              src={chatCoachConfig.realEstate.chromeExtension}
              alt="Chat Coach panel beside WhatsApp Web, reading intent and suggesting the next reply"
              address="web.whatsapp.com"
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>

          <div className="absolute -bottom-10 left-1 z-20 w-24 sm:-bottom-14 sm:-left-4 sm:w-36 lg:-left-12 lg:w-48">
            <div className="cc-pill mb-2 ml-2 w-max rounded-full px-3 py-1 font-mono text-[8px] tracking-wide uppercase sm:text-[9px]">
              Mobile
            </div>
            <PhoneShot
              src={chatCoachConfig.realEstate.mobileQuickSuggestions}
              alt="Chat Coach suggestions beside a WhatsApp conversation on mobile"
              width={220}
              sizes="(max-width: 640px) 96px, (max-width: 1024px) 144px, 192px"
            />
          </div>

          <div className="cc-pill absolute top-3 left-3 z-10 rounded-full px-3 py-1 font-mono text-[8px] tracking-wide uppercase sm:text-[9px]">
            Chrome extension
          </div>

          <Chip
            className="pointer-events-none absolute -top-4 -right-3 hidden sm:block lg:-right-8"
            title="Reads the moment"
            detail="Intent · tone · psychology"
            delay={0.6}
          />
          <Chip
            className="pointer-events-none absolute -right-3 -bottom-5 hidden lg:-right-8 lg:block"
            title="Before you hit send"
            detail="Suggests the next right move"
            delay={0.8}
          />
        </motion.div>
      </div>
    </section>
  )
}
