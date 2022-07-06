import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Properties, Temp } from '../pages';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('properties');

  const changeActiveLink = (e) => {
    const id = e.target.id;
    setActiveLink(id);

    const active = document.getElementsByClassName('link');
    Object.entries(active).forEach(([key, value]) => {
      value.classList.remove('active-link');
    });
    e.target.classList.add('active-link');
  };

  const toggleBurger = () => {
    const toggleButton = document.getElementsByClassName('links');
    toggleButton[0].classList.toggle('active');
    console.log(typeof toggleButton);
  };

  return (
    <>
      <Wrapper>
        <nav className='flex-container'>
          <div className='flex-container branding'>
            {/* <a href='#'> */}
            <h3 className='fas fa-home brand'>Real Estate</h3>
            {/* </a> */}
          </div>
          <div className='burger burger-btn' onClick={() => toggleBurger()}>
            <span className='bar bar1'></span>
            <span className='bar bar2'></span>
            <span className='bar bar3'></span>
          </div>
          <div className='flex-container links'>
            <Link
              id='properties'
              className='link active-link'
              to='/properties'
              element={<Properties />}
              onClick={(e) => changeActiveLink(e)}
            >
              Properties
            </Link>
            <Link
              id='about'
              className='link'
              to='/temp'
              element={<Temp />}
              onClick={(e) => changeActiveLink(e)}
            >
              About us
            </Link>
            <Link
              id='contact'
              className='link'
              to='/temp'
              element={<Temp />}
              onClick={(e) => changeActiveLink(e)}
            >
              Contact us
            </Link>
            <Link
              id='login'
              className='link'
              to='/temp'
              element={<Temp />}
              onClick={(e) => changeActiveLink(e)}
            >
              Login
            </Link>
          </div>
        </nav>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  nav {
    padding: 1rem 0.5rem 1rem 0.5rem;
  }
  .flex-container {
    display: flex;
    width: 100%;
    background: #fff;
    align-items: center;
    justify-content: space-between;
  }

  .branding {
    // font-size: large;
    position: relative;
    text-align: center;
    max-width: 280px;
    overflow: visible;
    letter-spacing: 2px;
    // width: 20vw;
    // margin: 0;
  }

  .flex-item {
    // margin-right: 15px;
  }

  .links {
    width: 70%;
    // margin-right: 20rem;
    color: #000;
    // background: red;
    justify-content: start;
  }

  .link {
    display: block;
    // background: red;
    text-decoration: none;
    color: #000;
    margin-left: 1.5rem;
  }

  #login {
    margin-left: auto;
    margin-right: 1rem;
  }

  .active-link {
    color: #1003ee;
    text-transform: uppercase;
    border-bottom: solid 2px;
    padding-bottom: 2px;
  }

  .burger {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;
  }

  .bar {
    height: 2px;
    width: 100%;
    background: #000;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    nav {
      // display: flex;
      flex-direction: column;
      // width: 100%;
      // justify-content: space-between;
      align-items: flex-end;
    }

    .burger {
      display: flex;
    }

    .links {
      display: none;
      width: 100%;
    }

    .links.active {
      display: flex;
      height: 30vh;
      flex-direction: column;
      width: 100%;
      background: #fff;
      // align-items: start;
      // margin: 0 0 0 0;
      justify-content: space-around;
    }
    .link {
      width: 100%;
      // background: blue;
      margin: 0;
      text-align: center;
      // border-bottom: 1px solid #ddd;
    }
  }
`;
