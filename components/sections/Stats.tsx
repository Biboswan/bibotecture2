"use client"

import type * as React from "react"

import AnimatedCounter from "@/components/animations/AnimatedCounter"
import FadeIn from "@/components/ui/FadeIn"

const stats = [
  { label: "Years building products", end: 7, suffix: "+" },
  { label: "Open-source", end: 200, suffix: "+" },
  { label: "Countries shipped to", end: 3, suffix: "" },
  { label: "Production stacks", end: 12, suffix: "+" },
]

const Stats: React.FC = () => {
  return (
    <section className="border-y border-white/8 bg-[rgb(10,10,12)] px-[30px] py-24">
      <div className="mx-auto grid max-w-[1440px] gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <FadeIn key={stat.label} delay={i * 0.08}>
            <p className="mb-4 text-lg text-[rgb(204,204,204)]">{stat.label}</p>
            <p className="text-[clamp(3rem,8vw,5rem)] leading-none font-light text-white">
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

export default Stats
