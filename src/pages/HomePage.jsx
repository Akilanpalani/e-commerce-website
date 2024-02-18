import React, { useEffect, useState } from 'react';
import ProductCards from '../components/ProductCards';
import Pagination from '../components/Pagination';
import CarouselBanner from '../common/CarouselBanner';
import Loader from '../common/Loader';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentpage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(true);

  console.log(setCategory);
  const itemsPerPage = 10;

  useEffect(() => {
    const skip = currentPage * itemsPerPage;
    const url = `https://dummyjson.com/products?skip=${skip}&limit=${itemsPerPage}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
        setLoading(false);
      });
  }, [category, currentPage, itemsPerPage]);
  return (
    <>
      <CarouselBanner />
      {loading ? (
        <Loader />
      ) : (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
          <h1 className='text-2xl mb-4'>All Products</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:justify-center sm:items-center'>
            {/* Product Cards */}
            {products &&
              products.map((product) => (
                <ProductCards
                  key={product.id}
                  product={product}
                  loading={true}
                />
              ))}
          </div>
          <Pagination
            setCurrentpage={setCurrentpage}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </>
  );
};

export default HomePage;
