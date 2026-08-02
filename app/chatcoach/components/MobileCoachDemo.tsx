"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

export interface MobileCoachMessage {
  id: string
  body: string
  direction: "incoming" | "outgoing"
  time: string
}

export interface MobileCoachSuggestion {
  title: string
  body: string
  reason: string
}

export interface MobileCoachQuestion {
  prompt: string
  answer: string
}

export interface MobileCoachScenario {
  contact: string
  status: string
  avatar: string
  defaultCoach: CoachId
  context: string
  messages: MobileCoachMessage[]
  suggestions: MobileCoachSuggestion[]
  questions: MobileCoachQuestion[]
}

export interface Props {
  scenario: MobileCoachScenario
  className?: string
}

type CoachId = "general" | "negotiation" | "dating"
type CoachView = "suggestions" | "ask"

interface CoachOption {
  id: CoachId
  name: string
  speciality: string
  bestFor: string
}

const coaches: CoachOption[] = [
  {
    id: "general",
    name: "ChatCoach",
    speciality: "EQ & communication",
    bestFor: "Everyday conversations",
  },
  {
    id: "negotiation",
    name: "Chris Voss",
    speciality: "Negotiation & tactical empathy",
    bestFor: "Sales & difficult asks",
  },
  {
    id: "dating",
    name: "Matthew Hussey",
    speciality: "Dating communication",
    bestFor: "Dating & relationships",
  },
]

const SparkIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.8"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12 3l1.2 4.1a5 5 0 0 0 3.4 3.4L21 12l-4.4 1.5a5 5 0 0 0-3.4 3.4L12 21l-1.2-4.1a5 5 0 0 0-3.4-3.4L3 12l4.4-1.5a5 5 0 0 0 3.4-3.4L12 3Z" />
  </svg>
)

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
        "max-w-[84%] rounded-2xl px-3 py-2 text-[13px] leading-snug shadow-sm",
        message.direction === "outgoing"
          ? "rounded-br-sm bg-[#d9fdd3] text-[#17231a]"
          : "rounded-bl-sm bg-white text-[#1d2433]"
      )}
    >
      <p>{message.body}</p>
      <p className="mt-1 text-right text-[9px] text-black/45">
        {message.time}
        {message.direction === "outgoing" ? "  ✓✓" : ""}
      </p>
    </div>
  </div>
)

