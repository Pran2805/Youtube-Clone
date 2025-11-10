"use client"

import { Button } from "@/components/ui/button"
import { UserCircle } from "lucide-react"
import { UserButton, SignInButton, SignedOut, SignedIn } from "@clerk/nextjs"
const AuthButton = () => {
  return (
    <>
    <SignedIn>
      <UserButton />
    </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border border-blue-500/40 rounded-full hover:bg-blue-50 transition-colors"
          >
            <UserCircle className="size-5" />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  )
}

export default AuthButton
