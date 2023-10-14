
import CategoryCard from '@/components/parts/category-card'
import { Categories } from '@/lib/dami-api'
import React from 'react'


export default function CategoriesPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          Categories.map((item, index) => (
            // Category card
            <CategoryCard item={item} key={index} />
          ))
        }
      </div>
  )
}