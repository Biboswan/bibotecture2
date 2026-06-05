"use client"

import * as React from "react"

import ChatCoachAnnouncement from "@/components/layout/ChatCoachAnnouncement"
import Navbar from "@/components/layout/Navbar"

const SiteTopChrome: React.FC = () => {
  const chromeRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const chrome = chromeRef.current
    if (!chrome) return

    const syncChromeHeight = () => {
      document.documentElement.style.setProperty(
        "--site-top-chrome-height",
        `${chrome.offsetHeight}px`
      )
    }

    syncChromeHeight()

    const observer = new ResizeObserver(syncChromeHeight)
    observer.observe(chrome)

    return () => {
      observer.disconnect()
      document.documentElement.style.removeProperty("--site-top-chrome-height")
    }
  }, [])

  return (
    <div
      ref={chromeRef}
      id="site-top-chrome"
      className="site-top-chrome pointer-events-none fixed inset-x-0 top-0 isolate z-[10000] flex flex-col"
    >
      <ChatCoachAnnouncement embedded />
      <Navbar embedded />
    </div>
  )
}

export default SiteTopChrome
