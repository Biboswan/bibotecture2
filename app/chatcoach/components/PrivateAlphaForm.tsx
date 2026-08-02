"use client"

import * as React from "react"

const AppleIcon: React.FC = () => (
  <svg
    className="h-4 w-4 flex-none"
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M17.05 12.54c-.03-2.84 2.32-4.22 2.43-4.29a5.22 5.22 0 0 0-4.12-2.23c-1.73-.18-3.41 1.04-4.29 1.04-.9 0-2.26-1.02-3.73-.99a5.46 5.46 0 0 0-4.59 2.8c-1.99 3.44-.51 8.5 1.4 11.28.96 1.37 2.08 2.91 3.55 2.85 1.44-.06 1.98-.92 3.72-.92 1.72 0 2.23.92 3.73.89 1.55-.03 2.53-1.37 3.45-2.75a11.27 11.27 0 0 0 1.58-3.23 4.89 4.89 0 0 1-3.13-4.45ZM14.23 4.18A4.95 4.95 0 0 0 15.37.61a5.06 5.06 0 0 0-3.28 1.7 4.72 4.72 0 0 0-1.17 3.44 4.18 4.18 0 0 0 3.31-1.57Z" />
  </svg>
)

const PrivateAlphaForm: React.FC = () => {
  const fieldId = React.useId()
  const [email, setEmail] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [message, setMessage] = React.useState<string | null>(null)
  const [isError, setIsError] = React.useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage(null)
    setIsError(false)

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Enter a valid email address")
      setIsError(true)
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, type: "early-access" }),
      })
      const data = (await response.json()) as { message?: string }

      if (!response.ok) {
        throw new Error(data.message || "Could not request access")
      }

      setEmail("")
      setMessage("You're on the private-alpha list")
    } catch (error) {
      setMessage(
        error instanceof Error ? error.message : "Could not request access"
      )
      setIsError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-[430px]">
      <form onSubmit={handleSubmit} className="relative w-full">
        <span className="text-cc-primary pointer-events-none absolute top-1/2 left-5 z-10 -translate-y-1/2">
          <AppleIcon />
        </span>
        <label className="sr-only" htmlFor={fieldId}>
          Email for private alpha access
        </label>
        <input
          id={fieldId}
          aria-label="Enter email for beta access"
          name="email"
          type="email"
          autoComplete="email"
          required
          disabled={isSubmitting}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={
            isSubmitting
              ? "Requesting access…"
              : "Join waitlist for limited beta access"
          }
          className="border-cc-strong bg-cc-elevated shadow-cc-card text-cc-primary min-h-14 w-full rounded-full border py-3 pr-5 pl-12 text-sm transition-colors outline-none placeholder:text-[rgb(var(--cc-text-faint))] focus:border-[rgba(99,102,241,0.45)] disabled:cursor-wait disabled:opacity-70"
        />
      </form>
      <div aria-live="polite" className="min-h-5 pt-1.5 text-left sm:px-2">
        {message ? (
          <p
            className={
              isError ? "text-xs text-red-600" : "text-xs text-emerald-600"
            }
          >
            {message}
          </p>
        ) : (
          <p className="text-cc-faint text-xs">
            Email will not be used for marketing purposes.
          </p>
        )}
      </div>
    </div>
  )
}

export default PrivateAlphaForm
