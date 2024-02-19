import {
  Carousel,
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import React from 'react';

// const logo = require("../assets/images/logo.jpg");
const banner = require('../assets/images/ecommerce-banner.webp');
const banner2 = require('../assets/images/ecommerce-banner2.png');
const CarouselBanner = () => {
  return (
    <div className='mx-7 md:mx-14 xl:mx-0 h-80 mt-8 '>
      <Carousel
        className='rounded-2xl xl:rounded-none'
        loop
        autoplay
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant='text'
            color='white'
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
              className='h-6 w-6'
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
            color='white'
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
              className='h-6 w-6'
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
        <div className='relative h-full w-full'>
          <img
            src={banner}
            alt='carousel1'
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/75'>
            <div className='w-3/4 text-center md:w-2/4'>
              <Typography
                variant='h1'
                color='white'
                className='mb-4 text-base sm:text-2xl md:text-3xl lg:text-4xl'
              >
                Exclusive Beauty Products
              </Typography>
              <Typography
                variant='lead'
                color='white'
                className='mb-5 sm:mb-7 md:mb-6 opacity-80 text-[14px] sm:text-sm md:text-sm lg:text-xl'
              >
                Discover a world of exquisite beauty products that elevate your
                skincare routine. Our carefully curated selection includes
                premium cosmetics, rejuvenating skincare, and luxurious
                fragrances. Indulge in the essence of beauty and transform your
                self-care experience.
              </Typography>
              <div className='flex justify-center'>
                <Button size='lg' color='white'>
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='relative h-full w-full'>
          <img
            src={banner2}
            alt='carousel1'
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 grid h-full w-full place-items-center bg-black/75'>
            <div className='w-3/4 text-center md:w-2/4'>
              <Typography
                variant='h1'
                color='white'
                className='mb-4 text-base sm:text-2xl md:text-3xl lg:text-4xl'
              >
                Exclusive Beauty Products
              </Typography>
              <Typography
                variant='lead'
                color='white'
                className='mb-5 sm:mb-7 md:mb-6 opacity-80 text-[14px] sm:text-sm md:text-sm lg:text-xl'
              >
                Discover a world of exquisite beauty products that elevate your
                skincare routine. Our carefully curated selection includes
                premium cosmetics, rejuvenating skincare, and luxurious
                fragrances. Indulge in the essence of beauty and transform your
                self-care experience.
              </Typography>
              <div className='flex justify-center'>
                <Button size='lg' color='white'>
                  Explore
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
