import {NextResponse, type NextRequest} from 'next/server'

/* 
For each request to the server we get the url and pass it as a header in the responce
**/
export default async function currentPathMiddleware  (request: NextRequest){
    console.log('Req: ', request.url)
    return NextResponse.next({
        request: {
            headers: new Headers({"x-url": request.url})
        }
    }) 
}