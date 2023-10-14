"use client"
import { Input } from '../ui/input'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Categories } from '@/lib/dami-api'
import { useState } from 'react'
import Link from 'next/link'

type Props = {
  className?: string
}

export default function SearchBar({ className }: Props) {

  const [searchQuery, setSearchQuery] = useState<string>()
  const [category, setCategory] = useState<string>()

  const prepareQuery = () => {
    if(!searchQuery && category) return `c=${category?.replace(/ /g, '+')}`
    if(searchQuery && !category) return `q=${searchQuery.replace(/ /g, '+')}`
    if(searchQuery && category) return `q=${searchQuery.replace(/ /g, '+')}&c=${category?.replace(/ /g, '+')}`
    return 
  }

  return (
    <div className={`${ className } w-full p-3`}>
        <Input className='w-2/3 border ring-0 focus:ring-0 active:ring-0' value={ searchQuery } onChange={ (e)=>{setSearchQuery(e.target.value)} } />
        <DropdownMenu>
            <DropdownMenuTrigger className='px-2 min-w-fit border hover:bg-primary-foreground hover:text-foreground'>{category || 'All Categories'}</DropdownMenuTrigger>
            <DropdownMenuContent className='p-3 border w-fit max-w-60 max-h-72 overflow-y-auto'>
                {
                  Categories.map((categoryItem, index)=>(
                    <DropdownMenuItem onClick={()=>{ setCategory(categoryItem.name || categoryItem.title) }} key={ index } className='p-2 rounded-[10px]'>
                      { categoryItem.name || categoryItem.title }
                    </DropdownMenuItem>
                  ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
        <div className="pl-2">
          <Link href={`/search${prepareQuery() ?  '?'+prepareQuery() : ''}`}><Button variant={'outline'}>Search</Button></Link>
        </div>
    </div>
  )
}