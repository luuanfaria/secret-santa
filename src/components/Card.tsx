import { ReactNode } from "react"

interface CardInterfaceProps {
  children: ReactNode
}

export function Card({ children }: CardInterfaceProps) {
  return (
    <div
      className="bg-theme-gray border-2 border-solid border-black box-border rounded-t-card p-80 flex flex-1 -mt-negative justify-center"
    >
      {children}
    </div>
  )
}