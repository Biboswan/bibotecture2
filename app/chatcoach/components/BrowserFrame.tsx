import * as React from "react"
import Image from "next/image"

import classNames from "@/utils/classNames"

interface BaseProps {
  /** Fake address-bar label, e.g. "web.whatsapp.com". */
  address?: string
  priority?: boolean
  className?: string
  sizes?: string
}

interface ImageProps extends BaseProps {
  src: string
  alt: string
  children?: never
}

interface ChildrenProps extends BaseProps {
  children: React.ReactNode
  src?: never
  alt?: never
}

export type Props = ImageProps | ChildrenProps

const BrowserFrame: React.FC<Props> = ({
  src,
  alt,
  children,
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
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
        {children ? (
          children
        ) : src && alt !== undefined ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="object-contain object-center"
            priority={priority}
          />
        ) : null}
      </div>
    </div>
  )
}

export default BrowserFrame
