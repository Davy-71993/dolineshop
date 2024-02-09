"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { ReactNode } from "react"

type Props={
    children: ReactNode
}

export default function WithOutAuth({ children }: Props) {
    const { status } = useSession()
    
    if(status === 'authenticated'){
        return redirect('/')
    }
    else if(status === 'unauthenticated'){
        return (
            <>
            { children }   
            </>
        )

    }
    else{
        return (
            <div className="h-[70vh] w-full flex justify-center items-center text-4xl font-bold">
                loading
            </div>
        )
    }
}