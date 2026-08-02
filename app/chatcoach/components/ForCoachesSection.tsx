"use client"

import { motion, useInView } from "motion/react"
import * as React from "react"

import BookCallCta from "./BookCallCta"
import SectionHeader from "./SectionHeader"

const benefits = [
  {
    title: "Revenue share",
    description:
      "Earn a percentage of the subscription fees for every user who subscribes to your expert mind.",
  },
  {
    title: "Scale without burnout",
    description:
      "Your expertise works 24/7 and can coach many more people simultaneously.",
  },
  {
    title: "Better discoverability",
    description: "Improve student-to-coach matching through the marketplace.",
  },
  {
    title: "A lower-barrier offering",
    description:
      "People who can't afford 1:1 can still experience your approach, and upgrade later.",
  },
  {
    title: "Measurable impact",
    description: "Real visibility into engagement and outcomes over time.",
  },
]

export const ForCoachesSection: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="partner-benefits"
      className="border-cc scroll-mt-20 border-t px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div ref={ref} className="mx-auto max-w-6xl">
        <SectionHeader
          label="For coaches & experts"
          title="Turn your expertise into an expert mind that coaches thousands."
          description="Your method, working around the clock, reaching people you could never fit into a calendar."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="group border-cc bg-cc-elevated shadow-cc-card hover:border-cc-accent flex h-full flex-col rounded-2xl border p-8 transition-colors duration-300"
            >
              <span className="chatcoach-label mb-6 font-mono text-xs tracking-[0.18em]">
                {`0${index + 1}`}
              </span>
              <h3 className="text-cc-primary mb-3 text-lg font-medium tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-cc-muted text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.article>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: benefits.length * 0.08,
            }}
            className="border-cc-accent bg-cc-elevated shadow-cc-featured flex h-full flex-col justify-center rounded-2xl border p-8"
          >
            <h3 className="text-cc-primary text-lg font-medium tracking-tight">
              Become a design partner
            </h3>
            <p className="text-cc-muted mt-2 text-sm leading-relaxed">
              We&apos;re hand-picking a first cohort of coaches to shape the
              product with us. Let&apos;s talk.
            </p>
            <div className="mt-6">
              <BookCallCta label="Book a call" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
