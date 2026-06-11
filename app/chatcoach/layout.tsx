import type * as React from "react"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/chatcoach/",
  title: "Chat Coach — Realtime AI conversation coaching",
  description:
    "Get instant WhatsApp coaching on iPhone and in Chrome — before you hit send. AI modeled on negotiation experts, dating coaches, and communicators. Early access — one month free.",
  image: "/images/chatcoach/chatcoach.png",
})

interface Props {
  children: React.ReactNode
}

const ChatCoachLayout: React.FC<Props> = ({ children }) => children

export default ChatCoachLayout
