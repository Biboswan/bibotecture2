"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { Button } from "./Button"
import SectionHeader from "./SectionHeader"
import { useWaitlist } from "./WaitlistProvider"

const coaches = [
  {
    category: "Negotiation",
    name: "The Negotiator",
    inspiredBy: "Chris Voss-style",
    bestFor: "Salary talks, deals, and pushback",
    hook: "Calibrated questions. Tactical empathy. No amateur hour.",
    description:
      "Get FBI-style negotiation coaching in the thread — how to de-escalate, hold your frame, and move the conversation forward.",
    example: '"How am I supposed to do that?"',
  },
  {
    category: "Dating",
    name: "The Connection Coach",
    inspiredBy: "Matthew Hussey-style",
    bestFor: "First messages, flirting, and follow-ups",
    hook: "High-value energy. Playful. Actually memorable.",
    description:
      "Get Matthew Hussey-style dating coaching in the thread — how to spark connection, stay confident, and never send a message that sounds copy-pasted.",
    example: '"Ask something only they could answer."',
  },
  {
    category: "Difficult conversations",
    name: "The Straight Talk Coach",
    inspiredBy: "Expert communicators",
    bestFor: "Feedback, boundaries, and repair",
    hook: "Say the hard thing. Keep the relationship.",
    description:
      "Navigate conflict, set boundaries, and recover when a message lands wrong — without nuking the connection.",
    example: '"Name the impact, not the accusation."',
  },
  {
    category: "Real estate",
    name: "The Listing Coach",
    inspiredBy: "Top producer style",
    bestFor: "Buyers, sellers, follow-ups, and offers",
    hook: "Warm. Urgent. Never desperate.",
    description:
      "Coach client threads on WhatsApp — follow-ups after showings, price conversations, and keeping deals moving without sounding pushy.",
    example: '"Would Thursday at 6 work, or is there a better time this week?"',
  },
]

export const ExpertCoachesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)
  const { openWaitlist } = useWaitlist()

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
          label="Choose your coach"
          title="Not ChatGPT in a sidebar. Coaches with a point of view."
          description="Pick an AI mode for negotiation, dating, difficult conversations, or real estate — not generic advice slapped on your chat."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
            Coach modes are inspired by well-known communication styles — not
            affiliated with or endorsed by any public figure.
          </p>
          <Button onClick={openWaitlist}>Try coaches in early access</Button>
        </div>
      </div>
    </section>
  )
}
