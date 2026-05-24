"use client"

import type * as React from "react"

import FramerPageShell from "@/components/framer/framer-page-shell"

interface LegalSection {
  heading?: string
  body: string[]
}

interface LegalContent {
  title: string
  lastUpdated: string
  intro: string
  sections: LegalSection[]
}

interface Props {
  content: LegalContent
}

const FramerLegalPage: React.FC<Props> = ({ content }) => {
  return (
    <FramerPageShell>
      <section className="framer-legal-page mx-auto max-w-[920px] px-[30px] pt-[140px] pb-24">
        <p className="mb-6 text-sm tracking-[0.08em] text-white/50 uppercase">
          Last Updated: {content.lastUpdated}
        </p>
        <h1 className="mb-8 text-[56px] leading-[100%] font-normal tracking-[-0.03em] text-white md:text-[72px]">
          {content.title}
        </h1>
        <p className="mb-14 text-[22px] leading-[160%] tracking-[-0.02em] text-white/75">
          {content.intro}
        </p>

        <div className="space-y-12 border-t border-white/10 pt-12">
          {content.sections.map((section) => (
            <article
              key={section.heading ?? section.body[0]}
              className="space-y-4"
            >
              {section.heading ? (
                <h2 className="text-[28px] leading-[130%] font-normal tracking-[-0.03em] text-white">
                  {section.heading}
                </h2>
              ) : null}
              <div className="space-y-4 text-[18px] leading-[170%] text-white/80">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </FramerPageShell>
  )
}

export default FramerLegalPage
