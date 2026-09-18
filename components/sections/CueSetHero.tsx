import Link from "next/link"
import type * as React from "react"

import config from "@/config"

const CueSetHero: React.FC = () => {
  return (
    <section className="flex min-h-[calc(100dvh-44px)] items-end bg-[rgb(6,6,6)] px-[30px] pt-36 pb-20">
      <div className="mx-auto w-full max-w-[1800px]">
        <p className="mb-7 text-[15px] tracking-[0.1em] text-cyan-400 uppercase">
          Bibotecture&apos;s product
        </p>
        <h1 className="max-w-6xl text-[clamp(4rem,14vw,13rem)] leading-[0.82] font-light tracking-[-0.06em] text-white">
          CueSet
        </h1>
        <div className="mt-10 grid max-w-5xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-3xl text-[clamp(1.5rem,3.5vw,3rem)] leading-[1.2] font-light tracking-[-0.03em] text-white">
            Your AI communication coach for clearer, more confident
            conversations.
          </p>
          <Link
            href={config.cueSetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit rounded-full bg-white px-8 py-3 text-base text-black transition-colors hover:bg-cyan-300"
          >
            explore CueSet
          </Link>
        </div>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-[rgb(170,170,170)] sm:text-lg">
          CueSet analyzes user-provided messages and gives personalized
          feedback, tone guidance, and reply suggestions across Chrome and iOS.
          Built by Bibotecture Private Ltd in India.
        </p>
      </div>
    </section>
  )
}

export default CueSetHero
