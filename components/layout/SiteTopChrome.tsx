"use client"

import * as React from "react"

import ChatCoachAnnouncement, {
  CHATCOACH_ANNOUNCEMENT_HEIGHT,
} from "@/components/layout/ChatCoachAnnouncement"
import Navbar, { NavSidebar } from "@/components/layout/Navbar"

const SiteTopChrome: React.FC = () => {
  const chromeRef = React.useRef<HTMLDivElement>(null)
  const announcementRef = React.useRef<HTMLDivElement>(null)
  const [announcementVisible, setAnnouncementVisible] = React.useState(true)
  const [announcementInView, setAnnouncementInView] = React.useState(true)
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const announcement = announcementRef.current
    if (!announcement || !announcementVisible) {
      setAnnouncementInView(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setAnnouncementInView(entry.isIntersecting),
      { threshold: 0 }
    )

    observer.observe(announcement)
    return () => observer.disconnect()
  }, [announcementVisible])

  // Framer menu hover uses viewport Y coordinates (gestureHandlers), not CSS
  // :hover. Keep the fixed anchor at top: 0 and offset with padding so hit
  // targets stay aligned when the announcement scrolls away.
  const navPaddingTop =
    announcementVisible && announcementInView
      ? CHATCOACH_ANNOUNCEMENT_HEIGHT
      : 0

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
  }, [navPaddingTop])

  return (
    <>
      {announcementVisible ? (
        <div ref={announcementRef}>
          <ChatCoachAnnouncement onVisibilityChange={setAnnouncementVisible} />
        </div>
      ) : null}
      <div
        ref={chromeRef}
        id="site-top-chrome"
        className="site-top-chrome pointer-events-none fixed inset-x-0 top-0 isolate z-10000 flex flex-col"
        style={{ paddingTop: navPaddingTop }}
      >
        <Navbar
          embedded
          menuOpen={menuOpen}
          onMenuOpen={() => setMenuOpen(true)}
          onMenuClose={() => setMenuOpen(false)}
          showSidebar={false}
        />
      </div>
      <NavSidebar open={menuOpen} onClose={() => setMenuOpen(false)} embedded />
    </>
  )
}

export default SiteTopChrome
