import * as React from "react"

import classNames from "@/utils/classNames"

import { chatCoachConfig } from "../config"

export interface Props {
  className?: string
  label?: string
  variant?: "primary" | "secondary"
  brandedChromeIcon?: boolean
}

const ChromeIcon: React.FC = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#EA4335"
      d="M12 3a9 9 0 0 1 7.79 4.5H12a4.5 4.5 0 0 0-3.9 2.25L5.5 5.24A8.95 8.95 0 0 1 12 3Z"
    />
    <path
      fill="#34A853"
      d="M19.79 7.5A9 9 0 0 1 12 21l3.9-6.75A4.5 4.5 0 0 0 12 7.5h7.79Z"
    />
    <path
      fill="#FBBC05"
      d="M12 21A9 9 0 0 1 5.5 5.24l3.9 6.76a4.5 4.5 0 0 0 6.5 2.25L12 21Z"
    />
    <circle
      cx="12"
      cy="12"
      r="3.6"
      fill="#4285F4"
      stroke="white"
      strokeWidth="1"
    />
  </svg>
)

const DownloadCta: React.FC<Props> = ({
  className,
  label = "Add to Chrome for free",
  variant = "primary",
  brandedChromeIcon = false,
}) => {
  const href = chatCoachConfig.chromeWebStoreUrl || "#"
  const external = Boolean(chatCoachConfig.chromeWebStoreUrl)

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
      {brandedChromeIcon ? (
        <ChromeIcon />
      ) : (
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 3v6.5M19.5 15.5l-5.6-3.2M4.5 15.5l5.6-3.2" />
        </svg>
      )}
      {label}
    </a>
  )
}

export default DownloadCta
