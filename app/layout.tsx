import type { Viewport } from "next"
import { Manrope } from "next/font/google"
import localFont from "next/font/local"
import { ViewTransitions } from "next-view-transitions"
import type * as React from "react"

import FramerProvider from "@/components/providers/framer-provider"
import classNames from "@/utils/classNames"
import { renderSchemaTags } from "@/utils/schema"

import "@/framer/styles.css"
import "./main.css"

const sansFont = Manrope({
  variable: "--sans-font",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
})

const monoFont = localFont({
  variable: "--mono-font",
  src: [
    {
      path: "../fonts/JetBrainsMono-Regular.ttf",
      weight: "regular",
      style: "normal",
    },
  ],
})

export const viewport: Viewport = {
  themeColor: "#09090b",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={classNames(sansFont.variable, monoFont.variable)}
      >
        <head>{renderSchemaTags()}</head>

        <body className="bg-[rgb(10,10,12)] font-sans text-white">
          <FramerProvider>{children}</FramerProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}

export default RootLayout
