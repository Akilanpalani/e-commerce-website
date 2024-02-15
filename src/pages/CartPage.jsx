import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ProductCards from '../components/ProductCards';
import { clearCart } from '../redux/cartSlice';
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
      {cartItems && cartItems.length === 0 ? (
        <div>
          <p className='text-2xl text-center'>Cart is empty</p>
        </div>
      ) : (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
          <h2 className='text-2xl text-center font-bold'>Your Cart</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:justify-center sm:items-center mt-7'>
            {cartItems.map((product) => (
              <div className='max-w-[300px] flex flex-col'>
                <ProductCards key={product.id} product={product} />
                <button
                  onClick={() => dispatch(clearCart)}
                  className='bg-green-500 text-center'
                >
                  Clear Cart
                </button>
              </div>
            ))}
          </div>
          <div className='flex justify-center'>
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