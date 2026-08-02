import * as React from "react"
import Image from "next/image"

import classNames from "@/utils/classNames"

export interface Props {
  src: string
  alt: string
  priority?: boolean
  className?: string
  sizes?: string
  /** Max width of the phone image in px. */
  width?: number
}

const PhoneShot: React.FC<Props> = ({
  src,
  alt,
  priority = false,
  className,
  sizes = "(max-width: 768px) 70vw, 320px",
  width = 320,
}) => {
  return (
    <div className={classNames("relative flex justify-center", className)}>
      <div
        className="cc-phone-glow pointer-events-none absolute inset-0 -m-8 rounded-full"
        aria-hidden="true"
      />
      <div
        className="relative w-full drop-shadow-[0_24px_64px_rgba(15,16,24,0.18)]"
        style={{ maxWidth: width }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={Math.round(width * 2.06)}
          sizes={sizes}
          className="h-auto w-full"
          priority={priority}
        />
      </div>
    </div>
  )
}

export default PhoneShot
