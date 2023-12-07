import { Input } from '@/components/ui/input'
import { ModeToggle } from '@/components/ui/mode'
import { 
    BadgeDollarSign, 
    BellIcon, 
    LayoutDashboard, 
    MessageSquare, 
    Settings, 
    ShoppingBag, 
    ShoppingBasket, 
    ShoppingCart, 
    Store, User, UserCheck } from 'lucide-react'

import React, { ReactNode } from 'react'
import LinkButton from './LinkButton'

type Props = {
    children: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className='w-full flex h-[95vh] space-x-5 rounded'>
        <div className="w-fit h-full rounded flex bg-secondary flex-col transition-all duration-100">
            <div className="border-b-2 p-2 lg:px-10 lg:py-2 text-center flex flex-col items-center space-y-3 text-2xl font-bold">
                <User size={35} />
                <h1 className='w-fit hidden lg:block'>E.D.Wafula</h1>
            </div>

            <div className="p-3 w-full flex-1 flex flex-col">
                <LinkButton to='/dashboard' title='Dashboard' icon={<LayoutDashboard/>} />
                <LinkButton to='/dashboard/stores' title='My Stores' icon={<Store/>} />
                <LinkButton to='/dashboard/products' title='Products' icon={<ShoppingBasket/>} />
                <LinkButton to='/dashboard/transuctions' title='Transuctions' icon={<ShoppingCart/>} />
                
                <div className="flex-1 border-t-2 mt-5"></div>
                <LinkButton to='/dashboard/settings' title='Settings' icon={<Settings/>} />
                <LinkButton to='/dashboard/profile' title='Profile' icon={<UserCheck/>} />
                
                <div className="flex-1 border-t-2 mt-5"></div>
                <LinkButton to='/' title='DolineShop' icon={<ShoppingBag/>} />
                
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