import ProductCard from "@/components/parts/product-card"
import { Products } from "@/lib/dami-api"
import { Product } from "@/lib/types"

export default function ShopingPage() {
  const products: Product[] = Products 
  return (
    <>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {
          Products.map((it, i) =>(
            <ProductCard item={it} key={i} />
          ))
        }
      </div>
    </>
  )
}