import { Carousel, IconButton } from '@material-tailwind/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCards from '../components/ProductCards';
import Loader from '../common/Loader';

const ProductDetails = () => {
  const params = useParams();
  const id = params.id;

  const [productsData, setProductsData] = useState({});
  const [releatedProducts, setReleatedProducts] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  // Product Details
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProductsData(data || {});
        setImages(data.images || []);
      });
  }, [id]);

  // Related Products
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${productsData.category}`)
      .then((res) => res.json())
      .then((data) => {
        setReleatedProducts(data.products || []);
        setLoading(false);
      });
  }, [productsData]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className='flex flex-col gap-19 mx-48'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-y-10 mt-14'>
            <Carousel
              className='bg-black max-w-[600px]'
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant='text'
                  color='black'
                  size='lg'
                  onClick={handlePrev}
                  className='!absolute top-2/4 left-4 -translate-y-2/4'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18'
                    />
                  </svg>
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant='text'
                  color='black'
                  size='lg'
                  onClick={handleNext}
                  className='!absolute top-2/4 !right-4 -translate-y-2/4'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </IconButton>
              )}
            >
              {images &&
                images.map((image) => (
                  <div key={image} className='max-h-[500px]'>
                    <img
                      src={image}
                      alt='product'
                      className='w-full h-full object-fill'
                    />
                  </div>
                ))}
            </Carousel>
            {/* Details */}
            <div className='md:ml-10'>
              <div className='flex flex-col gap-2'>
                <p className='text-sm font-semibold text-gray-500 uppercase'>
                  {productsData.category}
                </p>
                <h1 className='text-3xl font-bold'>{productsData.title}</h1>
                <div className='flex items-end gap-1'>
                  <p className='text-[24px] font-bold text-red-500'>
                    ${productsData.price}
                  </p>
                  <p className='text-sm text-gray-500 line-through'>
                    ({productsData.discountPercentage}% OFF)
                  </p>
                </div>
                <p>{productsData.description}</p>
                <p className='text-sm font-semibold text-gray-800 uppercase'>
                  Rating : {productsData.rating} / 5
                </p>
                <p className='text-sm font-semibold text-gray-800 uppercase'>
                  Brand : {productsData.brand}
                </p>
              </div>
              <hr className='border-black my-4' />
              {/* Add to cart */}
              <div className='flex items-center justify-start gap-5 my-6'>
                <div className='flex '>
                  {count <= 0 ? (
                    <button
                      className='p-2  w-[40px] border border-gray-500 rounded-lg'
                      onClick={() => setCount(count - 1)}
                      disabled
                    >
                      -
                    </button>
                  ) : (
                    <button
                      className='p-2  w-[40px] border border-gray-500 rounded-lg'
                      onClick={() => setCount(count - 1)}
                    >
                      -
                    </button>
                  )}

                  <p className='p-2 w-[40px] border border-gray-500 text-center rounded-lg'>
                    {count}
                  </p>
                  <button
                    className='p-2 w-[40px] border border-gray-500 rounded-lg'
                    onClick={() => setCount(count + 1)}
                  >
                    +
                  </button>
                </div>
                <button className='px-4 py-2 text-white bg-blue-200 rounded-md'>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          {/* Related Products */}
          <div className='mx-auto my-10'>
            <div className='my-10 text-3xl text-center font-bold'>
              <p className='text-3xl text-center font-bold'>Related Products</p>
            </div>
            <button className='mx-auto my-10'>
              {loading ? (
                <Loader />
              ) : (
                <div className='grid justify-between grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-7'>
                  {releatedProducts.map((product) => (
                    <ProductCards key={product.id} product={product} />
                  ))}
                </div>
              )}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
