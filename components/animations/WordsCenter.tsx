"use client"

import { AnimatePresence, motion } from "motion/react"
import type * as React from "react"
import { useEffect, useState } from "react"

export interface Props {
  words: string[]
  interval?: number
  className?: string
}

const WordsCenter: React.FC<Props> = ({
  words,
  interval = 2800,
  className,
}) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, interval)
    return () => clearInterval(timer)
  }, [words.length, interval])

  return (
    <span
      className={className}
      style={{ display: "inline-block", overflow: "hidden", height: "1.4em" }}
    >
      <AnimatePresence mode="popLayout">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "none" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="block font-extralight"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default WordsCenter
