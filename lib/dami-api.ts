import { Brand, Category, Product } from "./types";


const Categories : Category[] = [
    {
      id: 'xdhj56nm',
      name: 'Fashion',
      image: '/images/categories/fashion.jpg'
    }, {
      id: 'x098765rtgh',
      name: 'Appliances',
      image: '/images/categories/appliances.jpg'
    }, {
      id: '098ygv',
      name: 'Health & Beauty',
      image: '/images/categories/health-beauty.jpg'
    }, {
      id: 'ssrtgyhi',
      name: 'Home & Kitchen',
      image: '/images/categories/kitchen.jpg'
    }, {
      id: 'xhghj6nm',
      name: 'Waerables',
      image: '/images/categories/azn-watch.jpg'
    }, {
      id: 'xhghj6ewwnm',
      title: 'Cell Phones',
      image: '/images/categories/phones.webp'
    }, {
      id: 'xhftuiuwnm',
      title: 'Laptops',
      image: '/images/categories/laptops.webp'
    }, {
      id: 'xhfkjikpopuwnm',
      image: '/images/categories/desktops.webp',
      name: 'Computers'
    }
  ]

const Brands: Brand[] = [
  {
    id: 'xdhj56nm',
    image: '/images/brands/sumsang.png'
  }, 
]

const Products: Product[] = [
  {
    id: 'tfyhewi776',
    title: 'iPhone 12 pro max',
    quantity: 2,
    description: 'Brand new iPhones - fully unlocked and ready for use',
    price: 256.99,
    location: 'Acasia mall',
    rating: 3,
    image: '/images/products/iphone-12-pro.jpeg'
  },
  {
    id: 'tfyhewi776',
    title: 'Security Camersa',
    quantity: 2,
    description: 'Keep your home and office in view',
    price: 76.9,
    location: 'Acasia mall',
    rating: 3,
    image: '/images/products/security-cameras.webp'
  }
]
export {
    Categories,
    Brands,
    Products
}