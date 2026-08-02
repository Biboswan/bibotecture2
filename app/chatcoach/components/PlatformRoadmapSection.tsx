"use client"

import { motion } from "motion/react"
import * as React from "react"

import classNames from "@/utils/classNames"

import { useScrollAnimation } from "../hooks/useScrollAnimation"
import SectionHeader from "./SectionHeader"

type IconProps = { className?: string }

const WhatsAppIcon: React.FC<IconProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="#25D366"
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.06c-.24.68-1.42 1.32-1.96 1.36-.5.04-.98.29-3.3-.68-2.79-1.16-4.55-4.03-4.69-4.22-.14-.19-1.12-1.49-1.12-2.84 0-1.35.71-2.01.96-2.29.25-.28.55-.35.73-.35h.53c.17 0 .4-.06.63.48.24.56.79 1.94.86 2.08.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.17.28.74 1.22 1.59 1.98 1.1.98 2.02 1.28 2.3 1.42.28.14.44.12.6-.07.17-.19.69-.8.87-1.08.18-.28.36-.23.61-.14.25.09 1.62.76 1.9.9.28.14.46.21.53.33.07.11.07.65-.17 1.33Z" />
  </svg>
)

const GmailIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
    <path
      fill="#4caf50"
      d="M45 16.2l-5 2.75l-5 4.75L35 40h7c1.657 0 3-1.343 3-3V16.2z"
    />
    <path
      fill="#1e88e5"
      d="M3 16.2l3.614 1.71L13 23.7V40H6c-1.657 0-3-1.343-3-3V16.2z"
    />
    <polygon
      fill="#e53935"
      points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
    />
    <path
      fill="#c62828"
      d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859C9.132 8.301 8.228 8 7.298 8C4.924 8 3 9.924 3 12.298z"
    />
    <path
      fill="#fbc02d"
      d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341C38.868 8.301 39.772 8 40.702 8C43.076 8 45 9.924 45 12.298z"
    />
  </svg>
)

const TelegramIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="12" r="10" fill="#229ED9" />
    <path
      fill="#fff"
      d="M17.6 7.1 15.5 17c-.15.66-.55.82-1.11.51l-3.06-2.26-1.48 1.42c-.16.16-.3.3-.62.3l.22-3.12 5.68-5.13c.25-.22-.05-.34-.38-.12l-7.02 4.42-3.02-.94c-.66-.2-.67-.66.14-.98l11.8-4.55c.55-.2 1.03.13.85.95Z"
    />
  </svg>
)

const IMessageIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="cc-im" x1="12" y1="0" x2="12" y2="24">
        <stop stopColor="#5BF675" />
        <stop offset="1" stopColor="#12CC3E" />
      </linearGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#cc-im)" />
    <path
      fill="#fff"
      d="M12 6c-3.31 0-6 2.24-6 5 0 1.56.86 2.95 2.2 3.86-.08.72-.42 1.6-.96 2.19-.13.14 0 .37.19.33 1.3-.23 2.2-.72 2.77-1.12.56.12 1.16.19 1.8.19 3.31 0 6-2.24 6-5s-2.69-5-6-5Z"
    />
  </svg>
)

const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <radialGradient id="cc-ig" cx="0.3" cy="1" r="1.1">
        <stop offset="0" stopColor="#FED576" />
        <stop offset="0.26" stopColor="#F47133" />
        <stop offset="0.61" stopColor="#BC3081" />
        <stop offset="1" stopColor="#4C63D2" />
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#cc-ig)" />
    <rect
      x="6"
      y="6"
      width="12"
      height="12"
      rx="4"
      fill="none"
      stroke="#fff"
      strokeWidth="1.6"
    />
    <circle cx="12" cy="12" r="3" fill="none" stroke="#fff" strokeWidth="1.6" />
    <circle cx="16.2" cy="7.8" r="1" fill="#fff" />
  </svg>
)

const MessengerIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="cc-msg" x1="12" y1="1" x2="12" y2="23">
        <stop stopColor="#00B2FF" />
        <stop offset="1" stopColor="#006AFF" />
      </linearGradient>
    </defs>
    <path
      fill="url(#cc-msg)"
      d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.19.16.14.26.34.27.56l.05 1.78c.02.57.6.94 1.12.71l1.99-.88c.17-.07.36-.09.53-.04.91.25 1.88.39 2.9.39 5.64 0 10-4.13 10-9.7S17.64 2 12 2Z"
    />
    <path
      fill="#fff"
      d="m6.5 14.5 2.93-4.65c.47-.74 1.46-.92 2.16-.4l2.33 1.75c.21.16.5.16.72 0l3.15-2.39c.42-.32.97.18.69.63l-2.93 4.65c-.47.74-1.46.92-2.16.4l-2.33-1.75a.6.6 0 0 0-.72 0l-3.15 2.39c-.42.32-.97-.18-.69-.63Z"
    />
  </svg>
)

const platforms = [
  { name: "WhatsApp", status: "Early access", Icon: WhatsAppIcon },
  { name: "Gmail", status: "Coming soon", Icon: GmailIcon },
  { name: "Telegram", status: "Coming soon", Icon: TelegramIcon },
  { name: "iMessage", status: "Coming soon", Icon: IMessageIcon },
  { name: "Instagram DMs", status: "Coming soon", Icon: InstagramIcon },
  { name: "Messenger", status: "Coming soon", Icon: MessengerIcon },
] as const

export const PlatformRoadmapSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.15)

  return (
    <section
      id="platforms"
      ref={ref}
      className={classNames(
        "border-cc bg-cc-section scroll-mt-20 border-t px-4 py-20 transition-all duration-1000 sm:px-6 lg:px-8 lg:py-28",
        isVisible ? "opacity-100" : "opacity-0"
      )}
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          label="Platform agnostic · Coming soon"
          title="Your coach should follow the conversation, not trap it in one app."
          description="Chat Coach starts beside WhatsApp on iPhone and Chrome. We're building the coaching layer to work across the places your conversations already happen."
        />

        <div className="grid grid-cols-3 justify-items-center gap-x-4 gap-y-10 sm:grid-cols-3 lg:grid-cols-6">
          {platforms.map((platform, index) => {
            const isAvailable = platform.status === "Early access"
            const Icon = platform.Icon

            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.25,
                  }}
                  className="group relative"
                >
                  <div
                    className={classNames(
                      "border-cc bg-cc-elevated shadow-cc-card flex h-16 w-16 items-center justify-center rounded-2xl border transition duration-300 group-hover:-translate-y-1",
                      !isAvailable &&
                        "opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0"
                    )}
                  >
                    <Icon className="h-9 w-9" />
                  </div>
                  {isAvailable ? (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                    </span>
                  ) : null}
                </motion.div>

                <div>
                  <p className="text-cc-primary text-sm font-medium">
                    {platform.name}
                  </p>
                  <p
                    className={classNames(
                      "mt-0.5 font-mono text-[9px] tracking-wide uppercase",
                      isAvailable ? "text-emerald-600" : "text-cc-faint"
                    )}
                  >
                    {platform.status}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <p className="text-cc-faint mx-auto mt-12 max-w-2xl text-center text-xs leading-relaxed">
          Gmail, Telegram, iMessage, Instagram, and Messenger are roadmap
          directions, not currently available integrations.
        </p>
      </div>
    </section>
  )
}
