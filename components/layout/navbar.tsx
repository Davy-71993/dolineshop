import React from 'react'
import { NavMenu } from './nav'
import Link from 'next/link'
import SearchBar from '../parts/searchBar'
import MobileNav from './mobileNav'

export default function Navbar() {
  return (
    <div className='w-full py-3 shadow-md z-20 fixed top-0 bg-inherit left-0'>
      <div className="flex space-x-5 justify-between container">
        <Link href="/" className="logo hover:text-foreground">
          <h1 className="font-bold text-2xl sm:text-4xl text-center">DolineShop</h1>
          <h6 className="font-[400] text-sm sm:text-base -mt-2 text-center">Buy & Sell easily.</h6>
        </Link>
        <SearchBar className='hidden md:flex ' />
        <MobileNav />
        <NavMenu />
      </div>
    </div>
  )
}