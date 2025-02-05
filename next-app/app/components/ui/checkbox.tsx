import type React from "react"

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, className = "", ...props }) => {
  return (
    <label className="inline-flex items-center">
      <input
        type="checkbox"
        className={`form-checkbox h-5 w-5 text-blue-600 dark:text-blue-500 ${className}`}
        {...props}
      />
      {label && <span className="ml-2 text-gray-700 dark:text-gray-300">{label}</span>}
    </label>
  )
}

