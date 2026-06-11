"use client"

import * as React from "react"
import Image from "next/image"

import classNames from "@/utils/classNames"

import { chatCoachConfig } from "../config"

export type PreviewPlatform = "chrome" | "ios"

export interface Props {
  platform: PreviewPlatform
  showCarousel?: boolean
  variant?: "default" | "featured"
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

const CarouselArrow: React.FC<{
  direction: "prev" | "next"
  onClick: () => void
  overlay?: boolean
}> = ({ direction, onClick, overlay }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={
      direction === "prev" ? "Previous screenshot" : "Next screenshot"
    }
    className={classNames(
      "flex items-center justify-center rounded-full border text-[rgb(160,160,170)] transition-colors hover:border-white/20 hover:text-white",
      overlay
        ? "h-11 w-11 border-white/20 bg-[rgb(13,13,20)]/90 text-white shadow-lg backdrop-blur-sm hover:border-white/40 hover:bg-[rgb(22,21,32)]"
        : "border-white/10 p-2"
    )}
  >
    <svg
      className={overlay ? "h-5 w-5" : "h-4 w-4"}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {direction === "prev" ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 19l-7-7 7-7"
        />
      ) : (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 5l7 7-7 7"
        />
      )}
    </svg>
  </button>
)

const ChromePreview: React.FC<{
  showCarousel: boolean
  variant: "default" | "featured"
}> = ({ showCarousel, variant }) => {
  const screenshots = chatCoachConfig.publicScreenshots
  const [index, setIndex] = React.useState(0)
  const featured = variant === "featured"

  React.useEffect(() => {
    if (!showCarousel || screenshots.length <= 1) return

    const interval = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % screenshots.length)
    }, 6000)

    return () => window.clearInterval(interval)
  }, [showCarousel, screenshots.length])

  const activeIndex = showCarousel ? index : 0

  const goTo = (nextIndex: number) => {
    setIndex((nextIndex + screenshots.length) % screenshots.length)
  }

  return (
    <div>
      <div
        className={classNames(
          "overflow-hidden rounded-[24px] border bg-[rgb(11,11,18)]",
          featured
            ? "border-white/15 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.85)]"
            : "border-white/10"
        )}
      >
        <div
          className={classNames(
            "relative w-full",
            featured
              ? "aspect-[16/9] min-h-[240px] sm:min-h-[320px] lg:min-h-[400px]"
              : "aspect-[16/9] sm:aspect-[2/1]"
          )}
        >
          {screenshots.map((screenshot, screenshotIndex) => (
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
                fill
                sizes={
                  featured
                    ? "(max-width: 768px) 100vw, 1024px"
                    : "(max-width: 768px) 100vw, 600px"
                }
                className="object-contain object-center"
                priority={screenshotIndex === 0}
              />
            </div>
          ))}

          {showCarousel && screenshots.length > 1 ? (
            <>
              <div className="absolute top-4 right-4 z-10 rounded-full border border-white/15 bg-[rgb(10,10,12)]/90 px-3 py-1 font-mono text-xs text-white backdrop-blur-sm">
                {activeIndex + 1} / {screenshots.length}
              </div>
              <div className="absolute top-1/2 left-3 z-10 -translate-y-1/2 sm:left-4">
                <CarouselArrow
                  direction="prev"
                  overlay
                  onClick={() => goTo(activeIndex - 1)}
                />
              </div>
              <div className="absolute top-1/2 right-3 z-10 -translate-y-1/2 sm:right-4">
                <CarouselArrow
                  direction="next"
                  overlay
                  onClick={() => goTo(activeIndex + 1)}
                />
              </div>
            </>
          ) : null}
        </div>

        {showCarousel && screenshots.length > 1 ? (
          <div className="flex items-center justify-center gap-4 border-t border-white/10 px-4 py-3 sm:px-5">
            <div className="flex gap-2">
              {screenshots.map((screenshot, screenshotIndex) => (
                <button
                  key={screenshot.src}
                  type="button"
                  onClick={() => setIndex(screenshotIndex)}
                  className={classNames(
                    "rounded-full transition-all duration-300",
                    screenshotIndex === activeIndex
                      ? "h-2 w-8 bg-white"
                      : "h-2 w-2 bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`View ${screenshot.label}`}
                />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

const ProductPreview: React.FC<Props> = ({
  platform,
  showCarousel = false,
  variant = "default",
  className,
}) => {
  return (
    <div className={className}>
      {platform === "ios" ? (
        <IosPreview />
      ) : (
        <ChromePreview showCarousel={showCarousel} variant={variant} />
      )}
    </div>
  )
}

export default ProductPreview
