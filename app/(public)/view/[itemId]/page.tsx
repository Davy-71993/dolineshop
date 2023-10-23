import { Products } from "@/lib/dami-api";
import { Product } from "@/lib/types";
import Image from "next/image";

type Props = {
  params: any
}

export default function ItemPage({ params }: Props) {
  const products = Products
  const { itemId } = params
  const product = products[0]
  return (
    <div className='grid grid-cols-6'>
      <div className="col-span-6 sm:col-span-2">
        <Image 
          src={product?.image} 
          height={100} width={1000} 
          className="w-full h-auto"
          alt="Product Image" />
      </div>
      <div className="col-span-6 sm:col-span-4 lg:col-span-3 sm:pl-10 mt-5 sm:mt-0">
        <h4 className="text-2xl font-bold">{ product?.title }</h4>
        <p className="text-base">{ product?.description }</p>
        <h4 className="text-4xl font-bold my-3">$ { product?.price }</h4>
        <p className="border p-3 text-center my-5">
          Market price  $ 
          <span className="ml-10">{ product?.price - 10} - { product?.price + 10 }</span>
        </p>
        <div className="bg-primary-foreground p-5 flex">
          <Image src='/images/gfgh.png' alt="Seller Image" width={100} height={10}  />
          <div className="pl-3">
            <h4 className="text-lg">Top Phone Seller</h4>
          </div>
        </div>
      </div>
      <div className="col-span-6 mt-5 border p-5 w-full lg:col-span-1"></div>
    </div>
  )
}