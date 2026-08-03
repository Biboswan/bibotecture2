import * as React from "react"
import Image from "next/image"

import BrowserFrame from "./BrowserFrame"

const SearchIcon: React.FC<{ className?: string }> = ({
  className = "h-[1.25em] w-[1.25em]",
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4 4" strokeLinecap="round" />
  </svg>
)

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 2.5c.7 4.2 2.2 5.7 6.5 6.5C11.2 9.7 9.7 11.2 9 15.5 8.2 11.2 6.7 9.7 2.5 9 6.7 8.2 8.2 6.7 9 2.5Z" />
    <path d="M17.5 13c.4 2.7 1.4 3.7 4 4-2.6.4-3.6 1.4-4 4-.4-2.6-1.4-3.6-4-4 2.6-.3 3.6-1.3 4-4Z" />
  </svg>
)

/** Brand mark: rounded speech bubble, tuned to read as the Chat Coach logo. */
const ChatCoachLogo: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 32 32"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 25.5c-3.4-2.1-5.5-5.6-5.5-9.6C3.5 9.1 9 4.5 16 4.5S28.5 9.1 28.5 15.9c0 4-2.5 7.6-6.3 9.7-.6 2.4-.2 3.9-.2 3.9" />
    <path d="M9 25.5s.4-1.6-.2-4" />
  </svg>
)

const InfoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 11v5" />
    <path d="M12 7.75v.5" />
  </svg>
)

const PinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M9 4h6l-1 5 3 3v2H7v-2l3-3-1-5Z" />
    <path d="M12 14v6" />
  </svg>
)

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.9"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const BoltIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M13 2 4.5 13.2c-.3.4 0 1 .5 1H11l-1 7.8 8.5-11.2c.3-.4 0-1-.5-1H12l1-7.6Z" />
  </svg>
)

const ThumbIcon: React.FC<{ className?: string; down?: boolean }> = ({
  className,
  down,
}) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={down ? { transform: "rotate(180deg)" } : undefined}
  >
    <path d="M7 10v10H4V10h3Z" />
    <path d="M7 10l4-7c1.3 0 2.2 1 2 2.3L12.5 9H18c1.2 0 2 1 1.8 2.2l-1.2 6c-.2 1-1 1.8-2 1.8H7" />
  </svg>
)

const CopyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="9" y="9" width="11" height="11" rx="2.5" />
    <path d="M15 5.5A2.5 2.5 0 0 0 12.5 3H6a2.5 2.5 0 0 0-2.5 2.5V12A2.5 2.5 0 0 0 6 14.5" />
  </svg>
)

const SendArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 19V5" />
    <path d="m6 11 6-6 6 6" />
  </svg>
)

const VideoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="7" width="12" height="10" rx="2.5" />
    <path d="m15 11 5-3v8l-5-3" />
  </svg>
)

interface AvatarProps {
  initials: string
  tone: string
  className?: string
  src?: string
  alt?: string
}

const Avatar: React.FC<AvatarProps> = ({
  initials,
  tone,
  className,
  src,
  alt,
}) => (
  <span
    className={`relative flex aspect-square flex-none items-center justify-center overflow-hidden rounded-full border border-white/20 font-semibold text-white shadow-sm ${
      className ?? "h-[2.6em] text-[0.8em]"
    }`}
    style={src ? undefined : { background: tone }}
  >
    {src ? (
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        sizes="56px"
        className="object-cover"
      />
    ) : (
      initials
    )}
  </span>
)

const OLIVER_AVATAR = "/images/chatcoach/avatars/buyer-oliver.jpg"
const ROHAN_AVATAR = "/images/chatcoach/avatars/coach-rohan.jpg"

interface ConversationItem {
  initials: string
  name: string
  preview: string
  time: string
  unread?: string
  tone: string
  src?: string
}

const conversations: readonly ConversationItem[] = [
  {
    initials: "OB",
    name: "Oliver Bennett",
    preview: "Let me see what flexibility we have.",
    time: "9:18 pm",
    unread: "2",
    tone: "linear-gradient(145deg, #536575, #18242d)",
    src: OLIVER_AVATAR,
  },
  {
    initials: "ER",
    name: "Elena Rossi",
    preview: "Thanks, I will review and get back.",
    time: "8:47 pm",
    unread: "1",
    tone: "linear-gradient(145deg, #bd8d73, #5f443b)",
  },
  {
    initials: "SD",
    name: "Skyline Developers",
    preview: "New launch: SkyVue Residences",
    time: "6:32 pm",
    tone: "linear-gradient(145deg, #426c83, #152a3a)",
  },
  {
    initials: "OO",
    name: "Oakwood Owners",
    preview: "Pooja: AGM next Saturday at 11 AM",
    time: "5:20 pm",
    unread: "12",
    tone: "linear-gradient(145deg, #79945a, #28432e)",
  },
]

