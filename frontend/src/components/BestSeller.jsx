import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

  const { products } = useContext(ShopContext)
  const [bestseller, setBestSeller] = useState([])

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller)
    setBestSeller(bestProduct.slice(0, 5))
  }, [products])

  return (
    <div className='my-16'>

      {/* ================= SECTION HEADER ================= */}
      <div className='text-center py-8'>

        <Title text1={'BEST'} text2={'SELLERS'} />

        <p className='max-w-2xl mx-auto mt-4 px-4 text-xs sm:text-sm md:text-base text-gray-500 leading-7'>
          Discover the styles our customers love most. From effortless
          everyday outfits to statement footwear, explore our most popular
          picks designed to bring comfort and confidence to every look.
        </p>

      </div>


      {/* ================= PRODUCTS ================= */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-10'>

        {bestseller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}

      </div>

    </div>
  )
}

export default BestSeller