"use client"

import React from "react"

export const ChatCoachFooter: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 px-4 py-12 sm:px-6 lg:px-8 dark:border-gray-800">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="text-gray-600 dark:text-gray-400">
            <p className="font-semibold">Bibotecture Ltd © 2025</p>
            <p className="mt-2 text-sm">
              Chat Coach is a product built by Bibotecture Ltd (London).
            </p>
          </div>
          <div>
            <a
              href="https://bibotecture.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-cyan-500 transition-colors duration-200 hover:text-cyan-600 dark:text-purple-400 dark:hover:text-purple-300"
            >
              bibotecture.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
