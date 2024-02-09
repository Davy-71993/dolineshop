"use client"

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

type props = {
    children: ReactNode,
    session: Session
}

export default function PageSession({ children, session } : props) {
  return (
    <SessionProvider session={session}>
        { children }
    </SessionProvider>
  )
}