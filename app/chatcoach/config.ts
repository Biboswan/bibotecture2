const CHATCOACH_IMG = "/images/chatcoach"

export const chatCoachConfig = {
  coachPickerOpen: `${CHATCOACH_IMG}/coach-picker-open.png`,
  appStoreUrl: process.env.NEXT_PUBLIC_CHATCOACH_APP_STORE_URL ?? "",
  chromeWebStoreUrl:
    process.env.NEXT_PUBLIC_CHATCOACH_CHROME_WEB_STORE_URL ?? "",
  // Cal.com / Calendly (or similar) link for discovery + design-partner calls.
  bookingUrl: process.env.NEXT_PUBLIC_CHATCOACH_BOOKING_URL ?? "",
  minIosVersion: "17",
  dating: {
    mobileChatFlow: `${CHATCOACH_IMG}/dating/mobile_chat_flow.png`,
    mobileQuickSuggestions: `${CHATCOACH_IMG}/dating/mobile_quick_suggestions.png`,
    chromeHardBoundary: `${CHATCOACH_IMG}/dating/chrome_extension_hard_boundary.png`,
  },
  realEstate: {
    chromeExtension: `${CHATCOACH_IMG}/real_estate/chrome_extension2.png`,
    chromeQuickSuggestions: `${CHATCOACH_IMG}/real_estate/chrome_extension_quick_suggestions.png`,
    mobileChatFlow: `${CHATCOACH_IMG}/real_estate/mobile_chat_flow.png`,
    mobileQuickSuggestions: `${CHATCOACH_IMG}/real_estate/mobile_quick_suggestions.png`,
  },
  publicScreenshots: [
    {
      src: `${CHATCOACH_IMG}/chatcoach.png`,
      alt: "Chat Coach Chrome extension beside WhatsApp Web with smart suggestions",
      label: "Smart suggestions",
    },
    {
      src: `${CHATCOACH_IMG}/chatcoach2.png`,
      alt: "Chat Coach Chrome extension analyzing a WhatsApp Web conversation",
      label: "Coach analysis",
    },
    {
      src: `${CHATCOACH_IMG}/chatcoach3.png`,
      alt: "Chat Coach Chrome extension showing quick reply suggestions",
      label: "Quick replies",
    },
  ],
} as const
