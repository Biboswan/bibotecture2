import * as React from "react"

import Link from "next/link"

const ChatCoachFooter: React.FC = () => {
  return (
    <footer className="border-cc border-t px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-cc-primary text-base font-semibold">Chat Coach</p>
          <p className="text-cc-muted mt-2 max-w-sm text-sm leading-relaxed">
            Real-time AI coaching for WhatsApp.
          </p>
          <p className="text-cc-faint mt-4 text-xs">
            © {new Date().getFullYear()} Bibotecture Ltd
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/privacy-policy/"
            className="text-cc-muted hover:text-cc-primary transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms-of-service/"
            className="text-cc-muted hover:text-cc-primary transition-colors"
          >
            Terms
          </Link>
          <a
            href="mailto:hello@bibotecture.com"
            className="text-cc-muted hover:text-cc-primary transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default ChatCoachFooter
