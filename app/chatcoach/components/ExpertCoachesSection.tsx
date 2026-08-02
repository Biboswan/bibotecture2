"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import { useScrollAnimation } from "../hooks/useScrollAnimation"
import DownloadCta from "./DownloadCta"
import SectionHeader from "./SectionHeader"

const coaches = [
  {
    category: "Everyday conversations",
    name: "ChatCoach",
    inspiredBy: "General coach",
    bestFor: "Clarity, EQ, tone, and everyday communication",
    hook: "Start here when you need a thoughtful second opinion.",
    description:
      "Balanced communication coaching that helps you understand the moment, consider both sides, and write a response that sounds like you.",
    example: '"What do you want them to understand after reading this?"',
  },
  {
    category: "Negotiation",
    name: "Chris Voss",
    inspiredBy: "Specialist coach",
    bestFor: "Salary talks, deals, and pushback",
    hook: "Calibrated questions. Tactical empathy. No amateur hour.",
    description:
      "Get FBI-style negotiation coaching in the thread: how to de-escalate, hold your frame, and move the conversation forward.",
    example: '"How am I supposed to do that?"',
  },
  {
    category: "Dating",
    name: "Matthew Hussey",
    inspiredBy: "Specialist coach",
    bestFor: "First messages, flirting, and follow-ups",
    hook: "High-value energy. Playful. Actually memorable.",
    description:
      "Get Matthew Hussey-style dating coaching in the thread: how to spark connection, stay confident, and never send a message that sounds copy-pasted.",
    example: '"Ask something only they could answer."',
  },
]

export const ExpertCoachesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section
      id="coaches"
      ref={ref}
      className={classNames(
        "border-cc bg-cc-section border-t px-4 py-20 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-28",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Meet the coaches"
          title="The same conversation, seen through a different lens."
          description="Start with balanced communication coaching, or choose a specialist for negotiation or dating. Your selected coach shapes every suggestion and explanation."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {coaches.map((coach, index) => (
            <article
              key={coach.name}
              className={classNames(
                "group border-cc bg-cc-elevated shadow-cc-card hover:border-cc-accent flex h-full flex-col rounded-2xl p-8 transition-all duration-700",
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              )}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="mb-6 flex items-start justify-between gap-3">
                <span className="cc-pill rounded-full px-3 py-1 text-[11px] font-medium tracking-wide uppercase">
                  {coach.category}
                </span>
                <span className="chatcoach-label text-right font-mono text-[10px] tracking-[0.14em] uppercase">
                  {coach.inspiredBy}
                </span>
              </div>

              <h3 className="text-cc-primary text-2xl font-semibold tracking-tight">
                {coach.name}
              </h3>
              <p className="text-cc-primary mt-2 text-sm font-medium">
                {coach.hook}
              </p>
              <p className="text-cc-muted mt-4 flex-1 text-sm leading-relaxed">
                {coach.description}
              </p>

              <div className="border-cc mt-6 space-y-3 border-t pt-6">
                <p className="text-cc-subtle text-[11px] tracking-wide uppercase">
                  Best for
                </p>
                <p className="text-cc-muted text-sm">{coach.bestFor}</p>
                <div className="border-cc bg-cc-surface rounded-xl px-4 py-3">
                  <p className="text-cc-subtle text-[11px] tracking-wide uppercase">
                    Example nudge
                  </p>
                  <p className="mt-1 text-sm text-[rgb(0,140,190)]">
                    {coach.example}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="text-cc-faint max-w-2xl text-xs leading-relaxed">
            Coach modes are inspired by well-known communication styles, not
            affiliated with or endorsed by any public figure.
          </p>
          <DownloadCta label="Try coaches on Chrome" />
        </div>
      </div>
    </section>
  )
}
