"use client"

import Image from "next/image"
import Link from "next/link"
import * as React from "react"

import classNames from "@/utils/classNames"

import DownloadCta from "./DownloadCta"

export const CHATCOACH_HEADER_HEIGHT = 64

const navLinks = [
  { href: "/chatcoach/#dating", label: "Dating" },
  { href: "/chatcoach/#real-estate", label: "Real estate" },
  { href: "/chatcoach/#coaches", label: "Why Coaching" },
]

const ChatCoachHeader: React.FC = () => {
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
        className="cc-header fixed inset-x-0 top-0 z-[10000]"
        style={{ height: CHATCOACH_HEADER_HEIGHT }}
      >
        <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/chatcoach/" className="group flex items-center gap-2.5">
            <Image
              src="/images/chatcoach/ChatCoachLogo.png"
              alt="Chat Coach logo"
              width={36}
              height={36}
              priority
              className="h-9 w-9"
            />
            <span className="flex flex-col gap-0.5">
              <span className="text-cc-primary text-base font-semibold tracking-tight">
                Chat <span style={{ color: "#6366f1" }}>Coach</span>
              </span>
            </span>
          </Link>

          <nav
            aria-label="Chat Coach"
            className="hidden items-center gap-8 md:flex"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cc-muted hover:text-cc-primary text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/chatcoach/for-coaches"
              className="text-cc-muted hover:text-cc-primary text-sm transition-colors"
            >
              For coaches
            </Link>
            <DownloadCta
              label="Add to Chrome"
              brandedChromeIcon
              className="px-5 py-2.5 text-[13px]"
            />
          </nav>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="border-cc-strong bg-cc-elevated text-cc-primary shadow-cc-card flex h-10 w-10 items-center justify-center rounded-full md:hidden"
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
          "fixed inset-0 z-[10001] bg-white/90 backdrop-blur-sm transition-opacity duration-200 md:hidden",
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
            <Link
              key={link.href}
              href={link.href}
              className="text-cc-primary text-2xl font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <DownloadCta
            label="Add to Chrome"
            brandedChromeIcon
            className="mt-2"
          />
          <Link
            href="/chatcoach/coaches/"
            className="text-cc-subtle hover:text-cc-primary text-sm transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            For coaches & experts
          </Link>
        </nav>
      </div>
    </>
  )
}

export default ChatCoachHeader
