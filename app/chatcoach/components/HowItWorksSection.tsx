"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import SectionHeader from "./SectionHeader"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

interface StepProps {
  number: string
  title: string
  description: string
  bullets?: string[]
  isLast?: boolean
}

const Step: React.FC<StepProps> = ({
  number,
  title,
  description,
  bullets,
  isLast,
}) => {
  return (
    <div className="relative flex gap-6 sm:gap-8">
      <div className="flex flex-col items-center">
        <div className="border-cc bg-cc-elevated shadow-cc-card chatcoach-gradient-text flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-mono text-sm">
          {number}
        </div>
        {!isLast ? (
          <div className="mt-3 w-px flex-1 bg-gradient-to-b from-black/10 to-transparent" />
        ) : null}
      </div>
      <div className="pb-12 sm:pb-14">
        <h3 className="text-cc-primary mb-2 text-xl font-medium tracking-tight sm:text-2xl">
          {title}
        </h3>
        <p className="text-cc-muted max-w-2xl text-base leading-relaxed sm:text-lg">
          {description}
        </p>
        {bullets?.length ? (
          <ul className="mt-4 space-y-2">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="text-cc-muted flex items-start gap-2 text-sm sm:text-base"
              >
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-[rgb(0,202,254)]" />
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export const HowItWorksSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)

  const steps = [
    {
      number: "01",
      title: "Install beside WhatsApp",
      description:
        "Set up on mobile or desktop — coaching appears in a side panel while you draft.",
      bullets: [
        "iMessage, Telegram, and more messaging apps are on the roadmap.",
      ],
    },
    {
      number: "02",
      title: "Get feedback before you hit send",
      description:
        "Chat Coach reads tone, emotional cues, and conversation patterns as you draft, offering guidance exactly when you need it.",
      bullets: [
        "Choose AI coaches for negotiation, dating, real estate, and more.",
      ],
    },
    {
      number: "03",
      title: "Ask for guidance or explore suggestions",
      description:
        "Get answers on communication psychology, difficult conversations, and emotional intelligence — without leaving the thread.",
    },
  ]

  return (
    <section
      id="how-it-works"
      ref={ref}
      className={classNames(
        "border-cc bg-cc-section border-t px-4 py-20 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-28",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          label="How it works"
          title="Guidance that stays beside the conversation."
        />

        <div>
          {steps.map((step, index) => (
            <div
              key={step.number}
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
              <Step
                number={step.number}
                title={step.title}
                description={step.description}
                bullets={step.bullets}
                isLast={index === steps.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
