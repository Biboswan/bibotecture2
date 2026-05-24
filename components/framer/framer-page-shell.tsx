"use client"

import type * as React from "react"

import Navbar from "@/components/layout/Navbar"
import FooterFramer from "@/framer/footer"

type FramerComponent = React.ComponentType<Record<string, unknown>>

const Footer = FooterFramer.Responsive as FramerComponent

interface Props {
  children: React.ReactNode
  className?: string
}

const FramerPageShell: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <Navbar />
      <div
        className={`framer-page-root min-h-dvh ${className ?? ""}`}
        style={{ backgroundColor: "var(--unframer-bg-dark, rgb(10, 10, 12))" }}
      >
        {children}
      </div>
      <div className="framer-footer-root">
        <Footer style={{ width: "100%" }} />
      </div>
    </>
  )
}

export default FramerPageShell
