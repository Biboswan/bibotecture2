"use client"

import { motion, useInView } from "motion/react"
import type * as React from "react"
import { useRef } from "react"

import { BASE_TRANSITION, FADE_UP } from "@/utils/animation"
import classNames from "@/utils/classNames"

export interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
}

const FadeIn: React.FC<Props> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={FADE_UP}
      transition={{ delay, ...BASE_TRANSITION }}
      className={classNames(className)}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
