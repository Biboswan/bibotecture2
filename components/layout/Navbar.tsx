"use client"

import { AnimatePresence, motion } from "motion/react"
import type * as React from "react"
import { useCallback, useEffect, useState } from "react"

import NavigationBarFramer from "@/framer/navigation-bar"
import SidebarFramer from "@/framer/sidebar"

type FramerComponent = React.ComponentType<Record<string, unknown>>

const NavigationBar = NavigationBarFramer.Responsive as FramerComponent
const Sidebar = SidebarFramer.Responsive as FramerComponent

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  const openMenu = useCallback(() => setOpen(true), [])
  const closeMenu = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const html = document.documentElement
    const body = document.body

    if (open) {
      html.setAttribute("data-frameruni-stop-scroll", "")
      html.style.overflow = "hidden"
      body.style.overflow = "hidden"
    } else {
      html.removeAttribute("data-frameruni-stop-scroll")
      html.style.overflow = ""
      body.style.overflow = ""
    }

    return () => {
      html.removeAttribute("data-frameruni-stop-scroll")
      html.style.overflow = ""
      body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <div className="framer-site-nav pointer-events-none fixed inset-x-0 top-0 z-[9998]">
        <div className="pointer-events-auto w-full">
          <NavigationBar style={{ width: "100%" }} tap={openMenu} />
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="framer-sidebar"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="framer-nav-sidebar fixed inset-0 z-[9999]"
          >
            <Sidebar
              style={{ width: "100%", height: "100dvh" }}
              tap={closeMenu}
              click={closeMenu}
              variants={{
                base: "Mobile Home",
                lg: "Home",
              }}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}

export default Navbar
