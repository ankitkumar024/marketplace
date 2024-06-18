import { getImagePath } from '@/data/helpers'
import React from 'react'
import Image from 'next/image';


const Subscribe = () => {
    return (
        <div id='wallet' className='subscribe w-auto mt-[8rem] lg:ml-[90px] lg:mr-[90px] md:bg-black md:rounded-2xl'>
            <div className='flex flex-col md:p-[40px] w-auto gap-8 md:flex-row md:items-center md:justify-between md:gap-0 lg:justify-around'>

                <img className='w-auto md:h-[300px] md:w-[300px]' src={getImagePath("/astronaut.png")} alt="astronaut" />


                <div className="content flex flex-col gap-8 lg:ml-7">
                    <div className='w-max'>
                        <h1 className='text-[25px] font-bold lg:w-[300px] lg:text-[30px]'>Join Our Weekly Digest</h1>
                        <p className='text-[#858584] text-[14px] w-[275px] lg:w-[300px] lg:text-[19px]'>Get exclusive promations & updates straight to you inbox.</p>
                    </div>
                    <div className='flex flex-col gap-4 w-full lg:flex-row lg:gap-0'>
                        <input className='border-[2px] p-4 items-center justify-center rounded-3xl text-black bg-white lg:w-auto lg:text-[15px]' type="text" placeholder='Enter Your Email Address' />
                        <button className='flex w-full gap-4 p-4 items-center justify-center font-medium bg-[#A259FF] rounded-3xl lg:relative lg:right-[39px] '>
                            <img src={getImagePath("/mail.svg")} alt="mail" />
                            Subscribe
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Subscribe