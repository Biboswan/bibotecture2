import type { MobileCoachScenario } from "./MobileCoachDemo"

export const datingCoachScenario: MobileCoachScenario = {
  coach: {
    name: "Matthew Hussey",
    initials: "MH",
    speciality: "Dating communication & confidence",
  },
  coachChat: {
    conversation: {
      contact: "Sofia Martinez",
      status: "online",
      avatar: "SM",
      messages: [
        {
          id: "sofia-1",
          body: "I'm really sorry, but can we rain-check tonight? Something came up again.",
          direction: "incoming",
          time: "9:10 PM",
        },
        {
          id: "sofia-2",
          body: "That's the third last-minute cancellation, Sofia.",
          direction: "outgoing",
          time: "9:12 PM",
        },
        {
          id: "sofia-3",
          body: "I know. Work has just been crazy. Can we decide later?",
          direction: "incoming",
          time: "9:16 PM",
        },
      ],
    },
    question:
      "This is the third time Sofia has cancelled at the last minute. I want to be understanding, but I also don't want to keep accepting uncertain plans. How do I set that boundary?",
    answer: [
      "It is time to set a hard boundary now. Since this is affecting your schedule so much.",
      "Say something like: If you're not interested anymore, I'm fine with that. It seems you don't value my time. This doesn't work for me.",
    ],
  },
  quickSuggestions: {
    conversation: {
      contact: "Ananya",
      status: "online",
      avatar: "A",
      messages: [
        {
          id: "ananya-1",
          body: "I had fun last night 😊",
          direction: "incoming",
          time: "9:12 AM",
        },
        {
          id: "ananya-2",
          body: "Me too. You're even more fun in person.",
          direction: "outgoing",
          time: "9:16 AM",
        },
        {
          id: "ananya-3",
          body: "Haha, I'll take that. We should do it again sometime.",
          direction: "incoming",
          time: "9:20 AM",
        },
      ],
    },
    suggestions: [
      {
        title: "Confident invitation",
        score: "88%",
        body: "I've enjoyed talking with you. Let's continue this over coffee. Are you free Thursday evening?",
        reason: "Specificity creates clarity without pressure",
      },
      {
        title: "Match her energy",
        score: "81%",
        body: "That sounds like a full week. What's been taking up most of your time?",
        reason: "Curiosity keeps the conversation balanced",
      },
    ],
  },
}

export const realEstateCoachScenario: MobileCoachScenario = {
  coach: {
    name: "Ryan Serhant",
    initials: "RS",
    speciality: "Real estate sales & negotiation",
  },
  coachChat: {
    conversation: {
      contact: "Oliver Bennett",
      status: "online",
      avatar: "OB",
      property: {
        eyebrow: "Pacific Heights · Corner condo",
        title: "3-bedroom · Pacific Heights",
        detail: "2,225 sq ft · Move-in ready",
        price: "$3.25M",
      },
      messages: [
        {
          id: "oliver-1",
          body: "Hi, I saw your listing for the 3-bedroom condo in Pacific Heights. Is it still available?",
          direction: "incoming",
          time: "10:14 AM",
        },
        {
          id: "oliver-2",
          body: "Yes, it is. It's a 2,225 sq ft corner condo with two parking spaces and a private terrace.",
          direction: "outgoing",
          time: "10:16 AM",
        },
        {
          id: "oliver-3",
          body: "Looks good, but $3.25M is over my budget. I was hoping to stay near $2.90M.",
          direction: "incoming",
          time: "10:21 AM",
        },
      ],
    },
    question:
      "Oliver likes the condo but says $3.25M is above his $2.90M target. Should I offer a discount now?",
    answer: [
      "Not yet. His specific target means he's engaged, but you still don't know whether price is the real blocker. Acknowledge the gap, explain the corner-condo premium, and offer the $2.75M mid-floor option as a comparison.",
      "Ask which matters more: the higher floor, private terrace, or staying below $3M. His answer tells you what to negotiate, and keeps you from discounting unnecessarily.",
    ],
  },
  quickSuggestions: {
    conversation: {
      contact: "Emily Carter",
      status: "last seen recently",
      avatar: "EC",
      messages: [
        {
          id: "emily-1",
          body: "We liked the condo. We're comparing it with another Pacific Heights listing that includes a $25,000 closing-cost credit.",
          direction: "incoming",
          time: "4:42 PM",
        },
        {
          id: "emily-2",
          body: "Understood. Apart from the closing-cost credit, is there anything else making that property more attractive?",
          direction: "outgoing",
          time: "4:44 PM",
        },
        {
          id: "emily-3",
          body: "Mainly the offer. We want to decide this week.",
          direction: "incoming",
          time: "4:47 PM",
        },
      ],
    },
    suggestions: [
      {
        title: "Reframe the offer",
        score: "91%",
        body: "That makes sense. Before comparing the headline credit, may I share the total cost difference after HOA dues, parking, and closing costs?",
        reason: "Moves the buyer from incentive to total value",
      },
      {
        title: "Create momentum",
        score: "84%",
        body: "If the numbers work for you, I can hold this unit until tomorrow evening while you review the final cost sheet.",
        reason: "Creates urgency without applying pressure",
      },
    ],
  },
}
