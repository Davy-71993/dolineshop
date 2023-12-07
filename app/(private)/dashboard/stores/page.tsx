
import { ScrollArea } from '@/components/ui/scroll-area'
import ShopCard from './shopcard'
import Link from 'next/link'

export default function StoresPage() {
  return (
    <ScrollArea className='flex-1 relative'>
      <div className="w-full grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
       {
        [1,2,3,4,5,6, 7, 8, 9, 10, 11, 12, 13, 14].map((i)=>(
          <ShopCard key={i} />
        ))
       }
      </div>
       <Link href="/dashboard/stores/create" className="absolute bottom-5 rounded-full text-white font-bold right-5 px-5 py-3 bg-primary">Add Store</Link>
    </ScrollArea>
  )
}