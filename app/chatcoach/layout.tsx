import type * as React from "react"

import "./chatcoach.css"

import { getMetadata } from "@/utils/metadata"

const chatCoachIcon = "/images/chatcoach/chatcoach-icon.png"

export const metadata = {
  ...getMetadata({
    path: "/chatcoach/",
    title: "Chat Coach — Realtime conversation coaching from expert minds",
    description:
      "Get instant WhatsApp coaching on iPhone and in Chrome — before you hit send. Expert coaches for negotiation, dating, real estate, and more. Early access — one month free.",
    image: "/images/chatcoach/chatcoach.png",
  }),
  // Override the site-wide bibotecture favicon with the Chat Coach logo — scoped to /chatcoach only.
  icons: {
    icon: [{ url: chatCoachIcon, type: "image/png" }],
    shortcut: chatCoachIcon,
    apple: chatCoachIcon,
  },
}

interface Props {
  children: React.ReactNode
}

const ChatCoachLayout: React.FC<Props> = ({ children }) => children

export default ChatCoachLayout
