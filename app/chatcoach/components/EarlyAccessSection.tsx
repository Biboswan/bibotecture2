"use client"

import React, { useState } from "react"
import { Button } from "./Button"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { WaitlistModal } from "./WaitlistModal"

export const EarlyAccessSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      ref={ref}
      className={`bg-gradient-to-br from-cyan-50/50 via-purple-50/50 to-pink-50/50 px-4 py-20 transition-opacity duration-1000 sm:px-6 lg:px-8 lg:py-32 dark:from-gray-900/50 dark:via-gray-800/50 dark:to-gray-900/50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Get 1 Month of Early Access —{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Free.
          </span>
        </h2>

        <p className="mx-auto mb-12 max-w-3xl text-xl leading-relaxed text-gray-600 sm:text-2xl dark:text-gray-300">
          Be among the first to experience AI-powered communication insights.
          Early testers get unlimited access for 30 days while we polish the
          full experience.
        </p>

        <Button
          variant="primary"
          onClick={() => setIsModalOpen(true)}
          className="transform rounded-lg px-12 py-5 text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          Claim Early Access
        </Button>
      </div>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="early-access"
      />
    </section>
  )
}
