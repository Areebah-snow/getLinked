import React from 'react';
import headingBorder from '../../images/Vector 4.svg';
import star from '../../images/star.svg';
import './header.css';
import HeaderImage from '../../images/man-wearing-smart-glasses-touching-virtual-screen 1.png';
import Volt from '../../images/Image 1.png';
import chain from '../../images/chain-9365116-7621444.svg';
import CountdownTimer from '../timer/CountdownTimer';
import Creative from '../../images/Creative 1.svg'


const Header = () => {
  return (
    <div className="header mt-8  border-b-2 border-gray-800">
      <div className="main-container pl-20">
        <div className='relative text-center md:text-right md:mr-10'>
          <h1 className=' text-lg md:text-3xl font-semibold italic'>
            Igniting a Revolution in HR Innovation
          </h1>
          <div className="mt-4 w-44 md:absolute md:-bottom-3 md:right-0">
            <img src={headingBorder} alt="" />
          </div>
        </div>
        <div className="star relative">
          <img className='absolute right-50' src={star} alt="" />
        </div>
        <div className="headerDetails  justify-between ">
          <div className="leftHeader">
            <h1 className='text-6xl font-bold '>getlinked <span className='relative'>
            <img className='absolute bulb' src={Creative} alt="" />
                Tech
               
                </span>  Hackathon<span className='text-purplePink'>1.0</span><img className='inline-block' src={chain} alt="" />💥</h1>
            <p>Participate in getlinked tech Hackathon 2023<br></br> stand a chance to win a Big prize</p>
            <a
              className="registerBtn bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-2 border-transparent rounded"
              href="/"
            >
              Register
            </a>

       

            <CountdownTimer />
          </div>
          <div className="rightHeader relative">
            <div className="background-effect"></div>
            <img className='volt' src={Volt} alt="" />
            <img className='volt2' src={Volt} alt="" />
            <img className='hand' src={HeaderImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
