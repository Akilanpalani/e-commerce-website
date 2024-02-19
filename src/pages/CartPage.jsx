import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductCards from '../components/ProductCards';
import { clearCart } from '../redux/cartSlice';
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5 mb-5'>
      {cartItems && cartItems.length === 0 ? (
        <div className='flex justify-center items-center h-screen'>
          <p className='text-2xl font-semibold sm:font-bold mb-4 text-center'>
            Cart is empty
          </p>
        </div>
      ) : (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
          <h2 className='text-2xl font-semibold sm:font-bold mb-4 text-center'>
            Your Cart
          </h2>
          <div className='flex flex-col items-center mx-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:justify-center sm:items-center mt-7'>
              {cartItems.map((product) => (
                <div className='max-w-[300px] flex flex-col'>
                  <ProductCards key={product.id} product={product} />
                  <button
                    onClick={() => dispatch(clearCart(product.id))}
                    className='bg-green-500 text-center'
                  >
                    Clear Item
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className='flex justify-center mt-10'>
            <button
              onClick={() => dispatch(clearCart())}
              className='rounded-md bg-red-500 text-center p-2'
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
