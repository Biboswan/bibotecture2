"use client"

import { motion } from "motion/react"
import type * as React from "react"

import FadeIn from "@/components/ui/FadeIn"
import { BASE_TRANSITION, FADE_UP, STAGGER_CONTAINER } from "@/utils/animation"

const testimonials = [
  {
    date: "21.05.2026",
    quote:
      "The availability and the extra effort put in understanding our requirements was massively helpful in delivering our project on time",
    name: "Bragadeesh",
    role: "CEO at Tattvam AI",
  },
  {
    date: "11.07.2018",
    quote:
      "broy27 has been contributing to taskcluster and involved in discussions around the upcoming taskcluster-events refactoring.",
    name: "Jonas Finnemann Jensen",
    role: "Ex-Mozilla · Software Engineer, Google",
  },
]

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[rgb(10,10,12)] px-[30px] py-24">
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="mb-16 max-w-3xl">
          <p className="mb-4 text-[15px] tracking-[0.1em] text-[rgb(104,104,104)] uppercase">
            testimonials
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2rem)] leading-snug font-normal text-white">
            From founders we&apos;ve shipped for, and engineers we&apos;ve built
            alongside.
          </h2>
        </FadeIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={STAGGER_CONTAINER}
          className="grid gap-8 lg:grid-cols-2"
        >
          {testimonials.map((item) => (
            <motion.blockquote
              key={item.name}
              variants={FADE_UP}
              transition={BASE_TRANSITION}
              className="rounded-2xl border border-white/8 bg-white/3 p-8"
            >
              <p className="mb-6 text-xs tracking-widest text-[rgb(104,104,104)]">
                {item.date}
              </p>
              <p className="mb-8 text-xl leading-relaxed text-white">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer>
                <p className="text-base font-medium text-white">{item.name}</p>
                <p className="text-sm text-[rgb(104,104,104)]">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
