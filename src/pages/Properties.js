import React from 'react';
import { useGlobalContext } from '../context';
import { PropertyCard } from '../components';
import styled from 'styled-components';
import FilterBox from '../components/FilterBox';

export default function Properties() {
  const { properties, filteredProperties } = useGlobalContext();
  console.log(properties);
  // console.log(filteredProperties);

  return (
    <>
      <Property>
        <div className='grid-container'>
          <div className='filter'>
            <FilterBox />
          </div>
          <div className='properties-container'>
            {filteredProperties.map((property) => (
              <div className='grid-item' key={property._id.$oid}>
                <PropertyCard value={property} />
              </div>
            ))}
          </div>
        </div>
      </Property>
    </>
  );
}

const Property = styled.div`
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 5fr;
    overflow: hidden;
  }
  .filter-container {
    height: 80vh;
    background-color: #fff;
  }
  .properties-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    overflow: hidden;
  }
  .grid-item {
    margin: auto;
  }

  @media (max-width: 1000px) {
    .grid-container{
    grid-template-columns: 100%;
    }
    .filter-container {
      display:none;
    }
  // @media (max-width: 1600px) {
  //   .grid-container {
  //     grid-template-columns: repeat(3, 1fr);
  //   }
  // }
  // @media (max-width: 1200px) {
  //   .grid-container {
  //     grid-template-columns: repeat(2, 1fr);
  //   }
  // }
  // @media (max-width: 809px) {
  //   .grid-container {
  //     grid-template-columns: repeat(1, 1fr);
  //   }
  // }
  // @media (max-width: 630px) {
  //   .grid-container {
  //     grid-template-columns: 1fr;
  //   }
  // }
`;
