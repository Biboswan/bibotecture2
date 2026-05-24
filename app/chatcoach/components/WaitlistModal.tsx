"use client"

import React, { useState, useEffect } from "react"
import { Button } from "./Button"

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
  type: "waitlist" | "early-access"
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose,
  type,
}) => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setEmail("")
      setName("")
      setError(null)
      setSuccess(false)
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
      // Auto-close after 2 seconds on success
      setTimeout(() => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-md transform rounded-2xl bg-white p-8 shadow-2xl transition-all dark:bg-gray-900"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="Close"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="space-y-6">
          <div>
            <h2
              id={titleId}
              className="mb-2 text-3xl font-bold text-gray-900 dark:text-white"
            >
              {type === "early-access"
                ? "Get Early Access"
                : "Join the Waitlist"}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {type === "early-access"
                ? "Be among the first to experience Chat Coach with 1 month free."
                : "We'll notify you when Chat Coach launches."}
            </p>
          </div>

          {success ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <svg
                  className="h-8 w-8 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                You&apos;re in! 🎉
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {type === "early-access"
                  ? "We'll be in touch soon with your early access."
                  : "We'll notify you when we launch."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                id={nameLabelId}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name (optional)
                <input
                  id="name"
                  name="name"
                  type="text"
                  aria-labelledby={nameLabelId}
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:ring-2 focus:ring-cyan-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:ring-purple-500"
                />
              </label>

              <label
                id={emailLabelId}
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email <span className="text-red-500">*</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  aria-labelledby={emailLabelId}
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder-gray-400 transition-all focus:ring-2 focus:ring-cyan-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:focus:ring-purple-500"
                />
              </label>

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-800 dark:bg-red-900/20">
                  <p className="text-sm text-red-600 dark:text-red-400">
                    {error}
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                className="w-full py-4 text-lg"
              >
                {isSubmitting
                  ? "Submitting..."
                  : type === "early-access"
                    ? "Claim Early Access"
                    : "Join Waitlist"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
