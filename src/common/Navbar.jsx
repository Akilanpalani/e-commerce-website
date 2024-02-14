import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// import { navLinks } from '../constant';
// import close from '../assets/close.svg';
// import menu from '../assets/menu.svg';
// import { Link } from "react-router-dom";

const Navbar = ({ onSearchQueryChange, onCategorySelect }) => {
  const productsList = [
    { name: 'All' },
    { name: 'Smartphones', id: 'smartphones' },
    { name: 'Laptops', id: 'laptops' },
    { name: 'Motorcycle', id: 'motorcycle' },
    { name: 'Automotive', id: 'automotive' },
    { name: "Men's Shirts", id: 'mens-shirts' },
    { name: 'Sunglasses', id: 'sunglasses' },
    { name: 'Lighting', id: 'lighting' },
    { name: "Women's Jewellery", id: 'womens-jewellery' },
    { name: 'Tops', id: 'tops' },
    { name: 'Fragrances', id: 'fragrances' },
    { name: 'Skincare', id: 'skincare' },
    { name: 'Groceries', id: 'groceries' },
    { name: 'Home Decoration', id: 'home-decoration' },
    { name: 'Furniture', id: 'furniture' },
  ];
  // const [toggle, setToggle] = useState(false);
  // const [active, setActive] = useState('');
  const [searchbar, setSearchBar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');

  const inputRef = useRef(null);

  const handleCategorySelect = (category) => {
    // onCategorySelect(category);
    // setToggle(false);
    // setActive(category);
    // onSearchQueryChange(searchQuery);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (searchbar && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchbar]);

  return (
    <nav className='w-full flex items-center p-6 bg-white gap-[84px]'>
      <div className='w-full flex items-center justify-between text-black'>
        <div>
          <h1 className='font-bold text-3xl align-middle hover:cursor-pointer'>
            E-Commerce
          </h1>
        </div>
      </div>
      <div className='hidden md:flex'>
        {searchbar && (
          <>
            <input
              ref={inputRef}
              className='md:w-[650px] p-2 rounded-md outline-none relative bg-gray-300'
              type='text'
              placeholder='Search for the Products...'
              onChange={(e) => onSearchQueryChange(e.target.value)}
            />
          </>
        )}
      </div>
      <div className='flex gap-8'>
        <Link to={'/'} className='rounded-xl text-[18px]'>
          Home
        </Link>
        <button
          className='text-[18px] cursor-pointer flex flex-row items-center'
          id='menu-button'
          aria-expanded='true'
          aria-haspopup='true'
          onClick={() => setShowDropdown(!showDropdown)}
        >
          Category
          <svg
            className='-mr-1 h-5 w-5 text-gray-400'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
              clipRule='evenodd'
            />
          </svg>
        </button>
        {showDropdown && (
          <div
            className='absolute top-12 right-6 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
            role='menu'
            aria-orientation='vertical'
            aria-labelledby='menu-button'
            tabIndex='-1'
          >
            <div className='py-1 px-2' role='none'>
              {productsList.map((category) => (
                <div className='flex items-center' key={category.id}>
                  <Link
                    to={
                      category.name === 'All'
                        ? `/`
                        : `/category/${category.name}`
                    }
                    className='text-[18px] text-black hover:bg-gray-300 hover:rounded-md hover:text-black w-full block'
                    onClick={() => handleCategorySelect(category.name)}
                  >
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
        <p
          className='text-[18px] cursor-pointer'
          onClick={() => setSearchBar(!searchbar)}
        >
          Search
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
