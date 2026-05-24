"use client"

import type * as React from "react"
import Image from "next/image"
import { useRef, useState } from "react"

import FramerPageShell from "@/components/framer/framer-page-shell"
import { contactPageContent } from "@/lib/framer-site-content"
import ButtonFramer from "@/framer/button"
import ButtonFormFramer from "@/framer/button-form"
import SocialIconWithLinkFramer from "@/framer/social-icon-with-link"

type FramerComponent = React.ComponentType<Record<string, unknown>>

const Button = ButtonFramer.Responsive as FramerComponent
const ButtonForm = ButtonFormFramer.Responsive as FramerComponent
const SocialIconWithLink =
  SocialIconWithLinkFramer.Responsive as FramerComponent

const labelClassName = "mb-0.5 block text-[20px] leading-[150%] text-white/50"

const inputClassName =
  "w-full border-0 border-b border-[#858689] bg-transparent px-0 py-[10px] pr-6 text-[20px] leading-[1.5] font-normal text-white outline-none placeholder:text-white/70 focus:border-white/50"

const ContactArrow: React.FC = () => (
  <svg
    aria-hidden
    className="h-[62px] w-[63px] shrink-0 -rotate-90 text-white/60"
    fill="none"
    viewBox="0 0 116 115"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M114 0V113M114 113H0M114 113L1 0"
      stroke="currentColor"
      strokeWidth="0.5"
    />
  </svg>
)

const ContactLogo: React.FC = () => (
  <svg
    aria-hidden
    className="h-[72px] w-[44px] shrink-0"
    viewBox="0 0 44 72"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 40.762 29.458 L 35.085 33.549 L 40.94 38.023 C 42.854 39.491 44 41.799 44 44.211 L 44 51.392 C 44 53.877 42.802 56.226 40.791 57.694 L 21.115 72 L 7.799 63.15 L 29.32 49.044 L 29.32 54.009 L 15.339 63.179 L 21.006 66.944 L 38.339 54.341 C 39.279 53.655 39.841 52.552 39.841 51.392 L 39.841 44.211 C 39.841 43.086 39.308 42 38.408 41.314 L 29.321 34.372 L 28.119 33.453 L 29.321 32.584 L 38.329 26.099 C 39.279 25.41 39.841 24.31 39.842 23.139 L 39.842 17.043 C 39.842 15.752 39.143 14.54 38.02 13.889 L 22.358 4.822 L 4.159 15.82 L 4.159 51.242 L 14.009 44.911 L 14.009 29.04 L 29.319 19.573 L 29.319 24.452 L 18.168 31.348 L 18.168 47.167 L 0 58.858 L 0 13.483 L 22.318 0 L 40.109 10.301 C 42.51 11.695 44 14.277 44 17.042 L 44 23.138 C 44 25.635 42.791 28 40.762 29.456 Z"
      fill="white"
    />
  </svg>
)

