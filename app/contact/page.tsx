import type * as React from "react"

import FramerContactPage from "@/components/framer/framer-contact-page"
import config from "@/config"
import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/contact/",
  title: `Contact | ${config.appName}`,
  description:
    "Get in touch with Bibotecture. Book a call or send a message about your next product.",
})

const ContactPage: React.FC = () => {
  return <FramerContactPage />
}

export default ContactPage
