import React from 'react';
import ReactPaginate from 'react-paginate';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Pagination = ({ setCurrentpage, currentPage, totalPages }) => {
  const handlePageClick = ({ selected }) => {
    setCurrentpage(selected);
  };
  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;
  return (
    <div>
      <ReactPaginate
        breakLabel={<span className='mr-4'>...</span>}
        nextLabel={
          showNextButton ? (
            <span className='w-10 h-10 flex items-center justify-center rounded-md'>
              <BsChevronRight />
            </span>
          ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={
          showPrevButton ? (
            <span className='w-10 h-10 flex items-center justify-center rounded-md'>
              <BsChevronLeft />
            </span>
          ) : null
        }
        containerClassName='flex items-center justify-center mt-8 mb-4'
        pageClassName='block border-2 border-solid border-gray hover:bg-gray-300 w-10 h-10 flex items-center justify-center rounded-md mr-4'
        activeClassName='bg-black text-white'
      />
    </div>
  );
};

export default Pagination;
