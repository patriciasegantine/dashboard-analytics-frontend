'use client'

import Link from "next/link"
import Image from "next/image"
import { useAuth } from "@/contexts/auth"
import { AppRoutes } from "@/constants/routes"

export function Header() {
  const {user, signOut, isAuthenticated} = useAuth()
  
  return (
    <header className="fixed top-0 left-0 right-0 h-14 border-b bg-background">
      <div className="h-full px-6 flex items-center justify-between">
        <Link
          href={AppRoutes.HOME}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo.svg"
            alt="Nexus"
            width={24}
            height={24}
            className="rounded"
          />
          <span className="text-sm font-medium">Nexus</span>
        </Link>
        
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              {user?.name}
            </span>
            <button
              onClick={signOut}
              className="text-sm font-medium hover:text-foreground transition-colors"
            >
              Sign out
            </button>
          </div>
        ) : (
          <Link
            href={AppRoutes.LOGIN}
            className="text-sm font-medium hover:text-foreground transition-colors"
          >
            Sign in
          </Link>
        )}
      </div>
    </header>
  )
}
