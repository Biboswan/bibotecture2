import type { MobileCoachScenario } from "./MobileCoachDemo"

export const datingCoachScenario: MobileCoachScenario = {
  contact: "Maya",
  status: "online",
  avatar: "M",
  defaultCoach: "dating",
  context: "Dating",
  messages: [
    {
      id: "dating-1",
      body: "I had a really good time too 😊",
      direction: "incoming",
      time: "8:41 PM",
    },
    {
      id: "dating-2",
      body: "Me too. I'd love to see you again.",
      direction: "outgoing",
      time: "8:43 PM",
    },
    {
      id: "dating-3",
      body: "This week is a little wild. Maybe next week?",
      direction: "incoming",
      time: "8:46 PM",
    },
  ],
  suggestions: [
    {
      title: "Keep it warm and low-pressure",
      body: "No worries — next week works. What day usually feels least hectic for you?",
      reason: "Shows interest without chasing certainty.",
    },
    {
      title: "Create a clear next step",
      body: "Totally get it. Want me to check in Sunday and we can find a day?",
      reason: "Makes momentum easy for both of you.",
    },
  ],
  questions: [
    {
      prompt: "What are they signaling?",
      answer:
        "Interest is present, but timing is uncertain. Stay warm and make the next step easy without forcing an answer now.",
    },
    {
      prompt: "Am I coming on too strong?",
      answer:
        "Your message was clear, not excessive. Match their pace now: one confident reply, then give the conversation room.",
    },
  ],
}

export const realEstateCoachScenario: MobileCoachScenario = {
  contact: "Nisha Patel",
  status: "last seen 4 minutes ago",
  avatar: "NP",
  defaultCoach: "negotiation",
  context: "Buyer lead",
  messages: [
    {
      id: "real-estate-1",
      body: "We liked the apartment, but 1.2 crore is above our budget.",
      direction: "incoming",
      time: "11:16 AM",
    },
    {
      id: "real-estate-2",
      body: "Understood. What range would make this worth exploring?",
      direction: "outgoing",
      time: "11:18 AM",
    },
    {
      id: "real-estate-3",
      body: "Closer to 1.05. We don't want to waste the seller's time.",
      direction: "incoming",
      time: "11:21 AM",
    },
  ],
  suggestions: [
    {
      title: "Label the concern",
      body: "It sounds like you want to know there is a realistic path before taking another step.",
      reason: "Acknowledges risk before discussing price.",
    },
    {
      title: "Use a calibrated question",
      body: "What would you need to see from the seller to feel comfortable making an offer?",
      reason: "Surfaces priorities without negotiating against yourself.",
    },
  ],
  questions: [
    {
      prompt: "What is the real objection?",
      answer:
        "Price matters, but their wording also signals fear of a dead-end negotiation. Establish whether the seller is flexible before pushing for an offer.",
    },
    {
      prompt: "How do I keep this lead warm?",
      answer:
        "Offer one useful next step with a clear timeframe. Avoid generic follow-ups; return with information that reduces their uncertainty.",
    },
  ],
}
