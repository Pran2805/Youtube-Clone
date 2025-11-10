import { ReactNode } from 'react'
import HomeNavbar from '../components/home-navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import HomeSideBar from '../components/HomeSidebar'
interface HomeLayoutProps {
    children: ReactNode
}
export const HomeLayout = ({ children }: HomeLayoutProps) => {
    return (
        <SidebarProvider>
            <div className='w-full'>
                <HomeNavbar />
                <div className='flex min-h-screen pt-20'>
                    <HomeSideBar />
                    <main className='flex-1 overflow-y-auto'>
                    {children}
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}

