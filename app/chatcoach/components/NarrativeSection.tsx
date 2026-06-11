"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import { useScrollAnimation } from "../hooks/useScrollAnimation"

export const NarrativeSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      ref={ref}
      className={classNames(
        "border-cc bg-cc-section border-t px-4 py-20 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-28",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
    >
      <div className="mx-auto max-w-4xl space-y-8">
        <p className="text-cc-muted text-lg leading-relaxed sm:text-xl lg:text-2xl">
          How you communicate — and how you perceive others&apos; communication
          — is dictated by how you think, your life experiences, your
          self-awareness, and the current context, and how you express them
          effectively.
        </p>
        <p className="text-cc-primary text-lg leading-relaxed sm:text-xl lg:text-2xl">
          Two people communicate from their own frames.
        </p>
        <p className="text-cc-muted text-lg leading-relaxed sm:text-xl lg:text-2xl">
          Chat Coach is here to bridge that gap and make human communication and
          connection more effective, while also serving each other&apos;s mutual
          intent. Gaps due to experiences, background, education, gender,
          geography, age, and more.
        </p>
      </div>
    </section>
  )
}
