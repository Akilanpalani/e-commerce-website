import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCards from './ProductCards';
import Loader from '../common/Loader';

const CategoryPage = () => {
  const { name } = useParams();
  const [filterProducts, setFilterProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://dummyjson.com/products/category/${name}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFilterProducts(data.products);
        setLoading(false);
      });
  }, [name]);
  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5'>
      <h1 className='text-2xl mb-4'>Products in {name}</h1>
      {/* <div></div> */}
      {loading ? (
        <Loader />
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:justify-center sm:items-center'>
          {filterProducts.map((product) => (
            <ProductCards key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
