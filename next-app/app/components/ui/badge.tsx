import type React from "react"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "secondary"
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = "default", className = "" }) => {
  const baseStyles = "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
  const variantStyles = {
    default: "bg-blue-100 text-blue-800",
    secondary: "bg-gray-100 text-gray-800",
  }

  return <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>{children}</span>
}

