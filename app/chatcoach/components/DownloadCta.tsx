import * as React from "react"

import classNames from "@/utils/classNames"

import { chatCoachConfig } from "../config"

export interface Props {
  className?: string
  label?: string
  variant?: "primary" | "secondary"
}

const DownloadCta: React.FC<Props> = ({
  className,
  label = "Add to Chrome — free",
  variant = "primary",
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
      {label}
    </a>
  )
}

export default DownloadCta
