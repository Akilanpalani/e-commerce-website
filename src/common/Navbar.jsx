import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MdClose, MdMenu } from 'react-icons/md';

// import { navLinks } from '../constant';
// import close from '../assets/close.svg';
// import menu from '../assets/menu.svg';
// import { Link } from "react-router-dom";

const ecommerce = require('../assets/images/ecommerce-logo.png');

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
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);

  const inputRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

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
    <nav className='w-full flex items-center p-6 sm:gap-6 md:gap-[70px] bg-[#f5f5f5]'>
      <div className='w-full flex items-center justify-between text-black'>
        <div className='flex items-center gap-4'>
          {/* <h1 className='font-bold text-3xl align-middle hover:cursor-pointer drop-shadow'>
            E-Commerce
          </h1> */}
          <Link to='/'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/1384/1384060.png'
              // src={ecommerce}
              alt='e-commerce'
              className='h-[10px] w-[10px] object-cover'
            />
          </Link>
        </div>
      </div>
      <div className='hidden md:flex'>
        {searchbar && (
          <>
            <input
              ref={inputRef}
              className='lg:w-[650px] p-2 rounded-md outline-none relative bg-gray-300'
              type='text'
              placeholder='Search for the Products...'
              onChange={(e) => onSearchQueryChange(e.target.value)}
            />
          </>
        )}
      </div>
      <div className='flex gap-8'>
        <button
          className='md:hidden text-[18px] cursor-pointer'
          onClick={toggleMobileMenu}
        >
          {isMobileMenu ? (
            <MdClose size={24} transform='rotate(180deg)' />
          ) : (
            <MdMenu size={24} transform='rotate(180deg)' />
          )}
        </button>
        {isMobileMenu && (
          <div className='md:hidden absolute top-[70px] right-6 z-10 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1 px-2' role='none'>
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
                              : `/category/${category.id}`
                          }
                          className='text-[18px] text-black hover:bg-[#f5f5f5] hover:rounded-md hover:text-black w-full block'
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
              <Link to={'/cart'} className='rounded-xl text-[18px]'>
                <button className='text-[18px] cursor-pointer flex '>
                  {/* <img
              src='https://img.icons8.com/ios/50/000000/shopping-cart.png'
              alt='cart'
              className='h-6 w-6 object-contain hover:cursor-pointer'
            /> */}
                  Cart
                  <span className='bg-gray-500 text-white rounded-full px-2 absolute top-24 right-32 transform translate-x-1/2 -translate-y-1/2'>
                    {cartItems.length}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        )}
        {!isMobileMenu && (
          <div className='hidden md:flex gap-8'>
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
                            : `/category/${category.id}`
                        }
                        className='text-[18px] text-black hover:bg-[#f5f5f5] hover:rounded-md hover:text-black w-full block'
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
            <Link to={'/cart'} className='rounded-xl text-[18px]'>
              <button className='text-[18px] cursor-pointer flex '>
                {/* <img
              src='https://img.icons8.com/ios/50/000000/shopping-cart.png'
              alt='cart'
              className='h-6 w-6 object-contain hover:cursor-pointer'
            /> */}
                Cart
                <span className='bg-gray-500 text-white rounded-full px-2 absolute top-6 right-6 transform translate-x-1/2 -translate-y-1/2'>
                  {cartItems.length}
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
