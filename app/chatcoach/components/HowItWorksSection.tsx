"use client"

import React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

interface StepProps {
  number: string
  title: string
  description: string
  bullets?: string[]
}

const Step: React.FC<StepProps> = ({ number, title, description, bullets }) => {
  return (
    <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-2xl font-bold text-white shadow-lg">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>
        {bullets?.length ? (
          <ul className="mt-4 space-y-2 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export const HowItWorksSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  const steps = [
    {
      number: "1",
      title: "Connect Chat Coach to your messaging app",
      description:
        "Seamlessly integrate Chat Coach as a side panel in your conversations. Your privacy is protected — we analyze context, not content.",
    },
    {
      number: "2",
      title: "Get real-time communication insights",
      description:
        "Chat Coach analyzes tone, emotional cues, and conversation patterns as you chat, providing instant guidance when you need it.",
      bullets: [
        "✓ Private model processing — no ChatGPT data sharing, full coach oversight",
      ],
    },
    {
      number: "3",
      title: "Ask for guidance or explore quick suggestions",
      description:
        "Get answers about communication psychology, emotional intelligence, difficult conversations, and more — right when you need them.",
    },
  ]

  return (
    <section
      ref={ref}
      className={`px-4 py-20 transition-opacity duration-1000 sm:px-6 lg:px-8 lg:py-32 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          How It Works
        </h2>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 150}ms` : "0ms",
              }}
            >
              <Step
                number={step.number}
                title={step.title}
                description={step.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
