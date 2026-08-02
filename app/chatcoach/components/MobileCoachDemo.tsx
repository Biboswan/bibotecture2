"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

type Experience = "coach-chat" | "quick-suggestions"

export interface MobileCoachMessage {
  id: string
  body: string
  direction: "incoming" | "outgoing"
  time: string
}

export interface MobileCoachProperty {
  eyebrow: string
  title: string
  detail: string
  price: string
}

export interface MobileCoachConversation {
  contact: string
  status: string
  avatar: string
  messages: MobileCoachMessage[]
  property?: MobileCoachProperty
}

export interface MobileCoachSuggestion {
  title: string
  score: string
  body: string
  reason: string
}

export interface MobileCoachScenario {
  coach: {
    name: string
    initials: string
    speciality: string
  }
  coachChat: {
    conversation: MobileCoachConversation
    question: string
    answer: string[]
  }
  quickSuggestions: {
    conversation: MobileCoachConversation
    suggestions: MobileCoachSuggestion[]
  }
}

export interface Props {
  scenario: MobileCoachScenario
  initialExperience?: Experience
  outcome?: string
  className?: string
}

const MessageBubble: React.FC<{ message: MobileCoachMessage }> = ({
  message,
}) => (
  <div
    className={classNames(
      "flex",
      message.direction === "outgoing" ? "justify-end" : "justify-start"
    )}
  >
    <div
      className={classNames(
        "max-w-[84%] rounded-lg px-2.5 py-2 text-[11px] leading-[1.4] shadow-sm",
        message.direction === "outgoing"
          ? "rounded-tr-sm bg-[#d9fdd3] text-[#17231a]"
          : "rounded-tl-sm bg-white text-[#1d2433]"
      )}
    >
      <p>{message.body}</p>
      <p className="mt-1 text-right text-[8px] text-black/45">
        {message.time}
        {message.direction === "outgoing" ? "  ✓✓" : ""}
      </p>
    </div>
  </div>
)

const PropertyCard: React.FC<{ property: MobileCoachProperty }> = ({
  property,
}) => (
  <article className="ml-auto w-[78%] rounded-lg rounded-tr-sm bg-[#d9fdd3] p-1 shadow-sm">
    <div className="relative h-16 overflow-hidden rounded-md bg-[linear-gradient(135deg,#bfd5cf_0_30%,#f4eee2_30%_42%,#90aca7_42%_56%,#e5d7c6_56%_70%,#71928d_70%)]">
      <div className="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-[#163b34]/65 to-transparent" />
      <p className="absolute bottom-1.5 left-2 text-[6px] font-bold tracking-[0.08em] text-white uppercase">
        {property.eyebrow}
      </p>
    </div>
    <div className="grid gap-0.5 px-1.5 py-1.5">
      <strong className="text-[10px] text-slate-900">{property.title}</strong>
      <span className="text-[8px] text-slate-500">{property.detail}</span>
      <b className="text-[10px] text-slate-900">{property.price}</b>
    </div>
  </article>
)

