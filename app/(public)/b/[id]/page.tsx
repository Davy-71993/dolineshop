import ProductCard from "@/components/parts/product-card";
import { Products } from "@/lib/dami-api";

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          Products.map((item, index) => (
            // Product card
            <ProductCard item={item} key={index} />
          ))
        }
      </div>
  )
}