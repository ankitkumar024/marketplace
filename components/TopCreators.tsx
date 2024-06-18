import React from 'react';
import { getImagePath } from '@/data/helpers';
import { topCreators } from '@/data';
import { HoverEffect } from './ui/card-hover-effect';
import Image from 'next/image';

const TopCreators = () => {
    return (
        <div id='rankings' className='TopCreators pt-[8rem] lg:pl-[90px] lg:pr-[90px] '>
            <div className='flex w-max justify-between md:w-[100%]'>
                <div className='flex flex-col gap-y-4 w-max'>
                    <h1 className='text-[28px] font-bold md:text-[40px] lg:w-max lg:text-[45px]'>Top Creators</h1>
                    <p className='text-[#858584] text-[14px] w-[275px] lg:w-max lg:text-[19px]'>Checkout Top Rated Creators on the NFT Marketplace</p>
                </div>
                <div className='w-auto items-center hidden md:flex'>
                    <button className='flex gap-4 p-4 w-[300px] items-center justify-center font-medium border-[2px] border-[#A259FF] rounded-full hover:bg-[#A259FF]'>
                        <Image
                            src={getImagePath("/rocket.svg")}
                            alt="rocket"
                            width={20}
                            height={20}
                        />
                        View Rankings
                    </button>
                </div>
            </div>
            <div className='topcreators-cards h-[640px] lg:h-full md:h-[400px] '>
                <HoverEffect
                    items={topCreators.map((creator, index) => ({
                        title: creator.name,
                        description: `Total Sales: 34.53 ETH`,
                        name: creator.name,
                        Image: creator.img,
                        number: index + 1,
                    }))}
                />
            </div>

            <div className='w-full items-center md:hidden pt-4'>
                <button className='flex w-full gap-4 p-4 items-center justify-center font-medium border-[2px] border-[#A259FF] rounded-full hover:bg-[#A259FF]'>
                    <Image
                        src={getImagePath("/rocket.svg")}
                        alt="rocket"
                        width={20}
                        height={20}
                    />
                    View Rankings
                </button>
            </div>
        </div>
    );
};

export default TopCreators;
