export const chatCoachConfig = {
  appStoreUrl: process.env.NEXT_PUBLIC_CHATCOACH_APP_STORE_URL ?? "",
  chromeWebStoreUrl:
    process.env.NEXT_PUBLIC_CHATCOACH_CHROME_WEB_STORE_URL ?? "",
  minIosVersion: "17",
} as const
