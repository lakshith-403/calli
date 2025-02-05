import type React from "react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode
}

export const Select: React.FC<SelectProps> & {
  Trigger: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>
  Content: React.FC<React.HTMLAttributes<HTMLDivElement>>
  Item: React.FC<React.OptionHTMLAttributes<HTMLOptionElement>>
} = ({ children, className = "", ...props }) => {
  return (
    <select
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      {...props}
    >
      {children}
    </select>
  )
}

Select.Trigger = ({ children, ...props }) => <button {...props}>{children}</button>
Select.Content = ({ children, ...props }) => <div {...props}>{children}</div>
Select.Item = ({ children, ...props }) => <option {...props}>{children}</option>

export const SelectTrigger = Select.Trigger
export const SelectContent = Select.Content
export const SelectItem = Select.Item
export const SelectValue = ({ children }: { children: React.ReactNode }) => <>{children}</>

