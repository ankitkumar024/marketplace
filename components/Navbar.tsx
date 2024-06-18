'use client';

import React, { useState } from 'react'
import { getImagePath } from '@/data/helpers';
import Image from 'next/image';
import { navItems } from '@/data';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative flex w-max md:gap-[70px] md:justify-between lg:w-full'>
      <div className='flex justify-between items-center p-4 gap-[10rem]'>
        <div className='flex items-center gap-2'>
          <img className='w-[25px]' src={getImagePath("/logo.png")} alt="logo" />
          <h1 className='md:text-[18px]'>NFT Marketplace</h1>
        </div>
        <button
          className='text-xl md:hidden'
          onClick={toggleMenu}
        >
          &#9776;
        </button>
      </div>

      <div className={`flex-col w-[180px] absolute top-14 right-4 rounded-2xl bg-[#3B3B3B] md:flex-row md:flex ${isOpen ? 'flex' : 'hidden'} md:w-max md:items-center md:relative md:top-0 md:bg-transparent md:gap-1`}>
        <ul className="flex flex-col md:flex-row md:items-center">
          {navItems.map((item) => (
            <li key={item.id} className='flex items-center w-auto justify-end p-2 md:ml-4 md:w-max hover:text-[#858584]'>
              <a className='cursor-pointer text-[14px] md:w-max md:text-[12px] lg:text-[18px]' href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })
                }}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className='flex items-center w-full pl-[4.7rem] pb-4 md:p-0'>
          <button className='flex gap-2 cursor-pointer text-[12px] items-center bg-[#A259FF] p-3 rounded-2xl lg:text-[18px]'>
            <img className='w-[13px] lg:w-[20px]' src={getImagePath("/user.svg")} alt="User Icon" />Sign Up
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
