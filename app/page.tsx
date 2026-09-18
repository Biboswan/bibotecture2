import type * as React from "react"

import FramerHome from "@/components/framer/framer-home"
import config from "@/config"
import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/",
  title: `CueSet by Bibotecture`,
  description: config.appDescription,
})

const Home: React.FC = () => {
  return <FramerHome />
}

export default Home
