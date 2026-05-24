"use client"

import { motion } from "motion/react"
import type * as React from "react"
import { useState } from "react"

import FadeIn from "@/components/ui/FadeIn"
import classNames from "@/utils/classNames"

const faqs = [
  {
    number: "01",
    question: "Who do you typically work with?",
    answer:
      "Early-stage founders and startups who need a full-stack partner — from first prototype through launch and beyond.",
  },
  {
    number: "02",
    question: "How long does a typical project take?",
    answer:
      "MVPs typically ship in 6–10 weeks. Larger products are scoped in phases so you see progress every sprint.",
  },
  {
    number: "03",
    question: "How is the team structured for a project?",
    answer:
      "You work directly with Biboswan — design, frontend, backend, and AI integration handled by one senior engineer.",
  },
  {
    number: "04",
    question: "What happens after launch?",
    answer:
      "We offer ongoing support, iteration sprints, and infrastructure monitoring so your product stays healthy at scale.",
  },
]

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[rgb(10,10,12)] px-[30px] py-24">
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="mb-16 max-w-3xl">
          <p className="mb-4 text-[15px] tracking-[0.1em] text-[rgb(104,104,104)] uppercase">
            FAQ
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2rem)] leading-snug font-normal text-white">
            A few quick answers to what founders ask before we kick off a
            project.
          </h2>
        </FadeIn>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <FadeIn key={faq.number} delay={i * 0.05}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-8 text-left"
                >
                  <div className="flex gap-6">
                    <span className="text-[10px] tracking-[0.1em] text-[rgb(104,104,104)] lowercase">
                      {faq.number}
                    </span>
                    <span className="text-xl text-white">{faq.question}</span>
                  </div>
                  <span
                    className={classNames(
                      "text-2xl text-[rgb(104,104,104)] transition-transform",
                      isOpen && "rotate-45"
                    )}
                  >
                    +
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="pb-8 pl-12 text-base leading-relaxed text-[rgb(204,204,204)]">
                    {faq.answer}
                  </p>
                </motion.div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Faq
