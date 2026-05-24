"use client"

import React from "react"
import { useScrollAnimation } from "../hooks/useScrollAnimation"

export const PrivacySection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)

  return (
    <section
      ref={ref}
      className={`bg-gradient-to-b from-gray-50/50 to-transparent px-4 py-20 transition-opacity duration-1000 sm:px-6 lg:px-8 lg:py-32 dark:from-gray-900/50 dark:to-transparent ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-purple-500">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
            Your Privacy is{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Protected
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          <div
            className={`rounded-2xl border border-gray-200 bg-white/80 p-8 backdrop-blur-sm transition-all duration-700 dark:border-gray-700 dark:bg-gray-800/80 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "100ms" : "0ms",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-900/30">
                <svg
                  className="h-6 w-6 text-cyan-600 dark:text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                  Privacy-First Private Model
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  <div className="flex flex-col items-center rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-700/40">
                    <svg
                      className="mb-2 h-7 w-7 text-cyan-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Self-Hosted AI
                    </span>
                    <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      No external providers
                    </span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-700/40">
                    <svg
                      className="mb-2 h-7 w-7 text-cyan-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      E2E Encrypted
                    </span>
                    <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Fully protected data
                    </span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-700/40">
                    <svg
                      className="mb-2 h-7 w-7 text-cyan-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      GDPR Compliant
                    </span>
                    <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Audit-ready security
                    </span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-700/40">
                    <svg
                      className="mb-2 h-7 w-7 text-cyan-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Coach Dashboard
                    </span>
                    <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      You control training
                    </span>
                  </div>
                  <div className="flex flex-col items-center rounded-xl bg-gray-50 p-4 text-center dark:bg-gray-700/40">
                    <svg
                      className="mb-2 h-7 w-7 text-cyan-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Delete Anytime
                    </span>
                    <span className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Full data ownership
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`rounded-2xl border border-gray-200 bg-white/80 p-8 backdrop-blur-sm transition-all duration-700 dark:border-gray-700 dark:bg-gray-800/80 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "200ms" : "0ms",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                  Processed, Not Stored
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  When you ask for AI insights, your messages are processed
                  through our AI model to provide guidance. This data is
                  processed but never saved on our servers.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`rounded-2xl border border-gray-200 bg-white/80 p-8 backdrop-blur-sm transition-all duration-700 dark:border-gray-700 dark:bg-gray-800/80 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: isVisible ? "300ms" : "0ms",
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-900 dark:text-white">
                  You&apos;re in Control
                </h3>
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  You can clear your chat history at any time directly from your
                  device. Since everything is stored on your device, deleting it
                  removes it completely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
