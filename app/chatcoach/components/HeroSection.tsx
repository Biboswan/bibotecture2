"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "./Button"
import { useScrollAnimation } from "../hooks/useScrollAnimation"
import { WaitlistModal } from "./WaitlistModal"

const chatcoachImages = [
  "/images/chatcoach/chatcoach.png",
  "/images/chatcoach/chatcoach2.png",
  "/images/chatcoach/chatcoach3.png",
  "/images/chatcoach/chatcoach4.png",
]

export const HeroSection: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0.2)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % chatcoachImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={ref}
      className={`flex min-h-screen items-center justify-center px-4 py-20 transition-opacity duration-1000 sm:px-6 lg:px-8 lg:py-32 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative mx-auto w-full max-w-6xl">
        {/* Gradient background */}
        <div
          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 space-y-8 text-center">
          <h1 className="text-5xl leading-tight font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ace Conversations
            </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              with help from Digital Twins of Experts
            </span>
          </h1>

          <p className="mx-auto max-w-4xl text-xl leading-relaxed font-light text-gray-600 sm:text-2xl lg:text-3xl dark:text-gray-300">
            Improve your conversations instantly with real-time, EQ-driven
            coaching — and soon, choose Digital Twins modeled on negotiation
            experts, dating coaches, therapists, founders, and more. Powered by
            private models — your client data never leaves our secure ecosystem.
          </p>

          {/* Product Screenshot Carousel */}
          <div className="relative mt-12 mb-8 flex justify-center">
            <div className="relative mx-auto w-full max-w-5xl">
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white/5 shadow-2xl backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-900/5">
                <div className="relative aspect-video w-full">
                  {chatcoachImages.map((src, index) => (
                    <div
                      key={src}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentImageIndex
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Chat Coach interface screenshot ${index + 1} showing real-time communication guidance`}
                        width={1920}
                        height={1080}
                        className="h-full w-full object-contain"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 transform gap-2">
                  {chatcoachImages.map((src, index) => (
                    <button
                      key={src}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "w-8 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) =>
                        (prev - 1 + chatcoachImages.length) %
                        chatcoachImages.length
                    )
                  }
                  className="absolute top-1/2 left-4 z-10 -translate-y-1/2 transform rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/50"
                  aria-label="Previous image"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      (prev) => (prev + 1) % chatcoachImages.length
                    )
                  }
                  className="absolute top-1/2 right-4 z-10 -translate-y-1/2 transform rounded-full bg-white/10 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 dark:bg-gray-800/50 dark:hover:bg-gray-700/50"
                  aria-label="Next image"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center pt-8">
            <Button
              variant="primary"
              onClick={() => setIsModalOpen(true)}
              className="transform rounded-lg px-10 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Get Early Access (1 Month Free)
            </Button>
          </div>
        </div>
      </div>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type="early-access"
      />
    </section>
  )
}
