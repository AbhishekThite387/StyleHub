import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext)

  return (
    <Link
      className='text-gray-700 cursor-pointer group'
      to={`/product/${id}`}
    >

      {/* Product Image */}
      <div className='overflow-hidden rounded-md bg-gray-50 aspect-[4/5]'>
        <img
          className='w-full h-full object-cover group-hover:scale-105 transition ease-in-out duration-500'
          src={image[0]}
          alt={name}
        />
      </div>

      {/* Product Details */}
      <div className='pt-3'>
        <p className='pb-1 text-sm group-hover:text-pink-400 transition-colors line-clamp-1'>
          {name}
        </p>

        <p className='text-sm font-medium'>
          {currency}{price}
        </p>
      </div>

    </Link>
  )
}

export default ProductItem