export const chatCoachConfig = {
  appStoreUrl: process.env.NEXT_PUBLIC_CHATCOACH_APP_STORE_URL ?? "",
  chromeWebStoreUrl:
    process.env.NEXT_PUBLIC_CHATCOACH_CHROME_WEB_STORE_URL ?? "",
  minIosVersion: "17",
  publicScreenshots: [
    {
      src: "/images/chatcoach/chatcoach.png",
      alt: "Chat Coach Chrome extension beside WhatsApp Web with smart suggestions",
      label: "Smart suggestions",
    },
    {
      src: "/images/chatcoach/chatcoach2.png",
      alt: "Chat Coach Chrome extension analyzing a WhatsApp Web conversation",
      label: "Coach analysis",
    },
    {
      src: "/images/chatcoach/chatcoach3.png",
      alt: "Chat Coach Chrome extension showing quick reply suggestions",
      label: "Quick replies",
    },
    {
      src: "/images/chatcoach/chatcoach4.png",
      alt: "Chat Coach Chrome extension detecting conversation context",
      label: "Context detection",
    },
  ],
} as const
