import React from 'react'
import ShopSkelton from './shopSkelton'

type Props = {}

export default function loading({}: Props) {
  return (
    <div className='grid grid-cols-3 grid-rows-2 flex-1 gap-5'>
       {
        [1,2,3,4,5,6].map((i)=>(
          <ShopSkelton key={i} />
        ))
       }
    </div>
  )
}