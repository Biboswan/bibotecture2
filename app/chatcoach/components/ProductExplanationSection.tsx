"use client"

import React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="flex flex-col items-start rounded-2xl border border-gray-200 bg-white/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/50 dark:hover:border-purple-500/50">
      <div className="mb-6 text-cyan-500 dark:text-purple-400">{icon}</div>
      <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  )
}

export const ProductExplanationSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  const features = [
    {
      title: "Real-time guidance",
      description:
        "Detect tone, emotional cues, and conversation patterns instantly.",
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Contextual intelligence",
      description: "Understand message history and relationship context.",
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Better connections",
      description: "Improve emotional intelligence and clarity across chats.",
      icon: (
        <svg
          className="h-12 w-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section
      ref={ref}
      className={`bg-gradient-to-b from-transparent to-gray-50/50 px-4 py-20 transition-opacity duration-1000 sm:px-6 lg:px-8 lg:py-32 dark:to-gray-900/50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Your personal communication{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            insight engine.
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
