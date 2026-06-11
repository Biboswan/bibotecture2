"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import SectionHeader from "./SectionHeader"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

interface FeatureCardProps {
  index: string
  title: string
  description: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  index,
  title,
  description,
}) => {
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-[rgb(14,14,18)] p-8 transition-colors duration-300 hover:border-white/15 hover:bg-[rgb(18,18,24)]">
      <span className="mb-8 font-mono text-xs tracking-[0.18em] text-cyan-400/80">
        {index}
      </span>
      <h3 className="mb-3 text-xl font-medium tracking-tight text-white">
        {title}
      </h3>
      <p className="text-base leading-relaxed text-[rgb(160,160,170)]">
        {description}
      </p>
    </article>
  )
}

export const ProductExplanationSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)

  const features = [
    {
      title: "Native iOS app",
      description:
        "WhatsApp coaching on iPhone — a dedicated app built for conversations on the go.",
    },
    {
      title: "Chrome extension",
      description:
        "WhatsApp Web coaching on desktop — a side panel that stays beside the thread in your browser.",
    },
    {
      title: "Real-time guidance",
      description:
        "Surface tone shifts, emotional cues, and conversation patterns the moment they appear.",
    },
  ]

  return (
    <section
      ref={ref}
      className={classNames(
        "border-t border-white/8 px-4 py-20 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-28",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Capabilities"
          title="A private insight layer for how you communicate."
          description="On iPhone and in Chrome — with guidance that stays beside WhatsApp on mobile and web."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={classNames(
                "transition-all duration-700",
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              )}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <FeatureCard
                index={`0${index + 1}`}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
