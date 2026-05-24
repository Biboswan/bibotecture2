import Image from "next/image"
import Link from "next/link"
import type * as React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[rgb(6,6,6)]">
      <div className="mx-auto max-w-[1440px] px-[30px] py-20">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Image
                src="/icons/bibotecture-logo.svg"
                alt="Bibotecture"
                width={24}
                height={24}
                className="h-6 w-6"
              />
              <span className="text-2xl text-white">Bibotecture</span>
            </div>
            <p className="max-w-md text-xl leading-relaxed text-[rgb(204,204,204)]">
              Building future proof solutions.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <p className="text-sm tracking-[0.1em] text-[rgb(104,104,104)] uppercase">
              Contact us
            </p>
            <Link
              href="mailto:bibo@bibotecture.com"
              className="text-2xl text-white hover:opacity-80"
            >
              bibo@bibotecture.com
            </Link>
            <Link
              href="https://cal.com/biboswan-roy-mfgllb/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-full border border-white/20 px-6 py-3 text-base text-white transition-colors hover:bg-white/5"
            >
              book a call
            </Link>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <p className="mb-8 text-[60px] leading-none font-light tracking-[-0.03em] text-white lg:text-[95px]">
            Let&apos;s build the future together
          </p>
          <p className="mb-12 max-w-xl text-lg text-[rgb(204,204,204)]">
            Have an idea, a product, or just want to chat about possibilities?
          </p>

          <div className="flex flex-col gap-4 text-sm text-[rgb(104,104,104)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © Bibotecture {new Date().getFullYear()} | All Rights Reserved
            </p>
            <div className="flex gap-6">
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
