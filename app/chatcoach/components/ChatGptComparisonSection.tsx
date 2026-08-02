"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import { useScrollAnimation } from "../hooks/useScrollAnimation"
import SectionHeader from "./SectionHeader"

const comparisons = [
  {
    moment: "Context",
    chatgpt: "You copy, paste, explain the history, and prompt from scratch.",
    chatcoach:
      "The coaching experience stays beside the conversation you are already having.",
  },
  {
    moment: "Guidance",
    chatgpt: "A blank chat waits for you to know the right question to ask.",
    chatcoach:
      "Suggestions appear at the moment you need them, before you hit send.",
  },
  {
    moment: "Point of view",
    chatgpt: "General-purpose answers vary with every prompt.",
    chatcoach:
      "You select a coach whose communication approach fits your goal.",
  },
  {
    moment: "Learning",
    chatgpt: "You get an answer in a separate tool.",
    chatcoach:
      "You see the psychology, intent, and reasoning beside the suggested words.",
  },
] as const

export const ChatGptComparisonSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section
      ref={ref}
      className="border-cc border-t px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Why not just use ChatGPT?"
          title="Because knowing what to ask is already half the work."
          description="ChatGPT is a powerful general assistant. Chat Coach is a purpose-built coaching workflow for the conversation happening right now."
        />

        <div
          className={classNames(
            "border-cc bg-cc-elevated shadow-cc-featured overflow-hidden rounded-3xl border transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <div className="border-cc bg-cc-surface hidden grid-cols-[0.55fr_1fr_1fr] border-b px-6 py-4 sm:grid">
            <span />
            <p className="text-cc-subtle text-sm font-medium">ChatGPT</p>
            <p className="chatcoach-gradient-text text-sm font-semibold">
              Chat Coach
            </p>
          </div>

          {comparisons.map((comparison) => (
            <div
              key={comparison.moment}
              className="border-cc grid gap-4 border-b px-6 py-6 last:border-b-0 sm:grid-cols-[0.55fr_1fr_1fr] sm:gap-8"
            >
              <h3 className="text-cc-primary font-medium">
                {comparison.moment}
              </h3>
              <div>
                <p className="text-cc-faint mb-1 text-[10px] font-medium tracking-wide uppercase sm:hidden">
                  ChatGPT
                </p>
                <p className="text-cc-muted text-sm leading-relaxed">
                  {comparison.chatgpt}
                </p>
              </div>
              <div>
                <p className="chatcoach-label mb-1 text-[10px] font-medium tracking-wide uppercase sm:hidden">
                  Chat Coach
                </p>
                <p className="text-cc-primary text-sm leading-relaxed">
                  {comparison.chatcoach}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-cc-faint mt-5 text-center text-xs">
          The difference is not access to AI. It is context, timing, and a
          coaching experience designed around real conversations.
        </p>
      </div>
    </section>
  )
}
