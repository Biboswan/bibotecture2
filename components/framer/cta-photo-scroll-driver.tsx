"use client"

import { scroll, transform } from "motion/react"
import { useEffect } from "react"

type PhotoKeyframe = {
  selector: string
  initial: { x: number; y: number; scale: number; rotate: number }
  final: { x: number; y: number; scale: number; rotate: number }
  range: [number, number]
}

/** Shared scroll window — all photos spread/converge together */
const CTA_PHOTO_RANGE: [number, number] = [0.15, 0.55]

const CTA_PHOTOS: PhotoKeyframe[] = [
  {
    selector: '[data-framer-name="Picture 4"]',
    initial: { x: 303, y: -200, scale: 0.5, rotate: 0 },
    final: { x: 0, y: 0, scale: 1, rotate: 14 },
    range: CTA_PHOTO_RANGE,
  },
  {
    selector: '[data-framer-name="Picture 3"]',
    initial: { x: -312, y: -200, scale: 0.5, rotate: 0 },
    final: { x: 0, y: 0, scale: 1, rotate: 14 },
    range: CTA_PHOTO_RANGE,
  },
  {
    selector: '[data-framer-name="Picture 2"]',
    initial: { x: -336, y: 160, scale: 0.5, rotate: 0 },
    final: { x: 0, y: 0, scale: 1, rotate: -9 },
    range: CTA_PHOTO_RANGE,
  },
  {
    selector: '[data-framer-name="Picture 1"]',
    initial: { x: 348, y: 160, scale: 0.5, rotate: 0 },
    final: { x: 0, y: 0, scale: 1, rotate: 14 },
    range: CTA_PHOTO_RANGE,
  },
]

function progressInRange(p: number, [start, end]: [number, number]) {
  if (p <= start) return 0
  if (p >= end) return 1
  return (p - start) / (end - start)
}

function applyPhotoTransform(el: HTMLElement, photo: PhotoKeyframe, t: number) {
  const x = transform(t, [0, 1], [photo.initial.x, photo.final.x])
  const y = transform(t, [0, 1], [photo.initial.y, photo.final.y])
  const scale = transform(t, [0, 1], [photo.initial.scale, photo.final.scale])
  const rotate = transform(
    t,
    [0, 1],
    [photo.initial.rotate, photo.final.rotate]
  )
  el.style.transform = `translateX(${x}px) translateY(${y}px) scale(${scale}) rotate(${rotate}deg)`
}

function findCtaSection(root: ParentNode) {
  return (
    root.querySelector<HTMLElement>(".framer-10hggdb-container") ??
    root.querySelector<HTMLElement>(".framer-Jg4y9.framer-1s11mc") ??
    root.querySelector<HTMLElement>(".framer-Jg4y9")
  )
}

/**
 * Bidirectional CTA photo spread/converge tied to scroll through the section.
 * Replaces broken Framer onScrollTarget refs in the homedesk export.
 */
export default function CtaPhotoScrollDriver() {
  useEffect(() => {
    let cancelled = false
    let stopScroll: (() => void) | undefined

    const attach = () => {
      if (cancelled) return false

      const root = document.querySelector(".framer-home-root")
      if (!root) return false

      const cta = findCtaSection(root)
      if (!cta) return false

      const photos = CTA_PHOTOS.map((photo) => ({
        photo,
        el: root.querySelector<HTMLElement>(`.framer-Jg4y9 ${photo.selector}`),
      })).filter((entry): entry is { photo: PhotoKeyframe; el: HTMLElement } =>
        Boolean(entry.el)
      )

      if (photos.length !== CTA_PHOTOS.length) return false

      stopScroll?.()
      stopScroll = scroll(
        (progress: number, _info: unknown) => {
          for (const { photo, el } of photos) {
            applyPhotoTransform(
              el,
              photo,
              progressInRange(progress, photo.range)
            )
          }
        },
        {
          target: cta,
          offset: ["start end", "end start"],
        }
      )

      return true
    }

    if (!attach()) {
      const observer = new MutationObserver(() => {
        if (attach()) observer.disconnect()
      })
      observer.observe(document.body, { childList: true, subtree: true })

      return () => {
        cancelled = true
        observer.disconnect()
        stopScroll?.()
      }
    }

    return () => {
      cancelled = true
      stopScroll?.()
    }
  }, [])

  return null
}
