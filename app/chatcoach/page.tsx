import * as React from "react"

import ChatCoachShell from "./components/ChatCoachShell"
import { ConsumerCoachesSection } from "./components/ConsumerCoachesSection"
import { ContrastSection } from "./components/ContrastSection"
import { DatingSection } from "./components/DatingSection"
import { EarlyAccessSection } from "./components/EarlyAccessSection"
import { ExpertCoachesSection } from "./components/ExpertCoachesSection"
import { ForCoachesSection } from "./components/ForCoachesSection"
import { HeroSection } from "./components/HeroSection"
import { HowItWorksSection } from "./components/HowItWorksSection"
import { PrivacySection } from "./components/PrivacySection"
import { RealEstateSection } from "./components/RealEstateSection"

export default function ChatCoachPage() {
  return (
    <ChatCoachShell>
      <HeroSection />
      <ConsumerCoachesSection />
      <ContrastSection />
      <DatingSection />
      <RealEstateSection />
      <HowItWorksSection />
      <ExpertCoachesSection />
      <ForCoachesSection />
      <PrivacySection />
      <EarlyAccessSection />
    </ChatCoachShell>
  )
}
