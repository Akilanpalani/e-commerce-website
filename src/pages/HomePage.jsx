import React , { useEffect, useState } from 'react'
import ProductCards from '../components/ProductCards'
import ProductDetails from './ProductDetails';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
  })
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:justify-center sm:items-center'>
        {/* Product Cards */}
        {products && products.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </div>
        <ProductDetails />
    </div>
  )
}

export default HomePage