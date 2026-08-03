"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import { useScrollAnimation } from "../hooks/useScrollAnimation"
import CoachPickerPreview from "./CoachPickerPreview"
import DownloadCta from "./DownloadCta"

const coachStyles = [
  {
    name: "ChatCoach",
    use: "Everyday conversations",
    hook: "Balanced EQ and communication coaching for any chat.",
    description:
      "Balanced communication coaching that helps you understand the moment, consider both sides, and write a response that sounds like you.",
    bestFor: "Clarity, EQ, tone, and everyday communication",
    example: '"What do you want them to understand after reading this?"',
  },
  {
    name: "Chris Voss",
    use: "Sales & negotiation",
    hook: "Calibrated questions. Tactical empathy. No amateur hour.",
    description:
      "Get FBI-style negotiation coaching in the thread: how to de-escalate, hold your frame, and move the conversation forward.",
    bestFor: "Salary talks, deals, and pushback",
    example: '"How am I supposed to do that?"',
  },
  {
    name: "Matthew Hussey",
    use: "Dating & relationships",
    hook: "High-value energy. Playful. Actually memorable.",
    description:
      "Get Matthew Hussey-style dating coaching in the thread: how to spark connection, stay confident, and never send a message that sounds copy-pasted.",
    bestFor: "First messages, flirting, and follow-ups",
    example: '"Ask something only they could answer."',
  },
] as const

export const ConsumerCoachesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)
  const baseId = React.useId()
  const [openIndex, setOpenIndex] = React.useState(0)

  return (
    <section
      id="coaches"
      ref={ref}
      className="border-cc bg-cc-section scroll-mt-20 border-t px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div
          className={classNames(
            "transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <p className="chatcoach-label mb-4 font-mono text-[11px] tracking-[0.2em] uppercase">
            Choose or Find Your Ideal Coach
          </p>
          <h2 className="text-cc-primary text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            There is no one-size-fits-all coach.
          </h2>
          <p className="text-cc-muted mt-6 text-base leading-relaxed sm:text-lg">
            Every coach brings a different framework, voice, and way of seeing a
            conversation. Choose the perspective that resonates with you and
            apply it to real conversations in real time.
          </p>

          <div className="mt-8 space-y-3">
            {coachStyles.map((coach, index) => {
              const isOpen = openIndex === index
              const headerId = `${baseId}-header-${index}`
              const panelId = `${baseId}-panel-${index}`

              return (
                <div
                  key={coach.name}
                  className="border-cc bg-cc-elevated shadow-cc-card overflow-hidden rounded-2xl border"
                >
                  <h3>
                    <button
                      type="button"
                      id={headerId}
                      aria-label={`${coach.name}, ${coach.use}`}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="flex w-full items-start gap-4 p-4 text-left transition-colors hover:bg-[rgb(var(--cc-bg-section))]"
                    >
                      <span className="chatcoach-gradient-text flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-[rgba(0,202,254,0.08)] font-mono text-xs font-semibold">
                        0{index + 1}
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col gap-1">
                        <span className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                          <span className="text-cc-primary font-semibold">
                            {coach.name}
                          </span>
                          <span className="text-cc-subtle text-xs">
                            {coach.use}
                          </span>
                        </span>
                        <span className="text-cc-muted text-sm leading-relaxed">
                          {coach.hook}
                        </span>
                      </span>
                      <svg
                        className={classNames(
                          "text-cc-muted mt-1 h-5 w-5 flex-none transition-transform duration-300",
                          isOpen && "rotate-180"
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headerId}
                    inert={!isOpen}
                    className={classNames(
                      "grid transition-all duration-300 ease-out",
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="pr-4 pb-4 pl-[3.25rem]">
                        <p className="text-cc-muted text-sm leading-relaxed">
                          {coach.description}
                        </p>
                        <div className="mt-4 space-y-2">
                          <p className="text-cc-subtle text-[11px] tracking-wide uppercase">
                            Best for
                          </p>
                          <p className="text-cc-muted text-sm">
                            {coach.bestFor}
                          </p>
                          <div className="border-cc bg-cc-surface mt-1 rounded-xl border px-4 py-3">
                            <p className="text-cc-subtle text-[11px] tracking-wide uppercase">
                              Example nudge
                            </p>
                            <p className="mt-1 text-sm text-[rgb(0,140,190)]">
                              {coach.example}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-cc-subtle mt-6 text-sm leading-relaxed">
            Get access to their expert mind 24/7 and improve yourself
            constantly.
          </p>

          <div className="mt-8 flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-cc-primary mb-3 text-base font-semibold">
              Choose your coach
            </p>
            <DownloadCta label="Add to Chrome" brandedChromeIcon />
          </div>
        </div>

        <div
          className={classNames(
            "relative mx-auto w-full max-w-[420px] transition-all delay-150 duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          <div
            className="chatcoach-glow-preview pointer-events-none absolute -inset-10 rounded-full"
            aria-hidden="true"
          />
          <figure className="border-cc-strong bg-cc-elevated shadow-cc-featured relative overflow-hidden rounded-[28px] border p-2 sm:p-3">
            <div className="overflow-hidden rounded-[20px]">
              <CoachPickerPreview />
            </div>
            <figcaption className="text-cc-subtle px-3 py-3 text-center text-xs">
              Pick a coaching style without leaving your conversation.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
