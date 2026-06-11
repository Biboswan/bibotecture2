"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import { useScrollAnimation } from "../hooks/useScrollAnimation"

export const ProblemSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      ref={ref}
      className={classNames(
        "border-y border-white/8 bg-[rgb(14,14,18)] px-4 py-16 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-20",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      )}
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-cyan-400/90 uppercase">
          The problem
        </p>
        <h2 className="text-3xl leading-tight font-semibold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
          Two people rarely share the same frame.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[rgb(160,160,170)] sm:text-lg">
          Chat Coach bridges that gap — on the WhatsApp messages you already
          send, before you hit send.
        </p>
      </div>
    </section>
  )
}
