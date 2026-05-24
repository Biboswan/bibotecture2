"use client"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "primary" | "outline"
  className?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  ...rest
}) => {
  const baseStyles =
    "flex items-center gap-2 px-8 py-3.5 font-medium uppercase rounded-md cursor-pointer"
  const variants = {
    primary:
      "bg-[linear-gradient(103deg,#00CAFE_1.74%,#A075FF_97.65%)] text-slate-950",
    outline: "border-b border-white text-white",
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}