const ChatList: React.FC = () => (
  <section className="flex h-full min-w-0 flex-col bg-[#10191d] text-white">
    <div className="flex h-[10%] items-center px-[5%]">
      <span className="text-[1.4em] font-semibold tracking-[-0.03em]">
        WhatsApp
      </span>
      <span className="ml-auto grid h-[1.9em] w-[1.9em] place-items-center rounded-md border border-white/15 text-[1.05em]">
        +
      </span>
      <span className="ml-[5%] text-[1.4em] leading-none text-white/70">⋮</span>
    </div>

    <div className="mx-[4%] flex h-[7%] items-center gap-[4%] rounded-full bg-white/[0.07] px-[5%] text-white/45">
      <SearchIcon />
      <span className="truncate text-[0.9em]">Search or start a new chat</span>
    </div>

    <div className="flex h-[8%] items-center gap-[3%] px-[5%] text-[0.84em] text-white/60">
      <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-[5%] py-[2%] text-emerald-300">
        All
      </span>
      <span className="rounded-full border border-white/10 px-[5%] py-[2%]">
        Unread 231
      </span>
      <span className="rounded-full border border-white/10 px-[5%] py-[2%]">
        Favourites
      </span>
    </div>

    <div className="min-h-0 flex-1 px-[3%]">
      {conversations.map((conversation, index) => (
        <div
          key={conversation.name}
          className={`flex h-[19%] items-center rounded-[0.75em] px-[3%] ${
            index === 0 ? "bg-white/[0.09]" : ""
          }`}
        >
          <Avatar
            initials={conversation.initials}
            tone={conversation.tone}
            src={conversation.src}
            alt={conversation.name}
          />
          <div className="ml-[4%] min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <strong className="truncate text-[1em] font-medium">
                {conversation.name}
              </strong>
              <span
                className={`ml-auto flex-none text-[0.72em] ${
                  conversation.unread ? "text-emerald-400" : "text-white/45"
                }`}
              >
                {conversation.time}
              </span>
            </div>
            <div className="mt-[2%] flex items-center text-[0.82em] text-white/45">
              <span className="truncate">{conversation.preview}</span>
              {conversation.unread ? (
                <span className="ml-auto grid aspect-square h-[1.6em] flex-none place-items-center rounded-full bg-emerald-400 text-[0.7em] font-bold text-[#0b1519]">
                  {conversation.unread}
                </span>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
)

const Message: React.FC<{
  children: React.ReactNode
  time: string
  sent?: boolean
}> = ({ children, time, sent }) => (
  <div
    className={`max-w-[78%] rounded-[0.8em] px-[3.5%] pt-[2.5%] pb-[2%] text-[0.94em] leading-[1.4] shadow-sm ${
      sent
        ? "ml-auto rounded-tr-sm bg-[#005c4b] text-white"
        : "rounded-tl-sm bg-[#202c33] text-white/90"
    }`}
  >
    {children}
    <span className="mt-[1%] flex items-center justify-end gap-[3%] text-[0.7em] text-white/45">
      {time}
      {sent ? <span className="text-[#53bdeb]">✓✓</span> : null}
    </span>
  </div>
)

/** The floating coach reasoning card that overlays the conversation. */
const PsychologyCard: React.FC = () => (
  <div className="absolute right-[3%] bottom-[13%] z-20 w-[64%] rounded-[0.9em] border border-slate-200/80 bg-white p-[4.5%] text-[#1e293b] shadow-[0_18px_50px_rgba(0,0,0,0.45)]">
    <p className="text-[0.72em] font-semibold text-blue-600">
      Psychology Principle
    </p>
    <p className="mt-[1.5%] text-[0.72em] text-slate-700">
      Loss Aversion and Contrast
    </p>

    <p className="mt-[5%] text-[0.72em] font-semibold text-violet-600">
      Intent
    </p>
    <p className="mt-[1.5%] text-[0.72em] text-slate-700">
      Protect value before discussing a discount
    </p>

    <p className="mt-[5%] text-[0.72em] font-semibold text-emerald-600">
      Reasoning
    </p>
    <p className="mt-[1.5%] text-[0.68em] leading-[1.5] text-slate-600">
      Presenting the ₹1.62 Cr mid-floor option creates a clear comparison before
      negotiating the ₹1.80 Cr corner unit. It acknowledges the buyer's budget
      while preserving the premium unit's value and reveals which trade-offs
      matter most.
    </p>
  </div>
)

const Conversation: React.FC = () => (
  <section className="relative flex h-full min-w-0 flex-col overflow-hidden bg-[#0b141a] text-white">
    <div className="relative z-10 flex h-[10%] items-center border-b border-white/[0.06] bg-[#202c33] px-[4%]">
      <Avatar
        initials="OB"
        tone="linear-gradient(145deg, #536575, #18242d)"
        src={OLIVER_AVATAR}
        alt="Oliver Bennett"
        className="h-[2.2em] text-[0.72em]"
      />
      <div className="ml-[3%]">
        <strong className="block text-[0.95em] font-medium">
          Oliver Bennett
        </strong>
        <span className="block text-[0.68em] text-white/45">online</span>
      </div>
      <VideoIcon className="ml-auto h-[1.3em] w-[1.3em] text-white/70" />
      <SearchIcon className="ml-[5%] h-[1.15em] w-[1.15em] text-white/70" />
      <span className="ml-[5%] text-[1.3em] leading-none text-white/70">⋮</span>
    </div>

    <div
      className="absolute inset-0 opacity-[0.16]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 30%, rgba(255,255,255,.18) 0 1px, transparent 1.5px), radial-gradient(circle at 75% 70%, rgba(255,255,255,.12) 0 1px, transparent 1.5px)",
        backgroundSize: "28px 28px, 36px 36px",
      }}
    />

    <div className="relative z-10 flex flex-1 flex-col gap-[3.5%] overflow-hidden px-[6%] pt-[5%] pb-[13%]">
      <span className="mx-auto rounded-full bg-[#18252b] px-[4%] py-[1.2%] text-[0.66em] text-white/55">
        Today
      </span>
      <Message time="9:12 pm">
        I really like the 3BHK, but ₹1.80 Cr is above my budget. I was planning
        around ₹1.65 Cr.
      </Message>
      <Message sent time="9:14 pm">
        I understand. The corner unit includes two parking spaces and a larger
        balcony.
      </Message>
      <Message time="9:16 pm">
        The other project is offering ₹1.68 Cr. If you can come closer, I can
        make a decision this week.
      </Message>
      <Message sent time="9:18 pm">
        Let me see what flexibility we have.
      </Message>

      <PsychologyCard />
    </div>

    <div className="absolute right-[4%] bottom-[2.6%] left-[4%] z-10 flex h-[7.5%] items-center rounded-full bg-[#202c33] px-[4%] text-white/35 shadow-lg">
      <span className="text-[1.2em]">＋</span>
      <span className="ml-[4%] text-[0.8em]">Type a message</span>
      <span className="ml-auto h-[0.6em] w-[0.6em] rounded-full border border-white/70 bg-emerald-400" />
    </div>
  </section>
)

/** Coach avatar: Rohan Malhotra's photo with a small AI sparkle badge. */
const CoachAvatar: React.FC = () => (
  <span className="relative h-[2.1em] w-[2.1em] flex-none overflow-hidden rounded-[0.6em] shadow-sm">
    <Image
      src={ROHAN_AVATAR}
      alt="Rohan Malhotra"
      fill
      sizes="40px"
      className="object-cover"
    />
    <span
      className="absolute -right-[0.1em] -bottom-[0.1em] grid h-[1.1em] w-[1.1em] place-items-center rounded-full border border-white text-white"
      style={{ background: "linear-gradient(145deg, #4f7cf7, #a855f7)" }}
    >
      <SparklesIcon className="h-[0.7em] w-[0.7em]" />
    </span>
  </span>
)

const suggestions: readonly {
  text: string
  confidence?: string
}[] = [
  {
    text: "That's helpful to know. Before we discuss the corner unit price, may I show you the ₹1.62 Cr mid-floor option so you can compare the trade-offs?",
    confidence: "96%",
  },
  {
    text: "If the corner unit is the right fit, what number would allow you to move forward this week?",
  },
]

const CoachPanel: React.FC = () => (
  <section className="flex h-full min-w-0 flex-col overflow-hidden bg-[#f6f8fb] text-[#172033]">
    <header className="flex h-[9.5%] items-center gap-[3%] bg-[#0f5658] px-[5%] text-white">
      <ChatCoachLogo className="h-[1.6em] w-[1.6em] flex-none" />
      <strong className="text-[1.02em] font-semibold">Chat Coach</strong>
      <PinIcon className="ml-auto h-[1.2em] w-[1.2em] text-white/70" />
      <span className="text-[1.2em] leading-none text-white/70">×</span>
    </header>

    <div className="flex h-[11%] items-center border-b border-slate-200 px-[5.5%]">
      <div className="min-w-0">
        <span className="block text-[0.6em] font-semibold tracking-[0.08em] text-slate-400 uppercase">
          Chatting with
        </span>
        <div className="mt-[2%] flex items-center gap-[3%]">
          <strong className="text-[0.88em] whitespace-nowrap">
            Oliver Bennett
          </strong>
          <InfoIcon className="h-[0.95em] w-[0.95em] flex-none text-slate-400" />
        </div>
      </div>
      <button
        type="button"
        className="ml-auto flex-none rounded-[0.6em] border border-slate-200 px-[4.5%] py-[2.5%] text-[0.7em] font-semibold whitespace-nowrap text-slate-600"
      >
        Sign Out
      </button>
    </div>

    <div className="flex h-[11%] items-center gap-[3%] border-b border-slate-200 px-[5%]">
      <CoachAvatar />
      <div className="mr-auto min-w-0">
        <div className="flex items-center gap-[3%]">
          <strong className="text-[0.78em] whitespace-nowrap">
            Rohan Malhotra
          </strong>
          <ChevronDownIcon className="h-[0.8em] w-[0.8em] flex-none text-slate-400" />
        </div>
        <span className="block truncate text-[0.6em] text-slate-500">
          Real estate negotiator
        </span>
      </div>
      <div className="flex flex-none items-center gap-[4%] whitespace-nowrap">
        <BoltIcon className="h-[0.95em] w-[0.95em] text-blue-600" />
        <span className="text-[0.62em] font-medium text-slate-600">
          Auto-suggest
        </span>
        <span className="relative h-[1.3em] w-[2.4em] rounded-full bg-blue-600">
          <span className="absolute top-[0.15em] right-[0.15em] h-[1em] w-[1em] rounded-full bg-white shadow" />
        </span>
      </div>
    </div>

    <div className="min-h-0 flex-1 overflow-hidden px-[5%] pt-[4%]">
      <div className="rounded-[0.9em] border border-slate-200 bg-white p-[5%] shadow-sm">
        <p className="text-[0.76em] leading-[1.55] text-slate-700">
          Don't discount immediately. Oliver has revealed urgency and a credible
          alternative. Clarify whether ₹1.68 Cr is his final threshold, then
          compare total value. Offer the ₹1.62 Cr mid-floor before negotiating
          the corner unit.
        </p>
        <div className="mt-[5%] h-px bg-slate-100" />
        <div className="mt-[4%] flex items-center gap-[6%] text-slate-400">
          <ThumbIcon className="h-[1.05em] w-[1.05em]" />
          <ThumbIcon className="h-[1.05em] w-[1.05em]" down />
          <CopyIcon className="ml-auto h-[1.05em] w-[1.05em]" />
        </div>
      </div>

      <div className="mt-[5%] flex items-center gap-[2%] text-[0.68em] font-semibold text-slate-500">
        <span className="h-[0.55em] w-[0.55em] rounded-full bg-blue-600" />
        Quick Suggestions · Rohan Malhotra
      </div>

      {suggestions.map((suggestion, index) => (
        <div
          key={suggestion.text}
          className={`mt-[3.5%] rounded-[0.8em] border bg-white p-[4.5%] shadow-sm ${
            index === 0 ? "border-blue-200" : "border-slate-200"
          }`}
        >
          <div className="flex gap-[3%]">
            <p className="text-[0.74em] leading-[1.5] text-slate-700">
              {suggestion.text}
            </p>
            <InfoIcon className="h-[0.95em] w-[0.95em] flex-none text-slate-300" />
          </div>
          {suggestion.confidence ? (
            <div className="mt-[3.5%] flex items-center">
              <span className="rounded-full bg-blue-50 px-[3.5%] py-[1.5%] text-[0.66em] font-semibold text-blue-700">
                {suggestion.confidence}
              </span>
              <span className="ml-auto flex items-center gap-[6%] text-[0.66em] text-slate-400">
                <CopyIcon className="h-[0.95em] w-[0.95em]" />
                Copy
              </span>
            </div>
          ) : null}
        </div>
      ))}
    </div>

    <div className="flex h-[9%] items-center gap-[3%] border-t border-slate-200 px-[5%]">
      <div className="flex min-w-0 flex-1 items-center rounded-full border border-slate-200 bg-white px-[4%] py-[3%]">
        <span className="truncate text-[0.68em] text-slate-400">
          Ask anything about negotiation, buyer psychology, or communication
          tips...
        </span>
      </div>
      <span className="grid h-[2.1em] w-[2.1em] flex-none place-items-center rounded-full bg-blue-600 text-white">
        <SendArrowIcon className="h-[1.1em] w-[1.1em]" />
      </span>
    </div>
  </section>
)

const HeroProductPreview: React.FC = () => (
  <BrowserFrame address="web.whatsapp.com">
    <div
      role="img"
      aria-label="Chat Coach analyzing a real estate negotiation beside a WhatsApp conversation"
      className="grid h-full w-full grid-cols-[30%_42%_28%] overflow-hidden bg-[#0b141a] text-[clamp(5px,1vw,13px)]"
    >
      <ChatList />
      <Conversation />
      <CoachPanel />
    </div>
  </BrowserFrame>
)

export default HeroProductPreview
