"use client"

import * as React from "react"

import { Button } from "./Button"

export interface Props {
  isOpen: boolean
  onClose: () => void
  type: "waitlist" | "early-access"
}

export const WaitlistModal: React.FC<Props> = ({ isOpen, onClose, type }) => {
  const [email, setEmail] = React.useState("")
  const [name, setName] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [success, setSuccess] = React.useState(false)

  React.useEffect(() => {
    if (isOpen) {
      setEmail("")
      setName("")
      setError(null)
      setSuccess(false)
    }
  }, [isOpen])

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError(null)
    setSuccess(false)

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name: name.trim() || undefined, type }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message || "Failed to join waitlist")
      }

      setSuccess(true)
      window.setTimeout(() => {
        onClose()
      }, 2000)
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  const titleId = "waitlist-modal-title"
  const nameLabelId = "waitlist-name-label"
  const emailLabelId = "waitlist-email-label"

  return (
    <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md rounded-[24px] border border-white/10 bg-[rgb(16,16,20)] p-8 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-1 text-[rgb(120,120,130)] transition-colors hover:text-white"
          aria-label="Close"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="space-y-6">
          <div>
            <p className="mb-3 font-mono text-[11px] tracking-[0.2em] text-cyan-400/90 uppercase">
              {type === "early-access" ? "Early access" : "Waitlist"}
            </p>
            <h2
              id={titleId}
              className="text-2xl font-semibold tracking-tight text-white"
            >
              {type === "early-access"
                ? "Request early access"
                : "Join the waitlist"}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[rgb(160,160,170)]">
              {type === "early-access"
                ? "Join early access for the iOS app and Chrome extension — one month free. We will send install details to your email."
                : "We will notify you when Chat Coach launches on the App Store and Chrome Web Store."}
            </p>
          </div>

          {success ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                <svg
                  className="h-7 w-7 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-medium text-white">
                You are on the list
              </h3>
              <p className="text-sm text-[rgb(160,160,170)]">
                {type === "early-access"
                  ? "Check your inbox for TestFlight and Chrome extension access."
                  : "We will notify you when we launch on the App Store and Chrome Web Store."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                id={nameLabelId}
                className="block text-sm font-medium text-[rgb(180,180,190)]"
              >
                Name (optional)
                <input
                  id="name"
                  name="name"
                  type="text"
                  aria-labelledby={nameLabelId}
                  placeholder="Your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[rgb(10,10,12)] px-4 py-3 text-white placeholder-[rgb(100,100,110)] transition-colors focus:border-cyan-400/40 focus:outline-none"
                />
              </label>

              <label
                id={emailLabelId}
                className="block text-sm font-medium text-[rgb(180,180,190)]"
              >
                Email <span className="text-red-400">*</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  aria-labelledby={emailLabelId}
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[rgb(10,10,12)] px-4 py-3 text-white placeholder-[rgb(100,100,110)] transition-colors focus:border-cyan-400/40 focus:outline-none"
                />
              </label>

              {error ? (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3">
                  <p className="text-sm text-red-300">{error}</p>
                </div>
              ) : null}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5"
              >
                {isSubmitting
                  ? "Submitting..."
                  : type === "early-access"
                    ? "Claim early access"
                    : "Join waitlist"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
