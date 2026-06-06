"use client"

import { AnimatePresence, motion } from "motion/react"
import type * as React from "react"
import { useCallback, useEffect, useState } from "react"

import NavigationBarFramer from "@/framer/navigation-bar"
import SidebarFramer from "@/framer/sidebar"
import classNames from "@/utils/classNames"

type FramerComponent = React.ComponentType<Record<string, unknown>>

const NavigationBar = NavigationBarFramer.Responsive as FramerComponent
const Sidebar = SidebarFramer.Responsive as FramerComponent

export interface NavSidebarProps {
  open: boolean
  onClose: () => void
  embedded?: boolean
}

export const NavSidebar: React.FC<NavSidebarProps> = ({
  open,
  onClose,
  embedded = false,
}) => {
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
          className={classNames(
            "framer-nav-sidebar fixed inset-0",
            embedded ? "z-[10001]" : "z-[9999]"
          )}
        >
          <Sidebar
            style={{ width: "100%", height: "100dvh" }}
            tap={onClose}
            click={onClose}
            variants={{
              base: "Mobile Home",
              lg: "Home",
            }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export interface Props {
  embedded?: boolean
  offsetTop?: number
  menuOpen?: boolean
  onMenuOpen?: () => void
  onMenuClose?: () => void
  showSidebar?: boolean
}

const Navbar: React.FC<Props> = ({
  embedded = false,
  offsetTop = 0,
  menuOpen: menuOpenProp,
  onMenuOpen,
  onMenuClose,
  showSidebar = true,
}) => {
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = menuOpenProp !== undefined
  const open = isControlled ? menuOpenProp : internalOpen

  const openMenu = useCallback(() => {
    if (onMenuOpen) onMenuOpen()
    else setInternalOpen(true)
  }, [onMenuOpen])

  const closeMenu = useCallback(() => {
    if (onMenuClose) onMenuClose()
    else setInternalOpen(false)
  }, [onMenuClose])

  return (
    <>
      <div
        className={classNames(
          "framer-site-nav pointer-events-none w-full",
          embedded ? "relative" : "fixed inset-x-0 z-[9998]"
        )}
        style={embedded ? undefined : { top: offsetTop }}
      >
        <div className="pointer-events-auto w-full">
          <NavigationBar style={{ width: "100%" }} tap={openMenu} />
        </div>
      </div>

      {showSidebar ? (
        <NavSidebar open={open} onClose={closeMenu} embedded={embedded} />
      ) : null}
    </>
  )
}

export default Navbar
