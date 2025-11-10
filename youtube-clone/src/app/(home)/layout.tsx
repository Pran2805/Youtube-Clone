import { HomeLayout } from '@/modules/home/ui/layouts/home-layout'
import  { ReactNode } from 'react'
interface LayoutProps {
    children: ReactNode
}
const layout = ({children}: LayoutProps) => {
  return (
    <HomeLayout>
      {children}
    </HomeLayout>
  )
}

export default layout
