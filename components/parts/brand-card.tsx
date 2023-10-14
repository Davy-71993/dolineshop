
import { Brand } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  item: Brand
}


export default function BrandCard({item}: Props) {
  return (
    <Link href={`/b/${ item.id }`} className="h-fit hover:text-foreground rounded-[10px] w-full bg-primary-foreground flex flex-col space-y-4">
        <Image src={item.image} width={1000} height={10} alt='Brand Image' className={`h-auto w-full ${item.name ? 'rounded-t-[10px]' : 'rounded-[10px]'}`} />
        {item.name && <h6 className='font-bold text-center pb-5'>{ item.name }</h6>}
    </Link>
  )
}