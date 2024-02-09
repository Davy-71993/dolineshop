

import BrandCard from '@/components/parts/brand-card'
import { Brands } from '@/lib/dami-api'

export default function BrandsPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          Brands.map((item, index) => (
            // Category card
            <BrandCard item={item} key={index} />
          ))
        }
      </div>
  )
}