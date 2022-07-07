import React from 'react';
import styled from 'styled-components';

export default function PropertyCard({ value: property }) {
  const pet = property.pets === 'Yes';
  const furnished = property.furnish === 'Furnished';
  const internet = property.internet === 'Yes';
  // console.log(pet);
  return (
    <Card>
      <div className='card'>
        <img src={property.coverImageUrl} alt='' className='card-img-top' />
        <div className='card-body'>
          <div className='flex-container'>
            <h4 className='card-rent'>${property.rent}/month</h4>
            <div className='feature'>
              <i className='feature-icon fas fa-ruler-combined' />
              <span className='ms-2 feature-title'>
                {property.areaSqm}m<sup>2</sup>
              </span>
            </div>
          </div>
          <h5 className='card-title'>{property.title}</h5>
          <p className='card-city'>{property.city}</p>
          <div className='card-features flex-container'>
            <div className='feature'>
              <i
                className={`feature-icon fas fa-dog ${
                  pet ? 'featureExists' : 'featureDoesNotExist'
                }`}
              />
              {/* <span className='feature-title'>no</span> */}
            </div>
            <div className='feature'>
              <i
                className={`feature-icon fas fa-chair ${
                  furnished ? 'featureExists' : 'featureDoesNotExist'
                }`}
              />
              {/* <span className='feature-title'>yes</span> */}
            </div>
            <div className='feature'>
              <i
                className={`feature-icon fas fa-wifi ${
                  internet ? 'featureExists' : 'featureDoesNotExist'
                }`}
              />
              {/* <span className='feature-title'></span> */}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

const Card = styled.div`
  .card {
    margin-bottom: 5rem;
    width: 20rem;
    height: 29rem;
    overflow: hidden;
    cursor: pointer;
    border: none;
  }

  .card-body {
    margin: 0 1rem 0 1rem;
  }

  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .featureExists {
    color: #0f0;
  }
  .featureDoesNotExist {
    color: #f00;
  }

  .card-img-top {
    // margin-bottom: 5rem;
    // width: 18rem;
    height: 18rem;
    transform: scale(1);
    transition: transform 0.7s ease;
  }

  .card-rent {
  }

  .card:hover {
    box-shadow: 3px 3px 10px 1px rgba(0, 0, 0, 0.25);
  }
  .card-img-top:hover {
    transform: scale(1.07);
  }
`;
