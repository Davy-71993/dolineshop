"use client"

import { Bell, LogOutIcon, MessageSquare, ShoppingBasket, User } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function UserMenu() {
  return (
    <div className='self-center mr-10'>
        <DropdownMenu>
            <DropdownMenuTrigger className='border rounded-full p-2 hover:bg-primary-foreground hover:text-foreground'>
                <User size={30} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className='border w-fit p-5'>
                <DropdownMenuItem className='px-4 hover:scale-110 transition-all ease-in-out py-2 '>
                    <Link href="" className="w-full flex">
                        <Bell size={18} />
                        <span className='ml-5'>Notifications</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='px-4 hover:scale-110 transition-all ease-in-out py-2'>
                    <Link href="" className="w-full flex">
                        <MessageSquare size={18} />
                        <span className='ml-5'>Messages</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='px-4 hover:scale-110 transition-all ease-in-out py-2 '>
                    <Link href="/dashboard" className="w-full flex">
                        <ShoppingBasket size={18} />
                        <span className='ml-5'>Dashboard</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='focus:bg-transparent'>
                    <div className="border-b w-full my-3"></div>
                </DropdownMenuItem>
                <DropdownMenuItem className='px-4 hover:scale-110 transition-all ease-in-out py-2 focus:bg-transparent'>
                    <Button size={'sm'} onClick={()=>signOut()} variant={'destructive'} className='w-full rounded hover:scale-110 transition-all ease-in-out'>
                        <LogOutIcon size={18} />
                        <span className='ml-5'>Logout</span>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}