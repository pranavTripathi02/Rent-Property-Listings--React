import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Details, Home, Properties, Temp } from './pages';
import { Navbar } from './components';

export default function App() {
  return (
    <>
      <Navbar />
      <main className='mx-4 my-4'>
        <Routes>
          <Route path='/details' element={<Details />} />
          <Route path='/' element={<Home />} />
          <Route path='/properties' element={<Properties />} />
          <Route path='/temp' element={<Temp />} />
        </Routes>
      </main>
    </>
  );
}
