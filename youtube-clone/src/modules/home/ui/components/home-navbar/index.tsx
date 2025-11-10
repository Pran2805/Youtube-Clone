import { SidebarTrigger } from '@/components/ui/sidebar'
import { PlayCircle, Search } from 'lucide-react'
import Link from 'next/link'
import SearchInput from './SearchInput'
import AuthButton from '@/modules/auth/ui/components/AuthButton'
import { Button } from '@/components/ui/button'

const HomeNavbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white h-16 flex items-center justify-between px-3 sm:px-4 shadow-sm">
      {/* LEFT — Logo */}
      <div className="flex items-center gap-3 shrink-0">
        <SidebarTrigger />
        <Link href="/" className="flex items-center gap-2 p-2">
          <PlayCircle className="size-9 text-white bg-rose-600 rounded-lg p-1.5" />
          <span className="hidden sm:inline text-lg sm:text-xl font-semibold tracking-tight">
            {process.env.NEXT_PUBLIC_PROJECT_NAME || 'Streamify'}
          </span>
        </Link>
      </div>

      {/* CENTER — Search (hidden on mobile) */}
      <div className="flex-1 hidden md:flex justify-center">
        <SearchInput />
      </div>

      {/* RIGHT — Auth + Mobile Search Icon */}
      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        {/* Mobile Search Button */}
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          aria-label="Search"
        >
          <Search className="size-5 text-gray-600" />
        </Button>

        {/* Auth */}
        <AuthButton />
      </div>
    </header>
  )
}

export default HomeNavbar
