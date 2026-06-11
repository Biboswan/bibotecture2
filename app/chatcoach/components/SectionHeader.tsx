import * as React from "react"

import classNames from "@/utils/classNames"

export interface Props {
  label: string
  title: React.ReactNode
  description?: string
  align?: "center" | "left"
  className?: string
}

const SectionHeader: React.FC<Props> = ({
  label,
  title,
  description,
  align = "center",
  className,
}) => {
  return (
    <div
      className={classNames(
        "mb-14 max-w-3xl sm:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-cyan-400/90 uppercase">
        {label}
      </p>
      <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p
          className={classNames(
            "mt-5 text-base leading-relaxed text-[rgb(160,160,170)] sm:text-lg",
            align === "center" && "mx-auto max-w-2xl"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader
