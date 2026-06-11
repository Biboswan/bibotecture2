"use client"

import * as React from "react"

import classNames from "@/utils/classNames"

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
}

export const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  className,
  ...rest
}) => {
  return (
    <button
      className={classNames(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" &&
          "bg-white text-[rgb(10,10,12)] hover:bg-[rgb(235,235,240)]",
        variant === "secondary" &&
          "border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10",
        variant === "ghost" && "text-[rgb(160,160,170)] hover:text-white",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
