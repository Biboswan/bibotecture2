import * as React from "react"
import Image from "next/image"

import classNames from "@/utils/classNames"

export interface Props {
  src: string
  alt: string
  /** Fake address-bar label, e.g. "web.whatsapp.com". */
  address?: string
  priority?: boolean
  className?: string
  sizes?: string
}

const BrowserFrame: React.FC<Props> = ({
  src,
  alt,
  address = "web.whatsapp.com",
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 900px",
}) => {
  return (
    <div className={classNames("cc-browser-frame", className)}>
      <div className="cc-browser-bar">
        <span className="cc-browser-dot" />
        <span className="cc-browser-dot" />
        <span className="cc-browser-dot" />
        <span className="cc-browser-address">{address}</span>
      </div>
      <div className="relative aspect-[16/10] w-full bg-black">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-contain object-center"
          priority={priority}
        />
      </div>
    </div>
  )
}

export default BrowserFrame
