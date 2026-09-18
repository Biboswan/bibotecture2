"use client"

import { Cross } from "akar-icons"
import Link from "next/link"
import * as React from "react"

import config from "@/config"

const CueSetFullscreenBanner: React.FC = () => {
  const [visible, setVisible] = React.useState(true)

  const dismiss = React.useCallback(() => {
    setVisible(false)
  }, [])

  React.useEffect(() => {
    if (!visible) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss()
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [dismiss, visible])

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cueset-banner-title"
      className="fixed inset-0 z-10001 flex items-center justify-center bg-[rgb(6,6,6)] px-6 py-10"
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Close CueSet announcement"
        className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-[rgb(170,170,170)] transition-colors hover:border-white/40 hover:bg-white/5 hover:text-white"
      >
        <Cross size={20} />
      </button>

      <div className="w-full max-w-5xl">
        <p className="mb-8 text-[15px] tracking-[0.1em] text-cyan-400 uppercase">
          A new product by Bibotecture
        </p>
        <h2
          id="cueset-banner-title"
          className="max-w-4xl text-[clamp(4rem,14vw,12rem)] leading-[0.82] font-light tracking-[-0.06em] text-white"
        >
          CueSet
        </h2>
        <p className="mt-10 max-w-3xl text-[clamp(1.5rem,3.5vw,3rem)] leading-[1.2] font-light tracking-[-0.03em] text-white">
          Your AI communication coach for clearer, more confident conversations.
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[rgb(170,170,170)] sm:text-lg">
          CueSet analyzes your messages and gives personalized feedback, tone
          guidance, and reply suggestions across Chrome and iOS.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <Link
            href={config.cueSetUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={dismiss}
            className="inline-flex rounded-full bg-white px-8 py-3 text-base text-black transition-colors hover:bg-cyan-300"
          >
            explore CueSet
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="text-base text-[rgb(170,170,170)] underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            continue to Bibotecture
          </button>
        </div>
      </div>
    </div>
  )
}

export default CueSetFullscreenBanner
