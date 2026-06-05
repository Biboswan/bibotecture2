import type * as React from "react"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/chatcoach/",
  title: "Chat Coach — Realtime AI conversation coaching",
  description:
    "Ace conversations with realtime coaching from AI clones of experts. Chat Coach bridges communication gaps in your messaging apps — get early access.",
  image: "/images/chatcoach/chatcoach.png",
})

interface Props {
  children: React.ReactNode
}

const ChatCoachLayout: React.FC<Props> = ({ children }) => children

export default ChatCoachLayout
