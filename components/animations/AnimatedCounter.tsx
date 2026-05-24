"use client"

import { useInView } from "motion/react"
import type * as React from "react"
import { useEffect, useRef, useState } from "react"

export interface Props {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

const AnimatedCounter: React.FC<Props> = ({
  end,
  suffix = "",
  prefix = "",
  duration = 1800,
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [isInView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export default AnimatedCounter
