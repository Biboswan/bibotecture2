import type * as React from "react"

import "./chatcoach.css"

import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/chatcoach/",
  title: "Chat Coach — Realtime conversation coaching from expert minds",
  description:
    "Get instant WhatsApp coaching on iPhone and in Chrome — before you hit send. Expert coaches for negotiation, dating, real estate, and more. Early access — one month free.",
  image: "/images/chatcoach/chatcoach.png",
})

interface Props {
  children: React.ReactNode
}

const ChatCoachLayout: React.FC<Props> = ({ children }) => children

export default ChatCoachLayout
