import React from 'react';

const Footer = () => {
  return (
    <div className='hidden md:block'>
      <div>
        <div className='w-full bg-[#f5f5f5] grid sm:grid-cols-2 md:grid-cols-3 gap-5 p-4'>
          <div className='flex flex-col items-start justify-center'>
            <h1 className='sm:text-lg md:text-xl lg:text-2xl font-medium'>
              Contact Us
            </h1>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Refund Policy</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
          <div className='flex flex-col sm:items-start md:items-center sm:justify-start md:justify-center'>
            <h1 className='sm:text-lg md:text-xl lg:text-2xl font-bold'>
              BEAUTIFLIE
            </h1>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Refund Policy</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
          <div className='flex flex-col sm:items-start md:items-end justify-center'>
            <h1 className='sm:text-lg md:text-xl lg:text-2xl font-medium'>
              Best Products
            </h1>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
            <p>Refund Policy</p>
            <p>Contact</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className='flex flex-row items-center justify-center bg-black h-10'>
          <h1 className='text-white'>Copyright @ 2024</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
