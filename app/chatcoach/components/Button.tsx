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
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-[filter,opacity,background-color,border-color] duration-200 disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" && "chatcoach-btn-primary",
        variant === "secondary" &&
          "border-cc-strong bg-cc-elevated text-cc-primary shadow-cc-card hover:border-cc-accent hover:bg-cc-surface",
        variant === "ghost" && "text-cc-muted hover:text-cc-primary",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
