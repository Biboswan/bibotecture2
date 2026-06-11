"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

import { chatCoachConfig } from "../config"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { Button } from "./Button"
import ChromeExtensionLink from "./ChromeExtensionLink"
import ProductPreview, { type PreviewPlatform } from "./ProductPreview"
import SectionHeader from "./SectionHeader"
import { useWaitlist } from "./WaitlistProvider"

const platforms: {
  id: PreviewPlatform
  label: string
  title: string
  description: string
}[] = [
  {
    id: "chrome",
    label: "Chrome",
    title: "WhatsApp Web on desktop",
    description:
      "Add the extension and coach beside WhatsApp Web in your browser. This is what you see in the preview below.",
  },
  {
    id: "ios",
    label: "iPhone",
    title: "WhatsApp on mobile",
    description: `Native iOS app for iPhone ${chatCoachConfig.minIosVersion}+. Available via TestFlight for early access — we don't publish app screenshots publicly yet.`,
  },
]

export const PlatformSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)
  const { openWaitlist } = useWaitlist()
  const [activePlatform, setActivePlatform] =
    React.useState<PreviewPlatform>("chrome")

  const active = platforms.find((platform) => platform.id === activePlatform)

  return (
    <section
      id="platforms"
      ref={ref}
      className={classNames(
        "px-4 py-20 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-28",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Platforms"
          title="iPhone or Chrome. Same coaching."
          description="Pick where you chat — Chat Coach sits beside WhatsApp on mobile or WhatsApp Web on desktop."
        />

        <div
          className={classNames(
            "grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14",
            "transition-all duration-700",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <div>
            <div
              className="mb-8 inline-flex rounded-full border border-white/10 bg-[rgb(14,14,18)] p-1"
              role="tablist"
              aria-label="Choose platform"
            >
              {platforms.map((platform) => (
                <button
                  key={platform.id}
                  type="button"
                  role="tab"
                  aria-selected={activePlatform === platform.id}
                  onClick={() => setActivePlatform(platform.id)}
                  className={classNames(
                    "rounded-full px-5 py-2 text-sm font-medium transition-colors",
                    activePlatform === platform.id
                      ? "bg-white text-[rgb(10,10,12)]"
                      : "text-[rgb(160,160,170)] hover:text-white"
                  )}
                >
                  {platform.label}
                </button>
              ))}
            </div>

            {active ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-medium tracking-tight text-white">
                  {active.title}
                </h3>
                <p className="text-base leading-relaxed text-[rgb(160,160,170)]">
                  {active.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {activePlatform === "ios" ? (
                    <Button onClick={openWaitlist}>Request TestFlight</Button>
                  ) : (
                    <ChromeExtensionLink />
                  )}
                  <Button variant="secondary" onClick={openWaitlist}>
                    Get early access
                  </Button>
                </div>
              </div>
            ) : null}
          </div>

          <ProductPreview
            platform={activePlatform}
            showCarousel={activePlatform === "chrome"}
          />
        </div>
      </div>
    </section>
  )
}
