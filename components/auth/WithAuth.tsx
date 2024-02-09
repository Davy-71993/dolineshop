"use client"


import { useSession } from 'next-auth/react'
import { redirect, useSearchParams } from 'next/navigation'
import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode
}


export default function WithAuth({ children }: Props) {

    // const next = params.next ? params.next : '/'
    const { status } = useSession()

    if(status === 'authenticated'){
        return (
            <>{ children }</>
        )
    } else if(status === 'unauthenticated'){
        return redirect('/login?n=myshop')
    }
    
    return (
        <div className="flex w-full h-[70vh] justify-center items-center text-4xl font-bold">Loading</div>
    )
}