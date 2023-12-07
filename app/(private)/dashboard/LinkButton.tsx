"use client"


import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
    icon?: any,
    title?: string,
    to: string
}

export default function LinkButton({ title, icon, to }: Props) {
    const patheName = usePathname()
  return (
    <Link href={to} className={clsx(
        'p-2 my-1 flex lg:space-x-3 rounded w-full h-fit hover:bg-primary-foreground transition-colors text-xl',
        {'bg-primary-foreground': patheName === to}
    )}>
        { icon }
        <h2 className='hidden lg:block'>{ title }</h2>
    </Link>
  )
}