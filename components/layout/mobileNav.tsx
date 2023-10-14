'use client'

import { AlignJustify, X } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ModeToggle } from '../ui/mode'
import { useState } from 'react'

type Props = {}

export default function MobileNav({}: Props) {

    const [show, setShow] = useState(false)

  return (
    <div className='flex lg:hidden mt-1 sm:mt-3'>
        <Button variant={'outline'} onClick={ ()=>{ setShow(true) }}>
            <AlignJustify className='font-bold' />
        </Button>
        <div className={`bg-primary-foreground/90 border z-10 h-screen overflow-y-auto w-[70%] max-w-md ${show ? 'absolute' : 'hidden'} top-0 right-0`}>
            <div className="border-b px-3 py-2 flex justify-between items-center">
                <h4 className="text-lg">Menu</h4>
                <Button variant={'outline'} className='rounded-[10px]' onClick={ ()=>{ setShow(false) }}><X /></Button>
            </div>
            <div className="px-3 py-2 flex flex-col space-y-2">
                <Link href={'/login'}><Button onClick={ ()=>{ setShow(false) }} variant={'outline'} className='w-full rounded-[10px]'>Login</Button></Link>
                <Link href={'/register'}><Button onClick={ ()=>{ setShow(false) }} variant={'outline'} className='w-full rounded-[10px]'>Register</Button></Link>
                <ModeToggle/>
            </div>
        </div>
    </div>
  )
}