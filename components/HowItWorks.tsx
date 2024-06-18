import { howitworks } from '@/data'
import React from 'react'
import Image from 'next/image';

const HowItWorks = () => {
    return (
        <div className='howItWorks pt-[8rem] flex flex-col gap-4 lg:pl-[90px] lg:pr-[90px]'>
            <div className='flex flex-col gap-y-4 w-max'>
                <h1 className='text-[28px] font-bold md:text-[40px] lg:w-max lg:text-[45px]'>How It Works</h1>
                <p className='text-[#858584] text-[14px] w-[275px] lg:w-max lg:text-[19px]'>Find out how to get started</p>
            </div>

            <div className='w-auto grid grid-cols-1 gap-2 md:grid-cols-3 '>
                {howitworks.map((items) => (
                    <div key={items.id} className='w-[100%] flex md:flex-col items-center bg-black rounded-xl p-5 gap-6'>
                        <img className='w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]' alt='image' src={items.img} />
                        <div className='card-content w-full flex flex-col gap-2 items-center justify-center'>
                            <h2 className='text-[20px] font-bold'>{items.title}</h2>
                            <p className='text-[#858584] text-[14px] lg:text-[19px] text-center'>{items.para}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default HowItWorks;