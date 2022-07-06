import React, { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';
import data from './jsonNew.json';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [properties, setProperties] = useState(data);

  const [filteredProperties, setFilteredProperties] = useState(data);

  const [filters, setFilters] = useState({
    city: [],
    furnished: null,
    pets: null,
    f_rent: null,
    f_area: null,
  });

  // const fetchProperties = async () => {
  //   try {
  //     // const { data } = await axios.get();
  //     // const data1 = await setProperties(data);
  //     console.log(data);
  //     setProperties(data);
  //     setFilteredProperties(data);
  //     console.log(properties);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  // useEffect(() => {
  //   // fetchProperties();
  //   setProperties(data);
  //   setFilteredProperties(data);
  // }, []);

  useEffect(() => {
    handleFilters();
  }, [filters]);

  const handleFilters = () => {
    let newProperties = filteredProperties;

    if (filters.city.length) {
      newProperties = newProperties.filter((item) => {
        // console.log('y', filters.city, item.city);
        return filters.city.includes(item.city);
      });
    }
    if (filters.pets) {
      newProperties = newProperties.filet((item) => item.pet === 'Yes');
    }
    setFilteredProperties(newProperties);
  };
  // console.log(properties);
  // console.log(filteredProperties);

  return (
    <AppContext.Provider
      value={{ properties, filters, setFilters, filteredProperties }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
