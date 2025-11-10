import { ReactNode } from "react"

interface AuthLayout {
    children: ReactNode
}
const layout = ({children}: AuthLayout) => {
  return (
    <div className="flex items-center justify-center h-screen">
      {children}
    </div>
  )
}

export default layout
