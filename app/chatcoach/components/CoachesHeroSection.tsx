import * as React from "react"

import BookCallCta from "./BookCallCta"

export const CoachesHeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-28 lg:pb-20">
      <div
        className="chatcoach-glow-hero pointer-events-none absolute inset-x-0 top-0 h-[520px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="chatcoach-label mb-5 font-mono text-[11px] tracking-[0.2em] uppercase">
          Chat Coach for coaches &amp; experts
        </p>
        <h1 className="text-cc-primary text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
          Your expertise, available when your clients need it most.
        </h1>
        <p className="text-cc-muted mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg lg:text-xl">
          Turn your method into an expert mind that supports more people,
          creates a lower-barrier entry to your work, and opens a new revenue
          stream, without adding more calls to your calendar.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BookCallCta label="Become a design partner" />
          <a
            href="#partner-benefits"
            className="text-cc-subtle hover:text-cc-primary text-sm transition-colors"
          >
            See the partner benefits →
          </a>
        </div>
      </div>
    </section>
  )
}
