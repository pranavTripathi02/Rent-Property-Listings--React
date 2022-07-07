import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import styled from 'styled-components';

export default function FilterBox() {
  const { properties, filteredProperties, filters, setFilters } =
    useGlobalContext();

  const uniqueCities = [
    ...new Set(
      properties.map((item, index) => {
        return item['city'];
      })
    ),
  ].map((item, index) => {
    return {
      city: item,
      index,
    };
  });
  const minPrice = Math.min(...properties.map((item) => item.rent));
  const maxPrice = Math.max(...properties.map((item) => item.rent));
  const minArea = Math.min(...properties.map((item) => item.areaSqm));
  const maxArea = Math.max(...properties.map((item) => item.areaSqm));

  const [checked, setChecked] = useState([]);

  const handleRangeChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFilters({ ...filters, [name]: value });
  };

  const handleToggle = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    const isTrue = value === 'true';
    // console.log(typeof value, name);
    // console.log(typeof value);
    setFilters({ ...filters, [name]: !isTrue });
  };

  const handleCityCheckbox = (index) => {
    console.log(filters);
    const checkIndex = checked.indexOf(uniqueCities[index].city);
    const newChecked = [...checked];
    if (checkIndex === -1) {
      newChecked.push(uniqueCities[index].city);
    } else {
      newChecked.splice(checkIndex, 1);
    }
    // console.log('handlecitycheck', newChecked, filters);
    setChecked(newChecked);
    setFilters({ ...filters, city: newChecked });
    // console.log(index, filters);
  };

  return (
    <Wrapper>
      <section className='filter-container'>
        <form action='' className='filter-form'>
          <div className='form-group'>
            <label htmlFor='cities' className='city-filter-label'>
              Choose your city
            </label>
            <div className='checkbox-container'>
              {uniqueCities.map((item) => (
                <div className='checkbox-item' key={item.index}>
                  <label className='city-label'>
                    <input
                      id='city'
                      name='city'
                      type='checkbox'
                      className='filter-checkbox city-checkbox'
                      value={item.city}
                      onChange={() => handleCityCheckbox(item.index)}
                      checked={checked.indexOf(item.city) === -1 ? false : true}
                    />
                    {item.city}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='priceRange'>
              Select maximum rent: {filters.rent}
            </label>
            <div className='price-range' id='priceRange'>
              <input
                type='range'
                className='form-range'
                id='rent'
                name='rent'
                min='0'
                max={maxPrice}
                value={filters.rent}
                steps='50'
                onChange={(e) => handleRangeChange(e)}
                // value={filters.price}
              />
              {/* <span>{filters.rent}</span> */}
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor='priceRange'>
              Select minimum area: {filters.area}
            </label>
            <div className='area-range' id='area'>
              <input
                type='range'
                className='form-range'
                id='area'
                name='area'
                min='0'
                max={maxArea}
                value={filters.area}
                steps='50'
                onChange={(e) => handleRangeChange(e)}
                // value={filters.price}
              />
              {/* <span>{filters.rent}</span> */}
            </div>
          </div>
          <div className='form-group'>
            <div className='checkbox-item'>
              <label>
                <input
                  id='pets'
                  name='pets'
                  type='checkbox'
                  className='filter-checkbox'
                  value={filters.pets}
                  onChange={(e) => handleToggle(e)}
                  checked={filters.pets ? true : false}
                />
                Pet friendly
              </label>
            </div>
          </div>
          <div className='form-group'>
            <div className='checkbox-item'>
              <label>
                <input
                  id='furnish'
                  name='furnished'
                  type='checkbox'
                  className='filter-checkbox'
                  value={filters.furnished}
                  onChange={(e) => handleToggle(e)}
                  checked={filters.furnished ? true : false}
                />
                furnished
              </label>
            </div>
          </div>
        </form>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .checkbox-container {
    // position: fixed;
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    height: 30rem;
    width: 15rem;
    overflow-y: scroll;
    margin-top: 1rem;
  }
  .filter-form {
    display: flex;
    flex-direction: column;
    justify-contents: center;
  }
  .form-group {
    // border: 2px solid #ccc;
    padding: 1rem;
    background-color: #fff;
  }
  .city-label {
    display: block;
  }
  .city-label:hover {
    background-color: #00aeff;
    color: #fff;
  }
  .checkbox-item {
    margin: 5px 0;
    // border: 1px solid red;
  }
  .filter-checkbox {
    display: inline-block;
    margin: 0 5px;
  }
  .form-range {
  }
  .price-range {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .form-group {
    // padding-bottom:
    border-bottom: 3px solid #ececec;
  }
`;
