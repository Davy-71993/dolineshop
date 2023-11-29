"use client"

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageLayout({ children }:{
    children: ReactNode
}) {
  const pathname = usePathname()
  const isDashboard = pathname.includes('dashboard')
  return (
    <>
    <main className={clsx("min-h-screen p-5",{
      "container mt-24 lg:mt-28": !isDashboard
    })}>
        {children}
    </main>
    </>
  )
}