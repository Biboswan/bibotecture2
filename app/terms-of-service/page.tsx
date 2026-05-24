import type * as React from "react"

import FramerLegalPage from "@/components/framer/framer-legal-page"
import config from "@/config"
import { termsOfServiceContent } from "@/lib/framer-site-content"
import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/terms-of-service/",
  title: `Terms of Service | ${config.appName}`,
  description: "Terms of Service for Bibotecture website and services.",
})

const TermsOfServicePage: React.FC = () => {
  return <FramerLegalPage content={termsOfServiceContent} />
}

export default TermsOfServicePage
