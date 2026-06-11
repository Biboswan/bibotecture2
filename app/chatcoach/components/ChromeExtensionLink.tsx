import * as React from "react"

import classNames from "@/utils/classNames"

import { chatCoachConfig } from "../config"

export interface Props {
  className?: string
}

const ChromeExtensionLink: React.FC<Props> = ({ className }) => {
  if (!chatCoachConfig.chromeWebStoreUrl) return null

  return (
    <a
      href={chatCoachConfig.chromeWebStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames(
        "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition-colors hover:border-white/25 hover:bg-white/10",
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
      Add to Chrome
    </a>
  )
}

export default ChromeExtensionLink
