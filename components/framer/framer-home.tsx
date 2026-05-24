"use client"

import type * as React from "react"

import CtaPhotoScrollDriver from "@/components/framer/cta-photo-scroll-driver"
import Navbar from "@/components/layout/Navbar"
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
      <Navbar />
      <div
        className="framer-home-root min-h-dvh"
        style={{ backgroundColor: "var(--unframer-bg-dark, rgb(10, 10, 12))" }}
      >
        <Homedesk style={{ width: "100%" }} />
        <Faq style={{ width: "100%" }} />
        <CtaPhotoScrollDriver />
      </div>
      <div className="framer-footer-root">
        <Footer style={{ width: "100%" }} />
      </div>
    </>
  )
}

export default FramerHome
