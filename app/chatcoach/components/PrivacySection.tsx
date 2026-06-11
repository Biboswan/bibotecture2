"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import SectionHeader from "./SectionHeader"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

interface PrincipleProps {
  title: string
  description: string
  isLast?: boolean
}

const Principle: React.FC<PrincipleProps> = ({
  title,
  description,
  isLast,
}) => {
  return (
    <div className="relative flex gap-6 sm:gap-8">
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-cyan-400/90">
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        {!isLast ? (
          <div className="mt-3 w-px flex-1 bg-gradient-to-b from-white/20 to-transparent" />
        ) : null}
      </div>
      <div className={classNames(isLast ? "pb-0" : "pb-12 sm:pb-14")}>
        <h3 className="mb-2 text-xl font-medium tracking-tight text-white sm:text-2xl">
          {title}
        </h3>
        <p className="max-w-2xl text-base leading-relaxed text-[rgb(160,160,170)] sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  )
}

const roadmapItems = [
  "Self-hosted AI",
  "End-to-end encryption",
  "GDPR alignment",
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
        "border-t border-white/8 bg-[rgb(14,14,18)] px-4 py-20 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-28",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="Privacy"
          title="Built for sensitive conversations."
          description="Real-time processing on your device. Nothing stored on our servers."
        />

        <div>
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className={classNames(
                "transition-all duration-700",
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              )}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : "0ms",
              }}
            >
              <Principle
                title={principle.title}
                description={principle.description}
                isLast={index === principles.length - 1}
              />
            </div>
          ))}
        </div>

        <div
          className={classNames(
            "mt-10 border-t border-white/8 pt-10 transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
          style={{
            transitionDelay: isVisible ? "400ms" : "0ms",
          }}
        >
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-[rgb(120,120,130)] uppercase">
            On the roadmap
          </p>
          <div className="flex flex-wrap gap-2">
            {roadmapItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-sm text-[rgb(140,140,150)]"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs leading-relaxed text-[rgb(100,100,110)]">
            Roadmap items reflect our direction — not current guarantees.
          </p>
        </div>
      </div>
    </section>
  )
}