const FramerContactPage: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const { social } = contactPageContent
  const [heroIntro, ctaIntro] = contactPageContent.intro

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (status === "loading") return

    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    if (!name || !email || !message) {
      setStatus("error")
      setErrorMessage("Please fill in all fields.")
      return
    }

    setStatus("loading")
    setErrorMessage(null)

    try {
      const response = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          message?: string
        } | null
        throw new Error(body?.message ?? "Failed to send message")
      }

      setStatus("success")
      form.reset()
      window.setTimeout(() => setStatus("idle"), 4000)
    } catch (error) {
      console.error("Contact form error:", error)
      setStatus("error")
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      )
    }
  }

  const buttonVariant =
    status === "loading"
      ? "Loading"
      : status === "success"
        ? "Success"
        : status === "error"
          ? "Error"
          : "Default"

  return (
    <FramerPageShell>
      <section className="framer-contact-page relative w-full overflow-visible">
        <div className="relative flex w-full flex-col items-center overflow-visible bg-[#060606] px-4 py-[60px] md:px-[30px]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[#0a0a0c]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 z-[1] h-[565px] w-[583px] overflow-visible md:h-[1032px] md:w-[1064px]"
          >
            <Image
              alt=""
              aria-hidden
              className="block h-full w-full object-cover object-top-right"
              fill
              priority
              sizes="(max-width: 768px) 583px, 1064px"
              src="/images/framer/contact-glow.png"
            />
          </div>
          <div
            aria-hidden
            className="framer-contact-grain pointer-events-none absolute inset-0 z-[1] opacity-[0.12] mix-blend-overlay"
          />

          <div className="relative z-[2] mx-auto flex w-full max-w-[1800px] flex-col gap-[100px] pt-[120px] md:pt-[160px]">
            <div className="flex w-full items-end gap-8 lg:gap-[72px]">
              <div className="hidden shrink-0 pb-4 lg:block">
                <ContactArrow />
              </div>

              <div className="flex w-full flex-col gap-8 lg:w-[80%]">
                <p className="text-[18px] leading-[160%] font-light text-white md:text-[20px]">
                  {contactPageContent.badge}
                </p>
                <h1 className="text-[62px] leading-[100%] font-normal tracking-[-0.03em] text-white md:text-[100px] xl:text-[120px]">
                  {contactPageContent.title}
                </h1>
                <p className="max-w-[760px] text-[18px] leading-[160%] font-light text-white/70 md:text-[20px]">
                  {heroIntro}
                </p>
              </div>
            </div>

            <div className="flex w-full flex-col justify-between gap-[60px] xl:flex-row xl:items-start">
              <div className="flex w-full flex-col gap-[60px] xl:w-[45%] xl:flex-row xl:gap-[96px]">
                <div className="flex flex-row justify-center gap-8 xl:flex-col xl:justify-start xl:gap-[22px]">
                  <SocialIconWithLink
                    icon={social.x.icon}
                    link={social.x.href}
                  />
                  <SocialIconWithLink
                    icon={social.github.icon}
                    link={social.github.href}
                  />
                  <SocialIconWithLink
                    icon={social.linkedin.icon}
                    link={social.linkedin.href}
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col gap-[60px]">
                  <div className="flex flex-col gap-8">
                    <p className="text-[18px] leading-[160%] font-light text-white md:text-[20px]">
                      {ctaIntro}
                    </p>
                    <div>
                      <Button
                        iconVisible={true}
                        link={contactPageContent.bookCallHref}
                        title="book a call"
                        variant="New tab"
                      />
                    </div>
                  </div>

                  <div className="flex w-full max-w-[73%] items-center gap-5">
                    <ContactLogo />
                    <p className="text-[22px] leading-[160%] tracking-[-0.02em] text-white md:text-[26px]">
                      Bibotecture
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col gap-8 xl:w-[45%] xl:pr-8">
                <h2 className="text-[24px] leading-[130%] tracking-[-0.03em] text-white md:text-[32px]">
                  {contactPageContent.formHeading}
                </h2>

                <form
                  ref={formRef}
                  className="flex flex-col gap-8"
                  onSubmit={handleSubmit}
                >
                  <label className="block">
                    <span className={labelClassName} id="contact-name-label">
                      Name
                    </span>
                    <input
                      aria-labelledby="contact-name-label"
                      className={inputClassName}
                      name="name"
                      placeholder="Jane Smith"
                      required
                      type="text"
                    />
                  </label>
                  <label className="block">
                    <span className={labelClassName} id="contact-email-label">
                      Email
                    </span>
                    <input
                      aria-labelledby="contact-email-label"
                      className={inputClassName}
                      name="email"
                      placeholder="janesmith@gmail.com"
                      required
                      type="email"
                    />
                  </label>
                  <label className="block">
                    <span className={labelClassName} id="contact-message-label">
                      Message
                    </span>
                    <textarea
                      aria-labelledby="contact-message-label"
                      className={`${inputClassName} min-h-[100px] resize-y`}
                      name="message"
                      placeholder="Leave a message"
                      required
                    />
                  </label>
                  <div className="pt-2">
                    <div
                      aria-disabled={status === "loading"}
                      className={`inline-flex ${status === "loading" ? "cursor-wait opacity-80" : "cursor-pointer"}`}
                      onClick={() => {
                        if (status !== "loading") {
                          formRef.current?.requestSubmit()
                        }
                      }}
                      onKeyDown={(event) => {
                        if (event.key === "Enter" || event.key === " ") {
                          event.preventDefault()
                          if (status !== "loading") {
                            formRef.current?.requestSubmit()
                          }
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      <ButtonForm
                        title={
                          status === "success"
                            ? "message sent"
                            : status === "loading"
                              ? "sending..."
                              : "send message"
                        }
                        variant={buttonVariant}
                        visible={true}
                      />
                    </div>
                    {status === "error" && errorMessage ? (
                      <p
                        aria-live="polite"
                        className="mt-3 text-[14px] text-red-300"
                      >
                        {errorMessage}
                      </p>
                    ) : null}
                    {status === "success" ? (
                      <p
                        aria-live="polite"
                        className="mt-3 text-[14px] text-white/70"
                      >
                        Thanks! We&apos;ll reply within 1-2 business days.
                      </p>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </FramerPageShell>
  )
}

export default FramerContactPage
