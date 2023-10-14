import BrandCard from '@/components/parts/brand-card'
import Carousel from '@/components/parts/carousel'
import CategoryCard from '@/components/parts/category-card'
import ProductCard from '@/components/parts/product-card'
import { Brands, Categories, Products } from '@/lib/dami-api'
import Link from 'next/link'


/**
 * The home landing page.
 * @returns JSX Element
 */
export default function Home() {
  return (
    <>
      <Carousel />
      <div className="flex justify-between items-center py-2 mt-3">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Top Categories.</h1>
        <Link href='/c'><h1 className="text-lg sm:text-xl lg:text-2xl font-bold hover:text-foreground">Find all.</h1></Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          Categories.map((item, index) => (
            // Category card
            <CategoryCard item={item} key={index} />
          ))
        }
      </div>
      <div className="flex justify-between items-center py-2 mt-3">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Trending Brands.</h1>
        <Link href='/b'><h1 className="text-lg sm:text-xl lg:text-2xl font-bold hover:text-foreground">All brands.</h1></Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          Brands.map((item, index) => (
            // Brand card
            <BrandCard item={item} key={index} />
          ))
        }
      </div>
      <div className="flex justify-between items-center py-2 mt-3">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">Top rating items.</h1>
        <Link href='/view'><h1 className="text-lg sm:text-xl lg:text-2xl font-bold hover:text-foreground">Start shopping.</h1></Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          Products.map((item, index) => (
            // Brand card
            <ProductCard item={item}  key={index}/>
          ))
        }
      </div>
      
    </>
  )
}
