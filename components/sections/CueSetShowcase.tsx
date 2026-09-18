import Link from "next/link"
import type * as React from "react"

import config from "@/config"

const CueSetShowcase: React.FC = () => {
  return (
    <section
      id="cueset"
      className="border-y border-white/10 bg-[rgb(10,10,12)] px-[30px] py-24"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="mb-6 text-[15px] tracking-[0.1em] text-cyan-400 uppercase">
            Our product
          </p>
          <h2 className="text-[clamp(3rem,8vw,7rem)] leading-none font-light tracking-[-0.04em] text-white">
            CueSet
          </h2>
        </div>

        <div className="max-w-2xl">
          <p className="text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.3] font-light tracking-[-0.02em] text-white">
            An AI communication coach for clearer, more confident conversations.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-[rgb(170,170,170)]">
            CueSet analyzes user-provided messages and offers personalized
            feedback, tone guidance, and reply suggestions across Chrome and
            iOS. It is Bibotecture&apos;s standalone SaaS product, developed and
            operated by our India team.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={config.cueSetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-white px-7 py-3 text-base text-black transition-colors hover:bg-cyan-300"
            >
              explore CueSet
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-white/20 px-7 py-3 text-base text-white transition-colors hover:bg-white/5"
            >
              work with us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CueSetShowcase
