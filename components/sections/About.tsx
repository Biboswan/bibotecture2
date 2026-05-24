"use client"

import type * as React from "react"

import TextOpacityLetters from "@/components/animations/TextOpacityLetters"
import FadeIn from "@/components/ui/FadeIn"

const About: React.FC = () => {
  return (
    <section className="bg-[rgb(10,10,12)] px-[30px] py-24">
      <div className="mx-auto max-w-[1440px]">
        <FadeIn>
          <TextOpacityLetters
            text="After 7 years building products for teams across London, Copenhagen, and Bengaluru — plus 200+ open-source contributions to Mozilla — I started Bibotecture to help founders ship full-stack products that don't crumble at scale."
            className="max-w-4xl text-[clamp(1.25rem,3vw,1.625rem)] leading-[1.6] font-light text-[rgb(104,104,104)]"
            transitionStartIndex={0}
          />
        </FadeIn>
      </div>
    </section>
  )
}

export default About
