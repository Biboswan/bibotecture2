export const chatCoachConfig = {
  appStoreUrl: process.env.NEXT_PUBLIC_CHATCOACH_APP_STORE_URL ?? "",
  chromeWebStoreUrl:
    process.env.NEXT_PUBLIC_CHATCOACH_CHROME_WEB_STORE_URL ?? "",
  minIosVersion: "17",
  publicScreenshots: [
    {
      src: "/images/chatcoach/chatcoach.png",
      alt: "Chat Coach interface — quick suggestions",
    },
    {
      src: "/images/chatcoach/chatcoach2.png",
      alt: "Chat Coach interface — reasoning panel",
    },
    {
      src: "/images/chatcoach/chatcoach3.png",
      alt: "Chat Coach interface — coach selection",
    },
    {
      src: "/images/chatcoach/chatcoach4.png",
      alt: "Chat Coach interface — message refinement",
    },
  ],
} as const