const Conversation: React.FC<{
  conversation: MobileCoachConversation
  sentMessages: MobileCoachMessage[]
}> = ({ conversation, sentMessages }) => (
  <div className="min-h-0 flex-1 overflow-y-auto bg-[#efeae2] px-3 py-3">
    <span className="mx-auto mb-2 block w-max rounded-md bg-white/90 px-2 py-1 text-[7px] text-slate-500 shadow-sm">
      TODAY
    </span>
    <div className="space-y-2">
      {conversation.messages.map((message, index) => (
        <React.Fragment key={message.id}>
          <MessageBubble message={message} />
          {conversation.property && index === 1 ? (
            <PropertyCard property={conversation.property} />
          ) : null}
        </React.Fragment>
      ))}
      {sentMessages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  </div>
)

const CoachBar: React.FC<{
  conversation: MobileCoachConversation
  scenario: MobileCoachScenario
  isExpanded: boolean
  coachInfoOpen: boolean
  autoSuggest: boolean
  onToggleExpanded: () => void
  onToggleCoachInfo: () => void
  onToggleAutoSuggest: () => void
}> = ({
  conversation,
  scenario,
  isExpanded,
  coachInfoOpen,
  autoSuggest,
  onToggleExpanded,
  onToggleCoachInfo,
  onToggleAutoSuggest,
}) => (
  <div className="relative flex min-h-12 items-center gap-1.5 border-b border-slate-200 bg-white px-2 py-1.5">
    <button
      type="button"
      aria-label={isExpanded ? "Collapse coach" : "Open coach"}
      aria-expanded={isExpanded}
      onClick={onToggleExpanded}
      className={classNames(
        "text-xl text-blue-500 transition-transform",
        !isExpanded && "rotate-180"
      )}
    >
      ‹
    </button>
    <span className="flex min-w-0 items-center gap-1 rounded-lg bg-blue-500 px-1.5 py-1 text-[8px] font-semibold text-white">
      <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-blue-900 text-[6px]">
        {conversation.avatar}
      </span>
      <span className="max-w-20 truncate">{conversation.contact}</span>
      <span aria-hidden="true">⌄</span>
    </span>
    <button
      type="button"
      aria-expanded={coachInfoOpen}
      onClick={onToggleCoachInfo}
      className="flex min-w-0 flex-1 items-center gap-1 rounded-lg bg-slate-100 px-1.5 py-1 text-left text-[8px] font-semibold text-slate-900"
    >
      <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-[#030213] text-[6px] text-white">
        {scenario.coach.initials}
      </span>
      <span className="truncate">{scenario.coach.name}</span>
      <span className="ml-auto" aria-hidden="true">
        ⌄
      </span>
    </button>
    <span className="flex flex-none items-center gap-1">
      <svg
        className="h-3 w-3 text-blue-500"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M13 2 4.5 13.5H11l-1 8.5L20 10h-6.5z" />
      </svg>
      <button
        type="button"
        role="switch"
        aria-checked={autoSuggest}
        aria-label="Auto-suggest"
        onClick={onToggleAutoSuggest}
        className={classNames(
          "relative inline-flex h-4 w-7 flex-none items-center rounded-full px-0.5 transition-colors",
          autoSuggest ? "bg-emerald-400" : "bg-slate-300"
        )}
      >
        <span
          className={classNames(
            "h-3 w-3 rounded-full bg-white shadow-sm transition-transform",
            autoSuggest ? "translate-x-3" : "translate-x-0"
          )}
        />
      </button>
    </span>

    {coachInfoOpen ? (
      <div className="absolute top-[calc(100%+6px)] right-2 z-30 w-56 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
        <p className="text-[10px] font-semibold text-slate-900">
          {scenario.coach.name}
        </p>
        <p className="mt-1 text-[9px] leading-relaxed text-slate-500">
          {scenario.coach.speciality}
        </p>
        <p className="mt-2 text-[8px] font-semibold text-emerald-600">
          Selected for this conversation
        </p>
      </div>
    ) : null}
  </div>
)

const CoachConversation: React.FC<{
  scenario: MobileCoachScenario
}> = ({ scenario }) => (
  <div className="min-h-0 flex-1 overflow-y-auto bg-white p-3">
    <div className="ml-auto max-w-[92%] rounded-xl border border-blue-100 bg-blue-50 p-2.5 text-[9px] leading-[1.45] text-slate-700">
      <header className="mb-1.5 flex items-center justify-between">
        <b className="text-[8px] text-slate-900">You</b>
        <time className="text-[7px] text-slate-400">Just now</time>
      </header>
      {scenario.coachChat.question}
    </div>

    <div className="mt-2.5 max-w-[94%] rounded-xl border border-slate-200 bg-white p-2.5 text-[9px] leading-[1.45] text-slate-700 shadow-sm">
      <header className="mb-2 flex items-center gap-1.5">
        <span className="grid h-5 w-5 place-items-center rounded-full bg-[#030213] text-[6px] text-white">
          {scenario.coach.initials}
        </span>
        <b className="text-[8px] text-slate-900">{scenario.coach.name}</b>
        <em className="rounded-full bg-blue-50 px-1.5 py-0.5 text-[6px] font-bold text-blue-600 not-italic">
          Coach
        </em>
      </header>
      <div className="space-y-2">
        {scenario.coachChat.answer.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>

    <div className="mt-2.5 flex items-center rounded-full border border-slate-200 bg-slate-100 py-1 pr-1 pl-3">
      <input
        aria-label={`Message ${scenario.coach.name}`}
        placeholder={`Message ${scenario.coach.name.split(" ")[0]}…`}
        className="min-w-0 flex-1 bg-transparent text-[9px] outline-none placeholder:text-slate-400"
      />
      <button
        type="button"
        aria-label="Send coach question"
        className="grid h-6 w-6 place-items-center rounded-full bg-blue-500 text-[10px] text-white"
      >
        ↑
      </button>
    </div>
  </div>
)

const SuggestionCard: React.FC<{
  suggestion: MobileCoachSuggestion
  onUse: () => void
}> = ({ suggestion, onUse }) => (
  <button
    type="button"
    onClick={onUse}
    className="w-[250px] flex-none overflow-hidden rounded-xl border border-[#030213] bg-white text-left transition hover:border-blue-500"
  >
    <header className="flex items-center justify-between border-b border-slate-200 px-2.5 py-2">
      <b className="font-mono text-[8px] tracking-[0.04em] text-blue-600 uppercase">
        {suggestion.title}
      </b>
      <span className="text-[8px] text-slate-400">{suggestion.score}</span>
    </header>
    <p className="min-h-16 px-2.5 py-2 text-[9px] leading-[1.4] text-slate-800">
      &ldquo;{suggestion.body}&rdquo;
    </p>
    <footer className="border-t border-slate-200 bg-slate-100 px-2.5 py-2">
      <span className="block font-mono text-[7px] tracking-[0.08em] text-slate-400 uppercase">
        Why this works
      </span>
      <b className="mt-1 block text-[8px] text-blue-600">{suggestion.reason}</b>
    </footer>
  </button>
)

const QuickSuggestions: React.FC<{
  scenario: MobileCoachScenario
  onUseSuggestion: (suggestion: MobileCoachSuggestion) => void
}> = ({ scenario, onUseSuggestion }) => (
  <div className="min-h-0 flex-1 overflow-y-auto bg-white py-3">
    <div className="flex gap-2 overflow-x-auto px-3 pb-2">
      {scenario.quickSuggestions.suggestions.map((suggestion) => (
        <SuggestionCard
          key={suggestion.title}
          suggestion={suggestion}
          onUse={() => onUseSuggestion(suggestion)}
        />
      ))}
    </div>
    <div className="mx-3 mt-1 flex items-center rounded-full border border-slate-200 bg-slate-100 py-1 pr-1 pl-3">
      <input
        aria-label={`Ask ${scenario.coach.name}`}
        placeholder="Ask your coach…"
        className="min-w-0 flex-1 bg-transparent text-[9px] outline-none placeholder:text-slate-400"
      />
      <button
        type="button"
        aria-label="Send coach question"
        className="grid h-6 w-6 place-items-center rounded-full bg-blue-500 text-[10px] text-white"
      >
        ↑
      </button>
    </div>
  </div>
)

const MobileCoachDemo: React.FC<Props> = ({
  scenario,
  initialExperience = "coach-chat",
  outcome,
  className,
}) => {
  const draftId = React.useId()
  const [experience, setExperience] =
    React.useState<Experience>(initialExperience)
  const [draft, setDraft] = React.useState("")
  const [sentMessages, setSentMessages] = React.useState<
    Record<Experience, MobileCoachMessage[]>
  >({ "coach-chat": [], "quick-suggestions": [] })
  const [isCoachExpanded, setIsCoachExpanded] = React.useState(true)
  const [coachInfoOpen, setCoachInfoOpen] = React.useState(false)
  const [autoSuggest, setAutoSuggest] = React.useState(true)

  const isCoachChat = experience === "coach-chat"
  const conversation = isCoachChat
    ? scenario.coachChat.conversation
    : scenario.quickSuggestions.conversation

  const changeExperience = (nextExperience: Experience) => {
    setExperience(nextExperience)
    setDraft("")
    setIsCoachExpanded(true)
    setCoachInfoOpen(false)
  }

  const sendDraft = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const body = draft.trim()
    if (!body) return

    setSentMessages((current) => ({
      ...current,
      [experience]: [
        ...current[experience],
        {
          id: `${experience}-${current[experience].length}`,
          body,
          direction: "outgoing",
          time: "now",
        },
      ],
    }))
    setDraft("")
  }

  return (
    <div
      className={classNames(
        "cc-phone-glow relative mx-auto w-full max-w-[410px] rounded-[48px] p-3",
        className
      )}
    >
      <div className="mb-4 flex justify-center">
        <div
          className="border-cc bg-cc-elevated shadow-cc-card grid grid-cols-2 rounded-full border p-1"
          role="tablist"
          aria-label="Choose prototype state"
        >
          <button
            type="button"
            role="tab"
            aria-selected={isCoachChat}
            onClick={() => changeExperience("coach-chat")}
            className={classNames(
              "rounded-full px-4 py-2 text-xs font-medium transition",
              isCoachChat
                ? "bg-[#030213] text-white"
                : "text-cc-muted hover:text-cc-primary"
            )}
          >
            1:1 coach
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={!isCoachChat}
            onClick={() => changeExperience("quick-suggestions")}
            className={classNames(
              "rounded-full px-4 py-2 text-xs font-medium transition",
              !isCoachChat
                ? "bg-[#030213] text-white"
                : "text-cc-muted hover:text-cc-primary"
            )}
          >
            Quick suggestions
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[38px] border-[7px] border-[#111816] bg-white shadow-[0_30px_80px_rgba(15,16,24,0.22)]">
        <div className="flex h-[760px] flex-col">
          <header className="flex h-16 flex-none items-center gap-2 bg-[#f8f7f2] px-3 text-[#030213]">
            <span className="text-2xl" aria-hidden="true">
              ‹
            </span>
            <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-gradient-to-br from-[#e4bea4] to-[#6f4937] text-[9px] font-bold text-white">
              {conversation.avatar}
            </span>
            <span className="min-w-0 flex-1">
              <strong className="block truncate text-xs">
                {conversation.contact}
              </strong>
              <span className="block text-[9px] text-slate-500">
                {conversation.status}
              </span>
            </span>
            <span className="text-base" aria-hidden="true">
              ▢
            </span>
            <span className="text-base" aria-hidden="true">
              ⌕
            </span>
          </header>

          <Conversation
            conversation={conversation}
            sentMessages={sentMessages[experience]}
          />

          <form
            onSubmit={sendDraft}
            className="flex h-13 flex-none items-center gap-1.5 bg-[#f0f2f3] px-2 py-1.5"
          >
            <span className="text-xl text-slate-600" aria-hidden="true">
              ＋
            </span>
            <label className="sr-only" htmlFor={draftId}>
              Message {conversation.contact}
            </label>
            <div className="flex h-9 min-w-0 flex-1 items-center rounded-full bg-white px-3">
              <input
                id={draftId}
                aria-label={`Message ${conversation.contact}`}
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                placeholder="Message"
                className="min-w-0 flex-1 text-[10px] outline-none placeholder:text-slate-400"
              />
              <span className="text-slate-400" aria-hidden="true">
                ▣
              </span>
            </div>
            <button
              type="submit"
              disabled={!draft.trim()}
              aria-label={draft ? "Send message" : "Record voice message"}
              className="grid h-9 w-9 flex-none place-items-center rounded-full bg-[#030213] text-xs text-white disabled:bg-slate-500"
            >
              {draft ? "➤" : "♩"}
            </button>
          </form>

          <section
            className={classNames(
              "flex flex-col overflow-hidden border-t border-slate-200 bg-white transition-[flex-basis] duration-300",
              isCoachExpanded
                ? isCoachChat
                  ? "basis-[350px]"
                  : "basis-[255px]"
                : "basis-12"
            )}
          >
            <CoachBar
              conversation={conversation}
              scenario={scenario}
              isExpanded={isCoachExpanded}
              coachInfoOpen={coachInfoOpen}
              autoSuggest={autoSuggest}
              onToggleExpanded={() => setIsCoachExpanded((open) => !open)}
              onToggleCoachInfo={() => setCoachInfoOpen((open) => !open)}
              onToggleAutoSuggest={() => setAutoSuggest((on) => !on)}
            />
            {isCoachExpanded ? (
              isCoachChat ? (
                <CoachConversation scenario={scenario} />
              ) : (
                <QuickSuggestions
                  scenario={scenario}
                  onUseSuggestion={(suggestion) => setDraft(suggestion.body)}
                />
              )
            ) : null}
          </section>

          <footer className="flex h-10 flex-none items-center justify-between bg-[#d9dde1] px-6 text-xl text-slate-600">
            <span aria-hidden="true">◎</span>
            <span aria-hidden="true">♩</span>
          </footer>
        </div>
      </div>
      {outcome ? (
        <div className="border-cc-strong bg-cc-elevated shadow-cc-card mt-5 flex items-center gap-3 rounded-xl border px-4 py-3">
          <span className="cc-dot-active h-2 w-2 flex-none rounded-full" />
          <p className="text-cc-primary text-sm font-medium">{outcome}</p>
        </div>
      ) : null}
      <p className="text-cc-subtle mt-4 text-center text-xs">
        Try both views, use a coach reply, then edit and send it.
      </p>
    </div>
  )
}

export default MobileCoachDemo
