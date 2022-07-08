import React from 'react';
import styled from 'styled-components';

export const Pagination = ({
  propertiesPerPage,
  totalProperties,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalProperties / propertiesPerPage); i++) {
    pageNumbers.push(i);
  }
  // console.log(propertiesPerPage, totalProperties);
  // console.log(Math.ceil(totalProperties.length / propertiesPerPage));
  // console.log(totalProperties / propertiesPerPage);
  console.log(typeof pageNumbers.length);
  return (
    <Wrapper>
      <nav>
        <ul className='pagination'>
          {pageNumbers.map((page) => (
            <li
              key={page}
              className={`page-item ${
                currentPage === page ? 'active' : 'inactive'
              }`}
            >
              <a href='#' className='page-link' onClick={() => paginate(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ul {
    justify-content: center;
  }
`;

export default Pagination;
