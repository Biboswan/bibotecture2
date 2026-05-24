import type { Metadata } from "next"

import config from "@/config"

interface MetadataArgs {
  path: string
  title: string
  description: string
  image?: string
}

export const getMetadata = ({
  path,
  title,
  description,
  image,
}: MetadataArgs): Metadata => {
  const metaTitle = title
  const metaDescription = description
  const metaImage = image ?? `${config.baseUrl}/cover.png`

  const metadata: Metadata = {
    title: metaTitle,
    description: metaDescription,

    applicationName: config.appName,
    creator: config.creator,
    authors: [{ name: config.authorName, url: config.authorUrl }],
    robots:
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    keywords: config.keywords,

    icons: {
      icon: [
        { url: "/icon.svg", type: "image/svg+xml" },
        { url: "/icons/bibotecture-logo.svg", type: "image/svg+xml" },
      ],
      shortcut: "/icon.svg",
      apple: "/apple-icon.svg",
    },
    manifest: `${config.baseUrl}/manifest.json`,

    openGraph: {
      type: "website",
      url: `${config.baseUrl}${path}`,
      siteName: config.appName,
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
      // videos: "",  // INFO: og video option
    },

    twitter: {
      card: "summary_large_image",
      site: config.twitterSite,
      creator: config.twitterCreator,
      title: metaTitle,
      description: metaDescription,
      images: metaImage,
    },

    appleWebApp: {
      capable: true,
      title: metaTitle,
      startupImage: metaImage,
      statusBarStyle: "black-translucent",
    },

    formatDetection: {
      telephone: true,
      date: true,
      address: true,
      email: true,
      url: true,
    },

    appLinks: {},
  }
  return metadata
}
