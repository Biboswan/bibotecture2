"use client"

import Image from "next/image"
import * as React from "react"

import classNames from "@/utils/classNames"

import { chatCoachConfig } from "../config"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import DownloadCta from "./DownloadCta"

const coachStyles = [
  {
    name: "ChatCoach",
    use: "Everyday conversations",
    description: "Balanced EQ and communication coaching for any chat.",
  },
  {
    name: "Chris Voss",
    use: "Sales & negotiation",
    description: "Tactical empathy for difficult asks, deals, and pushback.",
  },
  {
    name: "Matthew Hussey",
    use: "Dating & relationships",
    description: "Confident, human guidance for connection and dating.",
  },
] as const

export const ConsumerCoachesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section
      ref={ref}
      className="border-cc bg-cc-section border-t px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div
          className={classNames(
            "transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <p className="chatcoach-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase">
            Choose who is in your corner
          </p>
          <h2 className="text-cc-primary text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            One conversation. A coach for the moment.
          </h2>
          <p className="text-cc-muted mt-6 text-base leading-relaxed sm:text-lg">
            Before Chat Coach suggests what to say, you choose how you want to
            be coached. Pick a general communication coach or a specialist whose
            approach fits the conversation.
          </p>

          <div className="mt-8 space-y-3">
            {coachStyles.map((coach, index) => (
              <div
                key={coach.name}
                className="border-cc bg-cc-elevated shadow-cc-card flex gap-4 rounded-2xl border p-4"
              >
                <span className="chatcoach-gradient-text flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-[rgba(0,202,254,0.08)] font-mono text-xs font-semibold">
                  0{index + 1}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                    <h3 className="text-cc-primary font-semibold">
                      {coach.name}
                    </h3>
                    <span className="text-cc-subtle text-xs">{coach.use}</span>
                  </div>
                  <p className="text-cc-muted mt-1 text-sm leading-relaxed">
                    {coach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-cc-subtle mt-6 text-sm leading-relaxed">
            Switch coaches whenever the conversation changes. Suggestions and
            explanations adapt to the coach you select.
          </p>

          <div className="mt-8">
            <DownloadCta label="Choose your coach — add to Chrome" />
          </div>
        </div>

        <div
          className={classNames(
            "relative mx-auto w-full max-w-[570px] transition-all delay-150 duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div
            className="chatcoach-glow-preview pointer-events-none absolute -inset-10 rounded-full"
            aria-hidden="true"
          />
          <figure className="border-cc-strong bg-cc-elevated shadow-cc-featured relative overflow-hidden rounded-[28px] border p-2 sm:p-3">
            <Image
              src={chatCoachConfig.coachPickerOpen}
              alt="Chat Coach picker open with general, negotiation, and dating coaches"
              width={748}
              height={1296}
              sizes="(max-width: 1024px) 90vw, 570px"
              className="h-auto w-full rounded-[20px]"
            />
            <figcaption className="text-cc-subtle px-3 py-3 text-center text-xs">
              Pick a coaching style without leaving your conversation.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
