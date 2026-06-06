"use client"

import { Cross } from "akar-icons"
import Link from "next/link"
import * as React from "react"

import classNames from "@/utils/classNames"

export const CHATCOACH_ANNOUNCEMENT_HEIGHT = 44

const STORAGE_KEY = "chatcoach-announcement-dismissed"

export interface Props {
  onVisibilityChange?: (visible: boolean) => void
}

const ChatCoachAnnouncement: React.FC<Props> = ({ onVisibilityChange }) => {
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setVisible(false)
    }
  }, [])

  React.useEffect(() => {
    onVisibilityChange?.(visible)
  }, [visible, onVisibilityChange])

  const dismiss = React.useCallback(() => {
    localStorage.setItem(STORAGE_KEY, "true")
    setVisible(false)
  }, [])

  if (!visible) return null

  return (
    <div
      role="region"
      aria-label="Product announcement"
      className={classNames(
        "relative flex w-full items-center justify-center",
        "border-b border-white/10 bg-[rgb(10,10,12)] py-2 pr-11 pl-4 shadow-[0_1px_0_rgba(255,255,255,0.06)] sm:py-0"
      )}
      style={{ minHeight: CHATCOACH_ANNOUNCEMENT_HEIGHT }}
    >
      <p className="text-center text-[13px] leading-snug text-balance text-[rgb(204,204,204)] sm:text-[15px]">
        We&apos;re building Chat Coach —{" "}
        <Link
          href="/chatcoach/"
          className="cursor-pointer font-medium whitespace-nowrap text-cyan-400 underline-offset-2 transition-colors hover:text-cyan-300 hover:underline"
        >
          get 1 month of early access
        </Link>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute top-1/2 right-2 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-[rgb(104,104,104)] transition-colors hover:bg-white/5 hover:text-white sm:right-4"
      >
        <Cross size={14} />
      </button>
    </div>
  )
}

export default ChatCoachAnnouncement
