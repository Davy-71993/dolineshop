
import { ScrollArea } from '@/components/ui/scroll-area'
import ShopCard from './shopcard'

export default function StoresPage() {
  return (
    <ScrollArea className='flex-1 pr-5'>
      <div className="grid grid-cols-3 gap-5">
       {
        [1,2,3,4,5,6, 7, 8, 9, 10, 11, 12, 13, 14].map((i)=>(
          <ShopCard key={i} />
        ))
       }
      </div>
    </ScrollArea>
  )
}