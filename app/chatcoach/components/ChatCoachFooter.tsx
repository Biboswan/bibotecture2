import * as React from "react"

import Image from "next/image"
import Link from "next/link"

const ChatCoachFooter: React.FC = () => {
  return (
    <footer className="border-cc border-t px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/images/chatcoach/ChatCoachLogo.png"
              alt="Chat Coach logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <p className="text-cc-primary text-base font-semibold">
              Chat <span style={{ color: "#6366f1" }}>Coach</span>
            </p>
          </div>
          <p className="text-cc-muted mt-2 max-w-sm text-sm leading-relaxed">
            Real-time coaching from expert minds.
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
            href="mailto:bibo@bibotecture.com"
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
