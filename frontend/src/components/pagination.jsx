import React from 'react';
const PaginationPage = ({ booksPerPage, totalBooks, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
  
      <div className='pagination'>
        
        {pageNumbers.map(number => (
          <div key={number} className='page-item'>
            <button onClick={() => paginate(number)}  >
              {number}
            </button>
          </div>
         ))}
      </div>
   
  );
};

export default PaginationPage;