import type * as React from "react"

import FramerLegalPage from "@/components/framer/framer-legal-page"
import config from "@/config"
import { privacyPolicyContent } from "@/lib/framer-site-content"
import { getMetadata } from "@/utils/metadata"

export const metadata = getMetadata({
  path: "/privacy-policy/",
  title: `Privacy Policy | ${config.appName}`,
  description: "Privacy Policy for Bibotecture website and services.",
})

const PrivacyPolicyPage: React.FC = () => {
  return <FramerLegalPage content={privacyPolicyContent} />
}

export default PrivacyPolicyPage
