"use client"

import * as React from "react"
import Link from "next/link"

const ChatCoachFooter: React.FC = () => {
  return (
    <footer className="border-t border-white/8 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-base font-semibold text-white">Chat Coach</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-[rgb(130,130,140)]">
            A product by Bibotecture Ltd · London
          </p>
          <p className="mt-4 text-xs text-[rgb(100,100,110)]">
            © {new Date().getFullYear()} Bibotecture Ltd
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/privacy-policy/"
            className="text-[rgb(160,160,170)] transition-colors hover:text-white"
          >
            Privacy
          </Link>
          <Link
            href="/terms-of-service/"
            className="text-[rgb(160,160,170)] transition-colors hover:text-white"
          >
            Terms
          </Link>
          <a
            href="https://bibotecture.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[rgb(160,160,170)] transition-colors hover:text-white"
          >
            bibotecture.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default ChatCoachFooter
