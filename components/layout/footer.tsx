"use client"



import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Footer = () => {
  // hide the menu bar on the dashboard
  const pathName = usePathname()
  if(pathName.includes('dashboard')){
    return null
  }
  return (
    <div className="w-full py-3 mt-20 border-t-2 border-slate-300">
        <div className="container">
          <div className="sm:grid sm:grid-cols-2 py-10 md:grid-cols-3 lg:grid-cols-5 gap-5">
              <div className="col">
                  <h1 className="text-xl text-slate-500 hover:text-slate-700 font-bold mt-5"><Link href='/buy'>Buy</Link></h1>
                  <ul className='list-none text-sm text-slate-500 my-4'>
                    <li className='hover:text-slate-700 my-2'><Link href='/help/#how-to-buy'>How to buy</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Live virtual market</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Shops & Stores</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/register?as=buyer'>Registration</Link></li>
                  </ul>
              </div>
              <div className="col">
                  <h1 className="text-xl text-slate-500 hover:text-slate-700 font-bold mt-5"><Link href='/my-shop/sell'>Sell</Link></h1>
                  <ul className='list-none text-sm text-slate-500 my-4'>
                    <li className='hover:text-slate-700 my-2'><Link href='/help/#how-to-buy'>Start Selling</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Learn to Sell</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Create Store</Link></li>
                  </ul>
                  <div className="col">
                      <h1 className="text-xl text-slate-500 font-bold mt-5">Tools & Apps</h1>
                      <ul className='list-none text-sm text-slate-500 my-4'>
                        <li className='hover:text-slate-700 my-2'><Link href='/help/#how-to-buy'>Develpers</Link></li>
                        <li className='hover:text-slate-700 my-2'><Link href='/#'>Site map</Link></li>
                        <li className='hover:text-slate-700 my-2'><Link href='/#'>Mobile Apps</Link></li>
                      </ul>
                  </div>
              </div>
              <div className="col">
                  <h1 className="text-xl text-slate-500 font-bold mt-5">Stay Connected</h1>
                  <ul className='list-none text-sm text-slate-500 my-4'>
                    <li className='hover:text-slate-700 my-2'><Link href='/blog/#how-to-buy'>Blog</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Facebook</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Twitter</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Instagram</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>LinkedIn</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>YouTube</Link></li>
                  </ul>
              </div>
              <div className="col">
                  <h1 className="text-xl text-slate-500 hover:text-slate-700 font-bold mt-5"><Link href='/about'>About DolineShop</Link></h1>
                  <ul className='list-none text-sm text-slate-500 my-4'>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Company Info</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>News</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Investors</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Careers</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Government Relations</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Advertise with us</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Policies</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Verified Rights Owner program</Link></li>
                  </ul>
              </div>
              <div className="col">
                  <h1 className="text-xl text-slate-500 font-bold mt-5">Help & Contact</h1>
                  <ul className='list-none text-sm text-slate-500 my-4'>
                    <li className='hover:text-slate-700 my-2'><Link href='/blog/#how-to-buy'>Customer info center</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Contact us</Link></li>
                  </ul>
                  <div className="col">
                  <h1 className="text-xl text-slate-500 font-bold mt-5">Comunity</h1>
                  <ul className='list-none text-sm text-slate-500 my-4'>
                    <li className='hover:text-slate-700 my-2'><Link href='/help/#how-to-buy'>Announcements</Link></li>
                    <li className='hover:text-slate-700 my-2'><Link href='/#'>Discussion boards</Link></li>
                  </ul>
                </div>
              </div>
          </div>
          <h4 className="text-sm text-center text-slate-500">Copyright &copy; 2023 DolineShop Inc. All rights reserved</h4>
          
        </div>
    </div>
  )
}

export default Footer