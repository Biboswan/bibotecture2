import * as React from "react"

import classNames from "@/utils/classNames"

import { chatCoachConfig } from "../config"

export interface Props {
  className?: string
  label?: string
  variant?: "primary" | "secondary"
}

const BookCallCta: React.FC<Props> = ({
  className,
  label = "Book a discovery call",
  variant = "primary",
}) => {
  const href = chatCoachConfig.bookingUrl || "#"
  const external = Boolean(chatCoachConfig.bookingUrl)

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={classNames(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-[filter,opacity,background-color,border-color] duration-200",
        variant === "primary" && "chatcoach-btn-primary",
        variant === "secondary" &&
          "border-cc-strong bg-cc-elevated text-cc-primary shadow-cc-card hover:border-cc-accent hover:bg-cc-surface",
        className
      )}
    >
      <svg
        className="h-4 w-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
        <path d="M3 9h18M8 2.5v4M16 2.5v4" strokeLinecap="round" />
      </svg>
      {label}
    </a>
  )
}

export default BookCallCta
