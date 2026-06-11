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
    <div className="fixed inset-0 z-[10002] flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="cc-modal-panel relative w-full max-w-md rounded-[24px] p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="text-cc-subtle hover:text-cc-primary absolute top-4 right-4 rounded-full p-1 transition-colors"
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
            <p className="chatcoach-label mb-3 font-mono text-[11px] tracking-[0.2em] uppercase">
              {type === "early-access" ? "Early access" : "Waitlist"}
            </p>
            <h2
              id={titleId}
              className="text-cc-primary text-2xl font-semibold tracking-tight"
            >
              {type === "early-access"
                ? "Request early access"
                : "Join the waitlist"}
            </h2>
            <p className="text-cc-muted mt-2 text-sm leading-relaxed">
              {type === "early-access"
                ? "One month free. We'll email install instructions after you sign up."
                : "We will notify you when Chat Coach launches on the App Store and Chrome Web Store."}
            </p>
          </div>

          {success ? (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
                <svg
                  className="h-7 w-7 text-emerald-500"
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
              <h3 className="text-cc-primary mb-2 text-lg font-medium">
                You are on the list
              </h3>
              <p className="text-cc-muted text-sm">
                {type === "early-access"
                  ? "Check your inbox for next steps."
                  : "We will notify you when we launch on the App Store and Chrome Web Store."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                id={nameLabelId}
                className="text-cc-muted block text-sm font-medium"
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
                  className="cc-input mt-2 w-full rounded-xl px-4 py-3 transition-colors"
                />
              </label>

              <label
                id={emailLabelId}
                className="text-cc-muted block text-sm font-medium"
              >
                Email <span className="text-red-500">*</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  aria-labelledby={emailLabelId}
                  placeholder="you@company.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="cc-input mt-2 w-full rounded-xl px-4 py-3 transition-colors"
                />
              </label>

              {error ? (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3">
                  <p className="text-sm text-red-600">{error}</p>
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
