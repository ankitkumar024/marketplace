import React from 'react';
import Image from 'next/image';
import { getImagePath } from '@/data/helpers';
import { discoverNFTS } from '@/data';

const DiscoverNFT = () => {
    return (
        <div id='marketplace' className='pt-[8rem] w-auto lg:pl-[90px] lg:pr-[90px]'>
            <div className="content w-full max-w-[1500px] flex flex-col md:flex-row gap-4 md:pl-0 md:justify-between">
                <div className='flex flex-col gap-y-4 w-max'>
                    <h1 className='text-[28px] font-bold md:text-[40px] lg:w-max lg:text-[45px]'>Discover more NFTs</h1>
                    <p className='text-[#858584] text-[14px] w-[275px] lg:w-max lg:text-[19px]'>Explore new trending NFTs</p>
                </div>

                <div className='w-auto items-center hidden md:flex'>
                    <button className='flex gap-4 p-4 w-[300px] items-center justify-center font-medium border-[2px] border-[#A259FF] rounded-full hover:bg-[#A259FF]'>
                        <img src={getImagePath("/eye.svg")} alt="eye" />
                        See All
                    </button>
                </div>
            </div>

            <div className="nft-cards pt-4 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1500px] items-center justify-center">
                {discoverNFTS.map((items) => (
                    <div key={items.id} className='bg-black rounded-3xl w-full'>
                        <div className='relative w-full h-0 pb-[75%]'>
                            <img
                                src={items.img}
                                alt={items.title}
                                className='rounded-t-3xl'
                            />
                        </div>
                        <h1 className='text-[18px] font-semibold p-4 md:pt-8 md:pb-8'>{items.title}</h1>

                        <div className='pl-4 pt-1 flex gap-3'>
                            <img src={items.img1} alt={items.name} className='rounded-full' />
                            <p className='font-light'>{items.name}</p>
                        </div>

                        <div className='flex w-full justify-between p-4'>
                            <p className='flex flex-col text-[#858584] text-[14px]'>Price
                                <span className='text-white'>1.63 ETH</span>
                            </p>
                            <p className='flex flex-col text-[#858584] text-[14px]'>Highest Bid
                                <span className='text-white'>0.33 wETH</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full items-center md:hidden pt-4'>
                <button className='flex w-full gap-4 p-4 items-center justify-center font-medium border-[2px] border-[#A259FF] rounded-full hover:bg-[#A259FF]'>
                    <img src={getImagePath("/eye.svg")} alt="eye" />
                    See All
                </button>
            </div>
        </div>
    );
}

export default DiscoverNFT;
