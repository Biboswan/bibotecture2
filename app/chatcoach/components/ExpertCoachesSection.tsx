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
]

export const ExpertCoachesSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)
  const { openWaitlist } = useWaitlist()

  return (
    <section
      id="coaches"
      ref={ref}
      className={classNames(
        "border-t border-white/8 bg-[rgb(14,14,18)] px-4 py-20 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-28",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Choose your coach"
          title="Not ChatGPT in a sidebar. Coaches with a point of view."
          description="Pick an AI mode inspired by the communicators people actually study — not generic advice slapped on your chat."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {coaches.map((coach, index) => (
            <article
              key={coach.name}
              className={classNames(
                "group flex h-full flex-col rounded-2xl border border-white/10 bg-[rgb(10,10,12)] p-8 transition-all duration-700 hover:border-cyan-400/20",
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              )}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="mb-6 flex items-start justify-between gap-3">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium tracking-wide text-[rgb(180,180,190)] uppercase">
                  {coach.category}
                </span>
                <span className="text-right font-mono text-[10px] tracking-[0.14em] text-cyan-400/80 uppercase">
                  {coach.inspiredBy}
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-tight text-white">
                {coach.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-[rgb(200,200,210)]">
                {coach.hook}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[rgb(160,160,170)]">
                {coach.description}
              </p>

              <div className="mt-6 space-y-3 border-t border-white/8 pt-6">
                <p className="text-[11px] tracking-wide text-[rgb(120,120,130)] uppercase">
                  Best for
                </p>
                <p className="text-sm text-[rgb(180,180,190)]">
                  {coach.bestFor}
                </p>
                <div className="rounded-xl border border-white/8 bg-[rgb(14,14,18)] px-4 py-3">
                  <p className="text-[11px] tracking-wide text-[rgb(120,120,130)] uppercase">
                    Example nudge
                  </p>
                  <p className="mt-1 text-sm text-cyan-300/90">
                    {coach.example}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 text-center">
          <p className="max-w-2xl text-xs leading-relaxed text-[rgb(100,100,110)]">
            Coach modes are inspired by well-known communication styles — not
            affiliated with or endorsed by any public figure.
          </p>
          <Button onClick={openWaitlist}>Try coaches in early access</Button>
        </div>
      </div>
    </section>
  )
}
