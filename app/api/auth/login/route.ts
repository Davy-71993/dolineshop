import { NextResponse } from 'next/server'
 
function handler() {
  return new NextResponse(JSON.stringify({
    user: {
      name: 'David',
      email: 'davy.kyute@gmail.com',
      id: 'uyiwie12jn',
      image: '/images/gfgh.png'
    }
  }))
}

export  {handler as POST}