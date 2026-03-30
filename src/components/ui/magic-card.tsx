"use client"

import React, { useCallback, useEffect, useRef } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react"
import { cn } from "../../lib/utils"

interface MagicCardProps {
  children?: React.ReactNode
  className?: string
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
  gradientFrom?: string
  gradientTo?: string
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "rgba(0, 229, 255, 0.1)",
  gradientOpacity = 0.8,
  gradientFrom = "#00e5ff",
  gradientTo = "#7928ca",
}: MagicCardProps) {
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    },
    [mouseX, mouseY]
  )

  const handlePointerLeave = useCallback(() => {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }, [mouseX, gradientSize])

  return (
    <div
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        "group relative isolate overflow-hidden rounded-xl border border-white/10 bg-card",
        className
      )}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientFrom}, ${gradientTo}, transparent 100%)
          `,
          maskImage: "linear-gradient(transparent, transparent), radial-gradient(circle, #fff 100%, #fff 100%)",
          maskClip: "padding-box, border-box",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in, xor",
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  )
}
