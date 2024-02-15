import React from 'react';

const Footer = () => {
  return (
    <div className=''>
      <div className='w-full mt-20 bg-gray-300 grid grid-cols-2 gap-5 p-4'>
        <div className='flex flex-col items-start justify-center'>
          <h1 className='text-xl font-medium'>About</h1>
          {/* <p>Made with ❤️</p> */}
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Refund Policy</p>
          <p>Contact</p>
          <p>FAQ</p>
          {/* <p>Copyright @ 2024</p> */}
        </div>
      </div>
      <div className='flex flex-row items-center justify-center bg-black h-10'>
        <h1 className='text-white'>Copyright @ 2024</h1>
      </div>
    </div>
  );
};

export default Footer;
