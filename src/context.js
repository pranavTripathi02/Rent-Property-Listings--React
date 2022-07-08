import React, { createContext, useContext, useEffect, useState } from 'react';
// import axios from 'axios';
import data from './jsonNew.json';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [properties, setProperties] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 20;

  const [filteredProperties, setFilteredProperties] = useState(data);

  const [filters, setFilters] = useState({
    city: [],
    furnished: false,
    pets: false,
    rent: 0,
    area: 0,
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
    let newProperties = properties;

    // console.log(filters.city.length);
    if (filters.city.length) {
      newProperties = newProperties.filter((item) =>
        filters.city.includes(item.city)
      );
    }
    if (filters.pets) {
      newProperties = newProperties.filter((item) => item.pets === 'Yes');
    }
    if (filters.furnished) {
      newProperties = newProperties.filter(
        (item) => item.furnish === 'Furnished'
      );
    }
    if (filters.rent > 0) {
      newProperties = newProperties.filter((item) => item.rent <= filters.rent);
    }
    if (filters.area) {
      newProperties = newProperties.filter(
        (item) => item.areaSqm >= filters.area
      );
    }
    setFilteredProperties(newProperties);
    // console.log(newProperties);
  };
  // console.log(properties);
  // console.log(filteredProperties);

  return (
    <AppContext.Provider
      value={{
        properties,
        filters,
        setFilters,
        filteredProperties,
        propertiesPerPage,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
