
export type Category = {
    id?: string,
    name?: string,
    image: string,
    title?: string
}

export type Brand = {
    id?: string,
    name?: string,
    image: string,
    title?: string
}

export type Product = {
    id?: string,
    title: string,
    quantity?: number,
    description: string,
    price: number,
    location?: string,
    rating?: number,
    image: string
}
