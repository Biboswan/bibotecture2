"use client"

import React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export const NarrativeSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      ref={ref}
      className={`px-4 py-20 transition-opacity duration-1000 sm:px-6 lg:px-8 lg:py-32 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="space-y-6 text-left text-lg leading-relaxed text-gray-700 sm:text-xl lg:text-2xl dark:text-gray-300">
            How you communicate — and how you perceive others&apos;
            communication — is dictated by how you think, your life experiences,
            your self-awareness, and the current context, and how you express
            them effectively.
          </p>
          <p className="mt-8 text-left text-lg leading-relaxed text-gray-700 sm:text-xl lg:text-2xl dark:text-gray-300">
            Two people communicate from their own frames.
          </p>
          <p className="mt-8 text-left text-lg leading-relaxed text-gray-700 sm:text-xl lg:text-2xl dark:text-gray-300">
            Chat Coach is here to bridge that gap and make human communication
            and connection more effective, while also serving each other&apos;s
            mutual intent. Gaps due to experiences, background, education,
            gender, geography, age, and more.
          </p>
        </div>
      </div>
    </section>
  )
}
