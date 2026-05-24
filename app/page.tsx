import type * as React from "react"

import FramerHome from "@/components/framer/framer-home"
import config from "@/config"
import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/",
  title: `${config.appName} — Full-stack agency`,
  description: config.appDescription,
})

const Home: React.FC = () => {
  return <FramerHome />
}

export default Home
