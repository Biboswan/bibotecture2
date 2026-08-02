import type { Metadata } from "next"
import * as React from "react"

import { getMetadata } from "@/utils/metadata"

import ChatCoachShell from "../components/ChatCoachShell"
import { CoachesHeroSection } from "../components/CoachesHeroSection"
import { ForCoachesSection } from "../components/ForCoachesSection"

export const metadata: Metadata = getMetadata({
  path: "/chatcoach/coaches/",
  title: "Chat Coach for coaches and experts",
  description:
    "Turn your coaching expertise into an expert mind that supports more people and creates a new lower-barrier offering.",
  image: "/images/chatcoach/chatcoach.png",
})

export default function ChatCoachForCoachesPage() {
  return (
    <ChatCoachShell>
      <CoachesHeroSection />
      <ForCoachesSection />
    </ChatCoachShell>
  )
}
