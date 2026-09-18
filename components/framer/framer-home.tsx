"use client"

import * as React from "react"

import CtaPhotoScrollDriver from "@/components/framer/cta-photo-scroll-driver"
import CueSetFullscreenBanner from "@/components/layout/CueSetFullscreenBanner"
import CueSetHero from "@/components/sections/CueSetHero"
import CueSetShowcase from "@/components/sections/CueSetShowcase"
import HomedeskFramer from "@/framer/homedesk"
import FooterFramer from "@/framer/footer"
import FaqFramer from "@/framer/faq"

type FramerComponent = React.ComponentType<Record<string, unknown>>

const Homedesk = HomedeskFramer.Responsive as FramerComponent
const Faq = FaqFramer.Responsive as FramerComponent
const Footer = FooterFramer.Responsive as FramerComponent

const FramerHome: React.FC = () => {
  return (
    <>
      <CueSetFullscreenBanner />
      <div
        className="framer-home-root min-h-dvh"
        style={{ backgroundColor: "var(--unframer-bg-dark, rgb(10, 10, 12))" }}
      >
        <CueSetHero />
        <Homedesk style={{ width: "100%" }} />
        <CueSetShowcase />
        <Faq style={{ width: "100%" }} />
        <CtaPhotoScrollDriver />
      </div>
      <div className="framer-footer-root">
        <Footer style={{ width: "100%" }} />
        <div className="border-t border-white/10 bg-[rgb(6,6,6)] px-[30px] py-8">
          <p className="mx-auto max-w-[1440px] text-center text-sm leading-relaxed text-[rgb(104,104,104)]">
            Bibotecture operates through entities in India and the United
            Kingdom. CueSet is our standalone SaaS product, developed and
            operated by Bibotecture Private Ltd in India.
          </p>
        </div>
      </div>
    </>
  )
}

export default FramerHome
