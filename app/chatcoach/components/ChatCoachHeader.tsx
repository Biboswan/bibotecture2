"use client"

import Link from "next/link"
import * as React from "react"

import classNames from "@/utils/classNames"

import { Button } from "./Button"
import { useWaitlist } from "./WaitlistProvider"

export const CHATCOACH_HEADER_HEIGHT = 64

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#privacy", label: "Privacy" },
]

const ChatCoachHeader: React.FC = () => {
  const { openWaitlist } = useWaitlist()
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-[10000] border-b border-white/8 bg-[rgb(10,10,12)]/90 backdrop-blur-md"
        style={{ height: CHATCOACH_HEADER_HEIGHT }}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/chatcoach/" className="group flex flex-col gap-0.5">
            <span className="text-base font-semibold tracking-tight text-white">
              Chat Coach
            </span>
            <span className="text-[11px] text-[rgb(120,120,130)] transition-colors group-hover:text-[rgb(160,160,170)]">
              by Bibotecture
            </span>
          </Link>

          <nav
            aria-label="Chat Coach"
            className="hidden items-center gap-8 md:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[rgb(160,160,170)] transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={openWaitlist} className="px-5 py-2.5 text-[13px]">
              Early access
            </Button>
          </nav>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      <div
        className={classNames(
          "fixed inset-0 z-[10001] bg-[rgb(10,10,12)]/95 backdrop-blur-sm transition-opacity duration-200 md:hidden",
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <nav
          aria-label="Chat Coach mobile"
          className="flex h-full flex-col items-center justify-center gap-8 px-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-medium text-white"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            onClick={() => {
              setMenuOpen(false)
              openWaitlist()
            }}
          >
            Early access
          </Button>
        </nav>
      </div>
    </>
  )
}

export default ChatCoachHeader
