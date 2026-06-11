"use client"

import * as React from "react"

import ChatCoachFooter from "./ChatCoachFooter"
import ChatCoachHeader, { CHATCOACH_HEADER_HEIGHT } from "./ChatCoachHeader"
import { WaitlistProvider } from "./WaitlistProvider"

export interface Props {
  children: React.ReactNode
}

const ChatCoachShell: React.FC<Props> = ({ children }) => {
  return (
    <WaitlistProvider>
      <ChatCoachHeader />
      <main
        className="chatcoach-page min-h-dvh bg-[rgb(10,10,12)] text-white"
        style={{ paddingTop: CHATCOACH_HEADER_HEIGHT }}
      >
        {children}
        <ChatCoachFooter />
      </main>
    </WaitlistProvider>
  )
}

export default ChatCoachShell
