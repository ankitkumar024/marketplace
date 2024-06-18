"use client";

import React from 'react';
import { getImagePath } from '@/data/helpers';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/hero-highlight";
import Image from 'next/image';


const Hero = () => {
    return (
        <HeroHighlight>
            <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}>
                <div className='flex flex-col pt-[4rem] p-5 w-full items-center justify-center md:flex-row md:items-start lg:justify-evenly'>
                    <div className='flex flex-col gap-y-4 md:w-1/2 md:gap-y-8 lg:w-[400px]'>
                        <div className='flex flex-col w-auto gap-y-4'>
                            <h1 className='text-[30px] font-bold md:text-[40px] lg:w-[350px] lg:text-[45px]'>
                                Discover Digital Art & Collect NFTs
                            </h1>
                            <p className='text-[13px] w-[300px] text-[#858584] lg:w-[410px] lg:text-[19px]'>
                                NFT Marketplace UI Created With Anima For Figma. Collect, Buy and Sell Art From More Than 20k NFT Artists
                            </p>
                        </div>

                        <div className='flex flex-col gap-y-8 md:flex-col-reverse lg:w-[380px]'>
                            <div className='numbers flex gap-8 justify-between md:justify-start md:w-full lg:justify-between'>
                                <div className='totalSale'>
                                    <h1 className='text-[20px] font-semibold'>240k+</h1>
                                    <p className='text-[#858584]'>Total Sale</p>
                                </div>
                                <div className='auctions'>
                                    <h1 className='text-[20px] font-semibold'>100k+</h1>
                                    <p className='text-[#858584]'>Auctions</p>
                                </div>
                                <div className='artists'>
                                    <h1 className='text-[20px] font-semibold'>240k+</h1>
                                    <p className='text-[#858584]'>Artists</p>
                                </div>
                            </div>

                            <button className='flex w-auto items-center justify-center rounded-2xl p-4 bg-[#A259FF] gap-3 font-medium lg:w-[300px]'>
                                <img className='w-[17px]' src={getImagePath('/rocket.svg')} alt='' />
                                Get Started
                            </button>
                        </div>
                    </div>

                    <CardContainer className="inter-var  md:pl-[3rem] md:w-auto">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border lg:w-[30rem]">

                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={getImagePath('/hero_img.png')} alt='hero_image'
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full lg:h-[350px] object-cover rounded-xl group-hover/card:shadow-xl"
                                />
                            </CardItem>

                            <CardItem>
                                <div className='p-4 flex flex-col gap-4'>
                                    <h1 className='text-[18px] font-semibold'>Space Walking</h1>
                                    <p className='flex gap-2 text-[#858584]'>
                                        <img src={getImagePath('/animakid.png')} alt='animakid'/>Animakid</p>
                                </div>
                            </CardItem>

                        </CardBody>
                    </CardContainer>
                </div>

            </motion.h1>
        </HeroHighlight>
    );
};

export default Hero;