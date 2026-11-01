import type * as React from "react"

import FramerPageShell from "@/components/framer/framer-page-shell"
import config from "@/config"
import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/careers/",
  title: `Careers | ${config.appName}`,
  description:
    "Explore internship opportunities at CueSet and help people find the right words for the conversations that matter.",
})

const CareersPage: React.FC = () => {
  return (
    <FramerPageShell>
      <main className="mx-auto max-w-6xl px-6 pt-40 pb-24 sm:px-10 lg:px-12">
        <section className="grid items-center gap-12 border-b border-white/10 pb-20 lg:grid-cols-[1.1fr_.9fr] lg:pb-24">
          <div>
            <p className="mb-6 text-sm font-semibold tracking-[0.16em] text-violet-300 uppercase">
              Careers at CueSet · Bibotecture
            </p>
            <h1 className="max-w-3xl text-5xl leading-[1.06] font-medium tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Help people find the right words.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/65">
              We’re building thoughtful coaching for the conversations that
              matter. Join us as an intern and help shape what that looks like.
            </p>
            <a
              href="#internships"
              className="mt-9 inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-white/85"
            >
              Explore internship{" "}
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </a>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-violet-500/35 via-fuchsia-400/10 to-transparent p-px">
            <div className="rounded-[calc(2rem-1px)] border border-white/10 bg-[#141318] p-8 sm:p-10">
              <p className="text-xs font-semibold tracking-[0.18em] text-violet-300 uppercase">
                The idea
              </p>
              <p className="mt-6 text-2xl leading-snug font-medium tracking-tight text-white sm:text-3xl">
                A little more clarity can change an entire conversation.
              </p>
              <div className="mt-9 rounded-2xl border border-white/8 bg-white/[0.04] p-5 text-sm text-white/60">
                <span className="font-semibold text-white">CueSet coach</span>
                <p className="mt-2 leading-6">
                  Pause before replying. What do you want them to understand?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="internships" className="scroll-mt-28 pt-16 sm:pt-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-violet-300 uppercase">
            Open internship
          </p>
          <h2 className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Learn by making something real.
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-white/60">
            Join a small team, work on meaningful projects, and learn by doing.
          </p>

          <article className="mt-9 rounded-3xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-violet-300 uppercase">
              Community &amp; Growth
            </p>
            <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-xl font-medium text-white sm:text-2xl">
                  Community Outreach &amp; User Testing Intern
                </h3>
                <p className="mt-3 leading-7 text-white/60">
                  Help more people discover CueSet through offline campaigns,
                  invite potential users to test the product, and share their
                  feedback with the team.
                </p>
              </div>
              <a
                href="https://www.usecueset.com/careers/community-outreach-user-testing-intern/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 w-fit shrink-0 items-center rounded-full border border-white/20 px-5 text-sm font-medium text-white transition hover:border-violet-300/60 hover:text-violet-200"
              >
                View job description{" "}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            </div>
          </article>
        </section>
      </main>
    </FramerPageShell>
  )
}

export default CareersPage
