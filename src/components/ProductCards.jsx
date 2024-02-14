import React from 'react';
import { Link } from 'react-router-dom';

const ProductCards = ({ searchQuery, product }) => {
  return (
    <Link to={`/${product.id}`}>
      <div
        key={product.id}
        className='max-w-[300px] rounded overflow-hidden shadow-lg hover:cursor-pointer hover:drop-shadow-2xl transition-transform hover:scale-105 border border-gray-300 bg-white'
      >
        <div className='h-[280px]'>
          <img
            className='w-full h-[250px] object-fill'
            src={product.images[0]}
            alt={product.title}
          />
        </div>
        <div className='pb-6 pl-3 bg-white'>
          <p className='text-gray-700 text-start tracking-wider text-xs pt-2 uppercase'>
            {product.category}
          </p>
          <p className='text-start font-bold text-[18px] pt-1'>
            {product.title}
          </p>
          {/* <p className='text-gray-700 text-base'>{product.description}</p> */}
          <div className='flex items-end '>
            <p>${product.price}</p>
            <p className='text-red-500 ml-2'>
              ({product.discountPercentage}%off)
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCards;
