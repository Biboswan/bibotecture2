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
    <div className="border-cc-strong bg-cc-surface flex aspect-[16/10] flex-col items-center justify-center rounded-[24px] border border-dashed px-8 text-center">
      <div className="border-cc bg-cc-elevated shadow-cc-card flex h-14 w-14 items-center justify-center rounded-2xl">
        <svg
          className="text-cc-muted h-7 w-7"
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
      <p className="text-cc-primary mt-5 text-lg font-medium">Native iOS app</p>
      <p className="text-cc-muted mt-3 max-w-xs text-sm leading-relaxed">
        Available on iPhone via early access. App previews aren&apos;t public
        yet — request TestFlight when you join.
      </p>
      <p className="text-cc-faint mt-4 font-mono text-[11px] tracking-wide uppercase">
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
      "flex items-center justify-center rounded-full transition-colors",
      overlay ? "cc-carousel-arrow h-11 w-11" : "border-cc text-cc-muted p-2"
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
          "cc-preview-frame overflow-hidden rounded-[24px]",
          featured && "shadow-cc-featured"
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
              <div className="cc-carousel-badge absolute top-4 right-4 z-10 rounded-full px-3 py-1 font-mono text-xs">
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
          <div className="border-cc bg-cc-elevated flex items-center justify-center gap-4 border-t px-4 py-3 sm:px-5">
            <div className="flex gap-2">
              {screenshots.map((screenshot, screenshotIndex) => (
                <button
                  key={screenshot.src}
                  type="button"
                  onClick={() => setIndex(screenshotIndex)}
                  className={classNames(
                    "rounded-full transition-all duration-300",
                    screenshotIndex === activeIndex
                      ? "cc-dot-active h-2 w-8"
                      : "cc-dot-inactive h-2 w-2"
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
