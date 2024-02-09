import { InvoicesTable } from '@/components/parts/table'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import React from 'react'

type Props = {
  
}

export default function ProductsPage({}: Props) {
  return (
    <ScrollArea className='flex-1 bg-secondary w-full rounded p-5'>
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold">Products</h2>
        <Link 
          href="/dashboard/products/create"
          className="rounded-full text-white font-bold right-5 px-5 py-3 bg-primary hover:bg-primary/75"
        >
            Add new Product
        </Link>
      </div>
      <InvoicesTable />
    </ScrollArea>
  )
}