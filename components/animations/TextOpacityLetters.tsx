"use client"

import type { MotionValue } from "motion/react"
import { motion, useScroll, useTransform } from "motion/react"
import type * as React from "react"
import { useRef } from "react"

export interface Props {
  text: string
  className?: string
  transitionStartIndex?: number
}

const EachCharacter: React.FC<{
  char: string
  start: number
  end: number
  progress: MotionValue<number>
  index: number
  transitionStartIndex: number
}> = ({ char, start, end, progress, index, transitionStartIndex }) => {
  const colorProgress = useTransform(
    progress,
    [start, end],
    ["rgb(104, 104, 104)", "rgb(255, 255, 255)"]
  )

  return (
    <motion.span
      style={{
        color:
          index < transitionStartIndex ? "rgb(255, 255, 255)" : colorProgress,
      }}
    >
      {char}
    </motion.span>
  )
}

const TextOpacityLetters: React.FC<Props> = ({
  text,
  className,
  transitionStartIndex = 0,
}) => {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "start 0.15"],
  })

  const words = text.split(" ")
  let charIndex = 0

  return (
    <p ref={ref} className={className}>
      {words.map((word, wordIdx) => {
        const starting = wordIdx / words.length
        const ending = (wordIdx + 1) / words.length
        const step = (ending - starting) / word.length
        const startIdx = charIndex
        charIndex += word.length + 1

        return (
          <span key={`word-${startIdx}-${word}`}>
            {word.split("").map((char, idx) => {
              const charStart = starting + step * idx
              const charEnd = starting + step * (idx + 1)
              const charPosition = startIdx + idx
              return (
                <EachCharacter
                  key={`char-${charPosition}-${char}`}
                  char={char}
                  start={charStart}
                  end={charEnd}
                  progress={scrollYProgress}
                  index={startIdx + idx}
                  transitionStartIndex={transitionStartIndex}
                />
              )
            })}
            {"\u00a0"}
          </span>
        )
      })}
    </p>
  )
}

export default TextOpacityLetters
