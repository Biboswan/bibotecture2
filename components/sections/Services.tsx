"use client"

import { motion } from "motion/react"
import type * as React from "react"

import FadeIn from "@/components/ui/FadeIn"
import { BASE_TRANSITION, FADE_UP, STAGGER_CONTAINER } from "@/utils/animation"

const services = [
  {
    number: "01",
    title: "Product Design",
    description:
      "From rough idea to clickable prototype. Interfaces that feel obvious to users with delightful animations.",
    tags: ["UX flows", "UI design", "Motion & prototypes"],
  },
  {
    number: "02",
    title: "Web Apps",
    description:
      "Production-grade React + TypeScript apps. Fast, accessible, built to scale past launch day.",
    tags: ["React + TypeScript", "Next.js", "Vercel deploy"],
  },
  {
    number: "03",
    title: "AI Integration",
    description:
      "LLM features that actually ship — agents, RAG, structured generation on real product flows.",
    tags: ["Vercel AI SDK", "Agents & RAG", "Streaming UX"],
  },
  {
    number: "04",
    title: "Backend & Infra",
    description:
      "APIs, databases, and cloud that hold up. Postgres, Mongo, GCP — wired for reliability.",
    tags: ["Postgres / Mongo", "Node APIs", "GCP infra"],
  },
]

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-[rgb(10,10,12)] px-[30px] py-24">
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="mb-16 max-w-3xl">
          <p className="mb-4 text-[15px] tracking-[0.1em] text-[rgb(104,104,104)] uppercase">
            Services
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2rem)] leading-snug font-normal text-white">
            End-to-end product capability — design, web, AI, backend. One team,
            idea to launch.
          </h2>
        </FadeIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={STAGGER_CONTAINER}
          className="grid gap-8 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={FADE_UP}
              transition={BASE_TRANSITION}
              whileHover={{ y: -4 }}
              className="border-t border-white/10 pt-8"
            >
              <p className="mb-4 text-[10px] tracking-[0.1em] text-[rgb(104,104,104)] lowercase">
                {service.number}
              </p>
              <h3 className="mb-4 text-2xl font-normal text-white">
                {service.title}
              </h3>
              <p className="text-base leading-relaxed text-[rgb(204,204,204)]">
                {service.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="text-sm text-[rgb(104,104,104)] before:mr-1 before:content-['#']"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
