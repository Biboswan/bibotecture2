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
        "border-cc bg-cc-section border-y px-4 py-16 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-20",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      )}
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="chatcoach-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase">
          The problem
        </p>
        <h2 className="text-cc-primary text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          Two people rarely share the same frame.
        </h2>
        <p className="text-cc-muted mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg">
          Chat Coach bridges that gap — on the WhatsApp messages you already
          send, before you hit send.
        </p>
      </div>
    </section>
  )
}
