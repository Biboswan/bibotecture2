"use client"

import * as React from "react"

import { WaitlistModal } from "./WaitlistModal"

interface WaitlistContextValue {
  openWaitlist: () => void
  closeWaitlist: () => void
}

const WaitlistContext = React.createContext<WaitlistContextValue | null>(null)

export const useWaitlist = (): WaitlistContextValue => {
  const context = React.useContext(WaitlistContext)
  if (!context) {
    throw new Error("useWaitlist must be used within WaitlistProvider")
  }
  return context
}

export interface Props {
  children: React.ReactNode
}

export const WaitlistProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const value = React.useMemo(
    () => ({
      openWaitlist: () => setIsOpen(true),
      closeWaitlist: () => setIsOpen(false),
    }),
    []
  )

  return (
    <WaitlistContext.Provider value={value}>
      {children}
      <WaitlistModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        type="early-access"
      />
    </WaitlistContext.Provider>
  )
}
