import React from 'react';
import Image from 'next/image';
import { trendingCollections } from '@/data';

const TrendingCollection = () => {
    return (
        <div className='tc pt-[8rem] flex flex-col justify-center items-center w-auto gap-4 md:justify-start md:items-start'>
            <div className="content pl-6 w-full max-w-[1500px] flex flex-col gap-4 md:pl-0 md:items-center md:justify-center">
                <h1 className='text-[28px] md:text-[40px] lg:text-[45px] font-bold text-center md:text-left lg:text-center'>Trending Collection</h1>
                <p className='text-[#858584] lg:text-[19px] text-center md:text-left lg:text-center'>Checkout our weekly updated trending collection.</p>
            </div>

            <div className="collections w-full flex flex-col gap-6 md:flex-row lg:gap-0 lg:justify-evenly">
                {trendingCollections.map((items, index) => (
                    <div key={items.id} className={`flex flex-col w-full gap-4 ${index > 0 ? 'hidden md:flex' : ''} md:${index > 1 ? 'hidden lg:flex' : ""}`}>
                        {/* Main Image */}
                        <div style={{ width: '100%', height: '300px' }} className="relative">
                            <img
                                src={items.img}
                                alt="main image"
                                className="rounded-xl"
                            />
                        </div>
                        {/* Other Images and Content */}
                        <div className='flex justify-between gap-4'>
                            {/* Image 1 */}
                            <div style={{ width: '150px', height: '150px' }} className="relative">
                                <img
                                    src={items.image}
                                    alt=""
                                    className="rounded-xl"
                                />
                            </div>
                            {/* Image 2 */}
                            <div style={{ width: '150px', height: '150px' }} className="relative">
                                <img
                                    src={items.image1}
                                    alt=""
                                    className="rounded-xl"
                                />
                            </div>
                            {/* Count */}
                            <span className='flex items-center justify-center bg-[#A259FF] w-[100px] lg:w-[150px] rounded-3xl'>1025+</span>
                        </div>
                        {/* Placeholder Details */}
                        <div className='placeholder_details flex flex-col gap-2'>
                            <h2 className='font-semibold text-[18px]'>{items.title}</h2>
                            <div className='placeholder flex items-center gap-3'>
                                <div style={{ width: '30px', height: '30px' }} className="relative">
                                    <img
                                        src={items.placeholderImg}
                                        alt=""
                                        className="rounded-full"
                                    />
                                </div>
                                <p>{items.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingCollection;
