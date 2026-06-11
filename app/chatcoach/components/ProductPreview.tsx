"use client"

import * as React from "react"
import Image from "next/image"

import classNames from "@/utils/classNames"

import { chatCoachConfig } from "../config"

export type PreviewPlatform = "chrome" | "ios"

export interface Props {
  platform: PreviewPlatform
  showCarousel?: boolean
  className?: string
}

const IosPreview: React.FC = () => {
  return (
    <div className="flex aspect-[16/10] flex-col items-center justify-center rounded-[24px] border border-dashed border-white/12 bg-[rgb(10,10,12)] px-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
        <svg
          className="h-7 w-7 text-[rgb(160,160,170)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
          <path d="M11 5.5h2" strokeLinecap="round" />
        </svg>
      </div>
      <p className="mt-5 text-lg font-medium text-white">Native iOS app</p>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-[rgb(130,130,140)]">
        Available on iPhone via early access. App previews aren&apos;t public
        yet — request TestFlight when you join.
      </p>
      <p className="mt-4 font-mono text-[11px] tracking-wide text-[rgb(100,100,110)] uppercase">
        iOS {chatCoachConfig.minIosVersion}+ · WhatsApp
      </p>
    </div>
  )
}

const ChromePreview: React.FC<{ showCarousel: boolean }> = ({
  showCarousel,
}) => {
  const screenshots = chatCoachConfig.publicScreenshots
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if (!showCarousel || screenshots.length <= 1) return

    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % screenshots.length)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [showCarousel, screenshots.length])

  const activeIndex = showCarousel ? index : 0
  const active = screenshots[activeIndex]

  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[24px] border border-white/10 bg-[rgb(16,16,20)]">
        {showCarousel ? (
          screenshots.map((screenshot, screenshotIndex) => (
            <div
              key={screenshot.src}
              className={classNames(
                "absolute inset-0 transition-opacity duration-700",
                screenshotIndex === activeIndex ? "opacity-100" : "opacity-0"
              )}
            >
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={1920}
                height={1200}
                className="h-full w-full object-cover object-top"
                priority={screenshotIndex === 0}
              />
            </div>
          ))
        ) : (
          <Image
            src={active.src}
            alt={active.alt}
            width={1920}
            height={1200}
            className="h-full w-full object-cover object-top"
            priority
          />
        )}
      </div>

      {showCarousel && screenshots.length > 1 ? (
        <div className="mt-4 flex justify-center gap-2">
          {screenshots.map((screenshot, screenshotIndex) => (
            <button
              key={screenshot.src}
              type="button"
              onClick={() => setIndex(screenshotIndex)}
              className={classNames(
                "h-1.5 rounded-full transition-all duration-300",
                screenshotIndex === activeIndex
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/30 hover:bg-white/50"
              )}
              aria-label={`View screenshot ${screenshotIndex + 1}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

const ProductPreview: React.FC<Props> = ({
  platform,
  showCarousel = false,
  className,
}) => {
  return (
    <div className={className}>
      {platform === "ios" ? (
        <IosPreview />
      ) : (
        <ChromePreview showCarousel={showCarousel} />
      )}
    </div>
  )
}

export default ProductPreview
