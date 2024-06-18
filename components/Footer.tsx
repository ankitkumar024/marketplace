"use client";

import { SocialLinks } from '@/data'
import { getImagePath } from '@/data/helpers'
import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='footer bg-black w-full mt-[4rem] lg:w-auto'>
            <div className='ml-10 pt-5 pr-5 w-auto flex flex-col gap-4 lg:flex-row lg:justify-between '>
                <div className='w-max flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        <Image src={getImagePath("/logo.png")} alt="logo" width={25} height={25} />
                        <h1 className='text-[20px] font-bold md:text-[30px] w-max'>NFT Marketplace</h1>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <p className='text-[#858584] text-[14px] w-[275px] '>NFT marketplace UI created with the Anima for Figma.</p>
                        <a className='text-[#858584] text-[14px] w-max lg:text-[19px]' href="#">Join our community</a>
                        <div className='flex gap-2'>
                            {SocialLinks.map((items) => (
                                <div key={items.id} className='cursor-pointer'>
                                    <Image src={items.logo} alt="logo" width={24} height={24} onClick={() => window.location.href = items.link} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className='flex flex-col gap-4 pt-4 lg:pt-0'>
                    <h1 className='text-[20px] font-bold md:text-[30px] w-max'>Explore</h1>
                    <a className='text-[#858584] text-[14px] w-max lg:text-[19px]'
                        href={`#${"marketplace"}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("marketplace")?.scrollIntoView({ behavior: 'smooth' })
                        }}>Marketplace</a>
                    <a id='rankings' className='text-[#858584] text-[14px] w-max lg:text-[19px]'
                        href={`#${"rankings"}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("rankings")?.scrollIntoView({ behavior: 'smooth' })
                        }}>Rankings</a>
                    <a className='text-[#858584] text-[14px] w-max lg:text-[19px]'
                        href={`#${"wallet"}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("wallet")?.scrollIntoView({ behavior: 'smooth' })
                        }}>Connect a wallet</a>
                </div>

                <div className='flex flex-col gap-4 pt-4 lg:pt-0'>
                    <h1 className='text-[20px] w-max font-bold md:text-[30px]'>Join our Weekly Digest</h1>
                    <p className='text-[#858584] text-[14px] w-[275px] lg:w-max lg:text-[16px]'>Get exclusive promotions & updates straight to your inbox.</p>

                    <div className='join flex flex-col gap-4 w-full p-4 lg:flex-row lg:gap-0'>
                        <input className='border-[2px] p-4 items-center justify-center rounded-3xl text-black bg-white lg:w-auto lg:text-[15px]' type="text" placeholder='Enter Your Email Address' />
                        <button className='flex w-full gap-4 p-4 items-center justify-center font-medium bg-[#A259FF] rounded-3xl lg:relative lg:right-[39px] '>
                            <Image src={getImagePath("/mail.svg")} alt="mail" width={20} height={20} className='cursor-pointer' />
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            <hr className=' w-auto mt-8 mb-2 ml-4 mr-4' />
            <span className='ml-5 text-[10px] text-[#858584]'>&copy; NFT Market. All rights reserved.</span>

        </div>
    )
}

export default Footer;
