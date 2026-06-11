import * as React from "react"

import classNames from "@/utils/classNames"

import AppStoreLink from "./AppStoreLink"
import ChromeExtensionLink from "./ChromeExtensionLink"

export interface Props {
  className?: string
}

const PlatformLinks: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={classNames(
        "flex flex-wrap items-center justify-center gap-3",
        className
      )}
    >
      <AppStoreLink />
      <ChromeExtensionLink />
    </div>
  )
}

export default PlatformLinks