const CoachPicker: React.FC<{
  selectedCoach: CoachOption
  isOpen: boolean
  onToggle: () => void
  onSelect: (coach: CoachOption) => void
}> = ({ selectedCoach, isOpen, onToggle, onSelect }) => {
  const menuId = React.useId()

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={onToggle}
        className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left shadow-sm transition hover:border-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
      >
        <span className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-blue-50 text-blue-500">
          <SparkIcon className="h-5 w-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-xs font-semibold text-slate-900">
            {selectedCoach.name}
          </span>
          <span className="block truncate text-[10px] text-slate-500">
            {selectedCoach.speciality}
          </span>
        </span>
        <svg
          className={classNames(
            "h-4 w-4 flex-none text-slate-400 transition-transform",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen ? (
        <div
          id={menuId}
          className="absolute top-[calc(100%+6px)] right-0 left-0 z-30 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-2xl"
        >
          <p className="px-2.5 pt-1.5 pb-1 text-[9px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
            Choose your coach
          </p>
          {coaches.map((coach) => {
            const isSelected = coach.id === selectedCoach.id

            return (
              <button
                key={coach.id}
                type="button"
                onClick={() => onSelect(coach)}
                className={classNames(
                  "flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left transition",
                  isSelected ? "bg-blue-50" : "hover:bg-slate-50"
                )}
              >
                <span
                  className={classNames(
                    "flex h-7 w-7 flex-none items-center justify-center rounded-lg",
                    isSelected
                      ? "bg-blue-100 text-blue-600"
                      : "bg-slate-100 text-slate-500"
                  )}
                >
                  <SparkIcon className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[11px] font-semibold text-slate-900">
                    {coach.name}
                  </span>
                  <span className="block truncate text-[9px] text-slate-500">
                    {coach.bestFor}
                  </span>
                </span>
                {isSelected ? (
                  <span className="text-xs font-bold text-blue-500">✓</span>
                ) : null}
              </button>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

const SuggestionCard: React.FC<{
  suggestion: MobileCoachSuggestion
  onUse: () => void
}> = ({ suggestion, onUse }) => (
  <article className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
    <div className="flex items-center justify-between gap-2">
      <p className="text-[10px] font-semibold text-blue-600">
        {suggestion.title}
      </p>
      <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[8px] font-medium text-blue-600">
        Suggested
      </span>
    </div>
    <p className="mt-2 text-[11px] leading-relaxed text-slate-800">
      {suggestion.body}
    </p>
    <div className="mt-2.5 flex items-end justify-between gap-3 border-t border-slate-100 pt-2">
      <p className="text-[9px] leading-snug text-slate-400">
        {suggestion.reason}
      </p>
      <button
        type="button"
        onClick={onUse}
        className="flex-none rounded-lg bg-slate-900 px-2.5 py-1.5 text-[9px] font-semibold text-white transition hover:bg-blue-600 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
      >
        Use reply
      </button>
    </div>
  </article>
)

const MobileCoachDemo: React.FC<Props> = ({ scenario, className }) => {
  const draftId = React.useId()
  const [selectedCoachId, setSelectedCoachId] = React.useState<CoachId>(
    scenario.defaultCoach
  )
  const [isPickerOpen, setIsPickerOpen] = React.useState(false)
  const [activeView, setActiveView] = React.useState<CoachView>("suggestions")
  const [draft, setDraft] = React.useState("")
  const [sentMessages, setSentMessages] = React.useState<MobileCoachMessage[]>(
    []
  )
  const [activeQuestion, setActiveQuestion] = React.useState(
    scenario.questions[0]
  )

  const selectedCoach =
    coaches.find((coach) => coach.id === selectedCoachId) ?? coaches[0]
  const messages = [...scenario.messages, ...sentMessages]

  const selectCoach = (coach: CoachOption) => {
    setSelectedCoachId(coach.id)
    setIsPickerOpen(false)
  }

  const useSuggestion = (suggestion: MobileCoachSuggestion) => {
    setDraft(suggestion.body)
  }

  const sendDraft = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const body = draft.trim()
    if (!body) return

    setSentMessages((current) => [
      ...current,
      {
        id: `visitor-${current.length}`,
        body,
        direction: "outgoing",
        time: "Now",
      },
    ])
    setDraft("")
  }

  return (
    <div
      className={classNames(
        "cc-phone-glow relative mx-auto w-full max-w-[390px] rounded-[48px] p-3",
        className
      )}
    >
      <div className="relative overflow-hidden rounded-[38px] border-[6px] border-[#111827] bg-[#f6f7fb] shadow-[0_30px_80px_rgba(15,16,24,0.22)]">
        <div className="absolute top-2 left-1/2 z-40 h-5 w-24 -translate-x-1/2 rounded-full bg-[#111827]" />

        <div className="flex h-[720px] flex-col sm:h-[760px]">
          <div className="bg-[#075e5b] px-4 pt-8 pb-3 text-white">
            <div className="flex items-center gap-3">
              <span className="text-lg text-white/90" aria-hidden="true">
                ‹
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xs font-bold">
                {scenario.avatar}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold">
                  {scenario.contact}
                </span>
                <span className="block text-[10px] text-white/65">
                  {scenario.status}
                </span>
              </span>
              <span className="text-lg text-white/85" aria-hidden="true">
                ···
              </span>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto bg-[#efe9e1] px-3 py-4">
            <div className="space-y-2">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
            </div>
          </div>

          <div className="relative z-20 border-t border-slate-200 bg-[#f8fafc] px-3 pt-3">
            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
              <CoachPicker
                selectedCoach={selectedCoach}
                isOpen={isPickerOpen}
                onToggle={() => setIsPickerOpen((open) => !open)}
                onSelect={selectCoach}
              />
              <span className="rounded-xl bg-blue-50 px-2.5 py-3 text-[9px] font-medium whitespace-nowrap text-blue-600">
                {scenario.context}
              </span>
            </div>

            <div
              className="mt-3 grid grid-cols-2 rounded-xl bg-slate-200/70 p-1"
              role="tablist"
              aria-label="Coach tools"
            >
              {(["suggestions", "ask"] as const).map((view) => (
                <button
                  key={view}
                  type="button"
                  role="tab"
                  aria-selected={activeView === view}
                  onClick={() => setActiveView(view)}
                  className={classNames(
                    "rounded-lg px-3 py-1.5 text-[10px] font-semibold capitalize transition",
                    activeView === view
                      ? "bg-white text-blue-600 shadow-sm"
                      : "text-slate-500"
                  )}
                >
                  {view === "suggestions" ? "Quick suggestions" : "Ask coach"}
                </button>
              ))}
            </div>
          </div>

          <div className="h-[190px] overflow-y-auto bg-[#f8fafc] px-3 py-3">
            {activeView === "suggestions" ? (
              <div className="space-y-2">
                {scenario.suggestions.map((suggestion) => (
                  <SuggestionCard
                    key={suggestion.title}
                    suggestion={suggestion}
                    onUse={() => useSuggestion(suggestion)}
                  />
                ))}
              </div>
            ) : (
              <div>
                <div className="flex flex-wrap gap-1.5">
                  {scenario.questions.map((question) => (
                    <button
                      key={question.prompt}
                      type="button"
                      onClick={() => setActiveQuestion(question)}
                      className={classNames(
                        "rounded-full border px-2.5 py-1 text-[9px] transition",
                        activeQuestion.prompt === question.prompt
                          ? "border-blue-200 bg-blue-50 text-blue-700"
                          : "border-slate-200 bg-white text-slate-500 hover:border-blue-200"
                      )}
                    >
                      {question.prompt}
                    </button>
                  ))}
                </div>
                <div className="mt-3 rounded-xl border border-blue-100 bg-white p-3 shadow-sm">
                  <p className="flex items-center gap-1.5 text-[9px] font-semibold text-blue-600">
                    <SparkIcon className="h-3.5 w-3.5" />
                    {selectedCoach.name}
                  </p>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-700">
                    {activeQuestion.answer}
                  </p>
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={sendDraft}
            className="flex items-end gap-2 border-t border-slate-200 bg-white px-3 pt-2 pb-5"
          >
            <label className="sr-only" htmlFor={draftId}>
              Try a reply
            </label>
            <textarea
              id={draftId}
              aria-label="Try a reply"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              rows={2}
              placeholder="Choose a suggestion or write a reply…"
              className="min-h-11 flex-1 resize-none rounded-xl bg-slate-100 px-3 py-2 text-[11px] leading-snug text-slate-800 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              disabled={!draft.trim()}
              aria-label="Send reply"
              className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-blue-500 text-lg text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              ↑
            </button>
          </form>
        </div>
      </div>
      <p className="text-cc-subtle mt-5 text-center text-xs">
        Try it: switch coach, choose a suggestion, or ask a question.
      </p>
    </div>
  )
}

export default MobileCoachDemo
