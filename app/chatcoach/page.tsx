import * as React from "react"

import ChatCoachShell from "./components/ChatCoachShell"
import { EarlyAccessSection } from "./components/EarlyAccessSection"
import { ExpertCoachesSection } from "./components/ExpertCoachesSection"
import { HeroSection } from "./components/HeroSection"
import { HowItWorksSection } from "./components/HowItWorksSection"
import { NarrativeSection } from "./components/NarrativeSection"
import { PrivacySection } from "./components/PrivacySection"
import { ProductExplanationSection } from "./components/ProductExplanationSection"

export default function ChatCoachPage() {
  return (
    <ChatCoachShell>
      <HeroSection />
      <NarrativeSection />
      <ProductExplanationSection />
      <HowItWorksSection />
      <ExpertCoachesSection />
      <PrivacySection />
      <EarlyAccessSection />
    </ChatCoachShell>
  )
}
