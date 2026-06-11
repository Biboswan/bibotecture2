"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import SectionHeader from "./SectionHeader"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

const privacyBadges = [
  {
    label: "Real-time processing",
    detail: "Analyzed as you type, not saved",
    comingSoon: false,
  },
  {
    label: "Delete anytime",
    detail: "Full control on your device",
    comingSoon: false,
  },
  {
    label: "Self-hosted AI",
    detail: "No external model providers",
    comingSoon: true,
  },
  {
    label: "End-to-end encrypted",
    detail: "Protected in transit",
    comingSoon: true,
  },
  {
    label: "GDPR aligned",
    detail: "Audit-ready controls",
    comingSoon: true,
  },
]

export const PrivacySection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)

  const principles = [
    {
      title: "Processed in real-time, never stored",
      description:
        "When you request insights, messages pass through the model to generate guidance. That processing data is not persisted on our servers.",
    },
    {
      title: "iOS app and Chrome extension",
      description:
        "Chat Coach ships on iPhone and as a Chrome extension for WhatsApp Web today. More messaging apps are on the roadmap — without changing how privacy works.",
    },
    {
      title: "You stay in control",
      description:
        "Clear chat history from your device at any time. Because storage lives with you, deletion means deletion.",
    },
  ]

  return (
    <section
      id="privacy"
      ref={ref}
      className={classNames(
        "border-t border-white/8 px-4 py-20 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-28",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Privacy"
          title="Built for sensitive conversations."
          description="What is live today — and what we are building toward."
        />

        <div
          className={classNames(
            "mb-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
            "transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          {privacyBadges.map((badge) => (
            <div
              key={badge.label}
              className={classNames(
                "relative rounded-xl border px-4 py-4",
                badge.comingSoon
                  ? "border-white/6 bg-[rgb(14,14,18)]/60 opacity-70"
                  : "border-white/10 bg-[rgb(14,14,18)]"
              )}
            >
              {badge.comingSoon ? (
                <span className="mb-2 inline-block rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] tracking-wide text-[rgb(130,130,140)] uppercase">
                  Coming soon
                </span>
              ) : null}
              <p
                className={classNames(
                  "text-sm font-medium",
                  badge.comingSoon ? "text-[rgb(180,180,190)]" : "text-white"
                )}
              >
                {badge.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[rgb(130,130,140)]">
                {badge.detail}
              </p>
            </div>
          ))}
        </div>

        <p className="mb-8 text-xs text-[rgb(100,100,110)]">
          Privacy infrastructure in active development. Roadmap items reflect
          our direction, not current guarantees.
        </p>

        <div className="grid gap-4 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className={classNames(
                "rounded-2xl border border-white/10 bg-[rgb(14,14,18)] p-7 transition-all duration-700",
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              )}
              style={{
                transitionDelay: isVisible ? `${150 + index * 100}ms` : "0ms",
              }}
            >
              <h3 className="mb-3 text-lg font-medium text-white">
                {principle.title}
              </h3>
              <p className="text-sm leading-relaxed text-[rgb(160,160,170)] sm:text-base">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
