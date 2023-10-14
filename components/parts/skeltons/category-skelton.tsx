import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

type Props = {}

export default function CategorySkelton({}: Props) {
  return (
    <>
        <Skeleton className='h-40 w-full rounded-2xl' />
        <Skeleton className='h-20 w-full rounded-full' />
    </>
  )
}