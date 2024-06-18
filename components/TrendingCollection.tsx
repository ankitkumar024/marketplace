import React from 'react'
import Image from 'next/image';
import { trendingCollections } from '@/data';


const TrendingCollection = () => {
    return (
        <div className='tc pt-[8rem] flex flex-col justify-center items-center w-auto gap-4 md:justify-start md:items-start '>
            <div className="content pl-6 w-full max-w-[1500px] flex flex-col gap-4 md:pl-0 md:items-center md:justify-center">
                <h1 className='text-[28px] md:text-[40px] lg:text-[45px] font-bold text-center md:text-left lg:text-center'>Trending Collection</h1>
                <p className='text-[#858584] lg:text-[19px] text-center md:text-left lg:text-center'>Checkout our weekly updated trending collection.</p>
            </div>

            <div className="collections w-[100%] flex flex-col gap-6 md:flex-row lg:gap-0 lg:justify-evenly">
                {trendingCollections.map((items, index) => (
                    <div key={items.id} className={`flex flex-col w-auto gap-4 ${index > 0 ? 'hidden md:flex' : ''} md:${index > 1 ? 'hidden lg:flex' : ""}`}>
                        <img  src={items.img} alt="main image" />
                        <div className='flex justify-between'>
                            <img  src={items.image} alt="" />
                            <img  src={items.image1} alt=""/>
                            <span className='flex items-center justify-center bg-[#A259FF] w-[100px] rounded-3xl'>1025+</span>
                        </div>
                        <div className='placeholder_details flex flex-col gap-2'>
                            <h2 className='font-semibold text-[18px]'>{items.title}</h2>
                            <div className='placeholder flex items-center gap-3'>
                                <img  src={items.placeholderImg} alt=""/>
                                <p>{items.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingCollection