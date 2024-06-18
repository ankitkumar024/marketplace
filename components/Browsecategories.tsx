import React from 'react';
import { browseCategories } from '@/data';
import Image from 'next/image';

const BrowseCategories = () => {
  return (
    <div className='browse-categories pt-[8rem] lg:pl-[90px] lg:pr-[90px]'>
      <div>
        <h1 className='text-[28px] font-bold md:text-[40px] lg:w-max lg:text-[45px]'>
          Browse Categories
        </h1>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-auto h-auto pt-8'>
        {browseCategories.map((item) => (
          <div key={item.id} className='bg-black w-auto h-auto flex flex-col rounded-3xl'>
            <Image src={item.img} alt={item.name} layout="intrinsic"  width={400} height={300} />
            <h2 className='text-[18px] font-semibold p-4 md:text-[] md:pt-8 md:pb-8'>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCategories;
