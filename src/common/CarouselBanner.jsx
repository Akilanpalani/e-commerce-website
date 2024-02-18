import {
  Carousel,
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import React from 'react';

// const logo = require("../assets/images/logo.jpg");
const CarouselBanner = () => {
  return (
    <div className='mx-7 md:mx-14 xl:mx-0 h-80 mt-8 '>
      <Carousel
        className='rounded-2xl xl:rounded-none'
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
            src='https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80'
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
                The Beauty of Nature
              </Typography>
              <Typography
                variant='lead'
                color='white'
                className='mb-5 sm:mb-7 md:mb-6 opacity-80 text-base sm:text-sm md:text-lg lg:text-xl'
              >
                It is not so much for its beauty that the forest makes a claim
                upon men&apos;s hearts, as for that subtle something, that
                quality of air that emanation from old trees, that so
                wonderfully changes and renews a weary spirit.
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
