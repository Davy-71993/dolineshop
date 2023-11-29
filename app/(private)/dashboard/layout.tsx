import { Input } from '@/components/ui/input'
import { ModeToggle } from '@/components/ui/mode'
import { BadgeDollarSign, BellIcon, LayoutDashboard, MessageSquare, Settings, ShoppingBag, ShoppingBasket, ShoppingCart, Store, User, UserCheck } from 'lucide-react'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className='w-full flex h-[95vh] space-x-5 rounded'>
        <div className="w-fit h-full rounded flex bg-secondary flex-col">
            <div className="border-b-2 px-10 py-2 text-center flex flex-col items-center space-y-3 text-2xl font-bold">
                <User size={60} />
                <h1 className='w-fit'>E.D.Wafula</h1>
            </div>

            <div className="p-3 w-full flex-1 flex flex-col">
                <Link href="/dashboard" className='p-2 my-1 flex space-x-3 rounded w-full h-fit hover:bg-primary-foreground transition-colors text-xl'>
                    <LayoutDashboard size={25} />
                    <h2>Dashboard</h2>
                </Link>
                <Link href="/dashboard/stores" className='p-2 my-1 flex space-x-3 rounded w-full h-fit hover:bg-primary-foreground transition-colors text-xl'>
                    <Store size={25} />
                    <h2>My Stores</h2>
                </Link>
                <Link href="/dashboard/products" className='p-2 my-1 flex space-x-3 rounded w-full h-fit hover:bg-primary-foreground transition-colors text-xl'>
                    <ShoppingBasket size={25} />
                    <h2>Products</h2>
                </Link>
                <Link href="/dashboard/purcheses" className='p-2 my-1 flex space-x-3 rounded w-full h-fit hover:bg-primary-foreground transition-colors text-xl'>
                    <ShoppingCart size={25} />
                    <h2>Purcheses</h2>
                </Link>
                <Link href="/dashboard/sales" className='p-2 my-1 align-top flex space-x-3 rounded w-full h-fit hover:bg-primary-foreground transition-colors text-xl'>
                    <BadgeDollarSign size={25} />
                    <h2>Sales</h2>
                </Link>
                <div className="flex-1 border-t-2 mt-5"></div>
                <Link href="/dashboard/settings" className='p-2 my-1 align-top flex space-x-3 rounded w-full h-fit hover:bg-primary-foreground transition-colors text-xl'>
                    <Settings size={25} />
                    <h2>Settings</h2>
                </Link>
                <Link href="/dashboard/profile" className='p-2 my-1 align-top flex space-x-3 rounded w-full h-fit hover:bg-primary-foreground transition-colors text-xl'>
                    <UserCheck size={25} />
                    <h2>Profile</h2>
                </Link>
                <div className="flex-1 border-t-2 mt-5"></div>
                <Link href="/" className='p-2 my-1 align-top flex space-x-3 rounded w-full h-fit hover:bg-primary-foreground transition-colors text-xl'>
                    <ShoppingBag size={25} />
                    <h2>DolineShop</h2>
                </Link>
                <div className="flex-1"></div>
            </div>
            
        </div>
        <div className="w-full h-full rounded flex flex-col">
            <div className='w-full px-5 py-2 mb-5 rounded flex justify-between  bg-secondary items-center'>
                <h4>Dashboard</h4>
                <div className="w-full max-w-sm flex justify-center items-center space-x-3">
                    <Input className="rounded-[2rem] mr-5" />
                    <MessageSquare size={35} />
                    <BellIcon size={35} />
                    <ModeToggle />
                </div>
            </div>
            <>
                { children }
            </>
        </div>
    </div>
  )
}