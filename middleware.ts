import { type NextRequest,NextResponse } from "next/server"

const pageUrl = (req: NextRequest) =>{
    return req.url
}

const middlewares = async(req: NextRequest) => {
    return NextResponse.next({
        headers: new Headers({
            "url": pageUrl(req)
        })
    })
}

export {middlewares as middleware}