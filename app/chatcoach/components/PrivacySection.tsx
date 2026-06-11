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
        <div className="border-cc bg-cc-elevated shadow-cc-card flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-[rgb(0,160,210)]">
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
          <div className="mt-3 w-px flex-1 bg-gradient-to-b from-black/10 to-transparent" />
        ) : null}
      </div>
      <div className={classNames(isLast ? "pb-0" : "pb-12 sm:pb-14")}>
        <h3 className="text-cc-primary mb-2 text-xl font-medium tracking-tight sm:text-2xl">
          {title}
        </h3>
        <p className="text-cc-muted max-w-2xl text-base leading-relaxed sm:text-lg">
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
      title: "No training on your messages",
      description:
        "We don't use your conversations to train models. Processing generates your guidance, then it's gone.",
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
        "border-cc bg-cc-elevated border-t px-4 py-20 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-28",
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
            "border-cc mt-10 border-t pt-10 transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
          style={{
            transitionDelay: isVisible ? "400ms" : "0ms",
          }}
        >
          <p className="text-cc-subtle mb-4 font-mono text-[11px] tracking-[0.2em] uppercase">
            On the roadmap
          </p>
          <div className="flex flex-wrap gap-2">
            {roadmapItems.map((item) => (
              <span
                key={item}
                className="border-cc bg-cc-surface text-cc-subtle rounded-full px-3 py-1.5 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-cc-faint mt-5 text-xs leading-relaxed">
            Roadmap items reflect our direction — not current guarantees.
          </p>
        </div>
      </div>
    </section>
  )
}
