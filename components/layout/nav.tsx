"use client"

import Link from "next/link"
import UserMenu from "../parts/user"
import { useSession } from "next-auth/react"

export default function AuthNav() {
  const session = useSession()

  if(session && session.status === 'authenticated'){
    return (
      <UserMenu />
    )
  }else if(session && session.status === 'unauthenticated'){
    return (
      <div className="flex space-x-3">
        <Link href="/login" className="border px-5 py-2 rounded hover:bg-primary-foreground">Login</Link>
        <Link href="/register" className="border px-5 py-2 rounded hover:bg-primary-foreground">Register</Link>
      </div>
    )
  }
  return null
}