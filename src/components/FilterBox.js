import React, { useState } from 'react';
import { useGlobalContext } from '../context';
import styled from 'styled-components';

export default function FilterBox() {
  const { properties, filters, setFilters } = useGlobalContext();

  // const getUniqueValues = (array, value) => {
  //   return [...new Set(array.map((item) => item[value]))];
  // };

  // console.log(properties);

  const uniqueCities = [
    ...new Set(
      properties.map((item, index) => {
        return item['city'];
      })
    ),
  ].map((item, index) => {
    // console.log(item);
    return {
      city: item,
      index,
    };
  });
  // console.log('cities: ', uniqueCities);

  const [checked, setChecked] = useState([]);

  const handleCityCheckbox = (index) => {
    console.log(index, filters);
    const checkIndex = checked.indexOf(uniqueCities[index].city);
    const newChecked = [...checked];
    if (checkIndex === -1) {
      newChecked.push(uniqueCities[index].city);
    } else {
      newChecked.splice(checkIndex, 1);
    }
    console.log('handlecitycheck', newChecked, filters);
    setChecked(newChecked);
    setFilters({ ...filters, city: checked });
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
                  <label>
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
        </form>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .checkbox-container {
    // position: fixed;
    border: 2px solid #eee;
    height: 10rem;
    width: 15rem;
    overflow-y: scroll;
    margin-top: 1rem;
  }
  .filter-form {
    display: flex;
  }
  .form-group {
    // border: 2px solid #ccc;
    padding: 1rem;
    background-color: #fff;
  }
  label {
    display: block;
  }
  label:hover {
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
`;
