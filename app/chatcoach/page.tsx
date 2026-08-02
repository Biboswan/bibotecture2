import * as React from "react"

import ChatCoachShell from "./components/ChatCoachShell"
import { ChatGptComparisonSection } from "./components/ChatGptComparisonSection"
import { ConsumerCoachesSection } from "./components/ConsumerCoachesSection"
import { ContrastSection } from "./components/ContrastSection"
import { DatingSection } from "./components/DatingSection"
import { EarlyAccessSection } from "./components/EarlyAccessSection"
import { HeroSection } from "./components/HeroSection"
import { PlatformRoadmapSection } from "./components/PlatformRoadmapSection"
import { PrivacySection } from "./components/PrivacySection"
import { RealEstateSection } from "./components/RealEstateSection"

export default function ChatCoachPage() {
  return (
    <ChatCoachShell>
      <HeroSection />
      <ConsumerCoachesSection />
      <DatingSection />
      <RealEstateSection />
      <ChatGptComparisonSection />
      <ContrastSection />
      <PlatformRoadmapSection />
      <PrivacySection />
      <EarlyAccessSection />
    </ChatCoachShell>
  )
}
