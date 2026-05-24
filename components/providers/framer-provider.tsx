"use client"

import { useRouter } from "next/navigation"
import type * as React from "react"
import { UnframerProvider } from "unframer"

interface Props {
  children: React.ReactNode
}

const FramerProvider: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  return (
    <UnframerProvider navigate={(path) => router.push(path)}>
      {children}
    </UnframerProvider>
  )
}

export default FramerProvider
