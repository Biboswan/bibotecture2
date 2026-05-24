"use client"

import { ArrowRight } from "akar-icons"
import { motion } from "motion/react"
import Link from "next/link"
import type * as React from "react"

import FadeIn from "@/components/ui/FadeIn"
import { BASE_TRANSITION, FADE_UP, STAGGER_CONTAINER } from "@/utils/animation"

const projects = [
  {
    title: "Tattvam AI",
    description:
      "The first public face of an AI-for-chip-design startup, shipped with their $1.7M funding announcement.",
    category: "Launch Site · UI/UX",
    href: "https://www.tattvamlabs.ai/",
  },
  {
    title: "a11yGradient",
    description:
      "Chrome extension that calculates accessibility contrast against multi-color gradient backgrounds — solving a WCAG blind spot.",
    category: "Open Source · Chrome Extension",
    href: "https://github.com/Biboswan/a11yGradient",
  },
]

const Portfolio: React.FC = () => {
  return (
    <section id="work" className="bg-[rgb(10,10,12)] px-[30px] py-24">
      <div className="mx-auto max-w-[1440px]">
        <FadeIn className="mb-16">
          <p className="mb-4 text-[15px] tracking-[0.1em] text-[rgb(104,104,104)] uppercase">
            featured projects
          </p>
          <h2 className="max-w-3xl text-[clamp(1.75rem,4vw,2rem)] leading-snug font-normal text-white">
            A selection of work — from shipped products at SentinelOne to
            open-source tools and launch sites for funded startups.
          </h2>
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center gap-2 text-base text-white hover:opacity-80"
          >
            see all works
            <ArrowRight size={16} />
          </Link>
        </FadeIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={STAGGER_CONTAINER}
          className="grid gap-6 lg:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={FADE_UP}
              transition={BASE_TRANSITION}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-white/8 bg-white/3 p-8 transition-colors hover:border-white/15 hover:bg-white/5"
              >
                <p className="mb-3 text-xs tracking-widest text-[rgb(104,104,104)] uppercase">
                  {project.category}
                </p>
                <h3 className="mb-4 text-3xl font-light text-white">
                  {project.title}
                </h3>
                <p className="text-base leading-relaxed text-[rgb(204,204,204)]">
                  {project.description}
                </p>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
