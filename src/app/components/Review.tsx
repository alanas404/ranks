import React from 'react';
import Image from 'next/image';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Review = () => {
    console.log(Array(5).fill(1));

    const rating = 3.5

    return (
        <div>
            <div className='flex items-center gap-2'>
                <div className='w-8 h-8 rounded-full'>
                    <Image src="/product_details/avatar.svg" className='rounded-full' width={32} height={32} alt='' />
                </div>
                <p className='text-white text-base font-normal'>Review Text</p>
            </div>
            <div className='flex gap-1 mt-3'>
                {
                    Array(5).fill(1).map((_, index) => {
                        if (index  < Math.floor(rating)) {
                            return <FaStar color='#FED307' />
                        }
                        return index + .5 === rating ? <FaStarHalfAlt color='#FED307' /> : <FaRegStar color='#FED307' />
                    })
                }
            </div>
            <p className='text-[#918F92] text-base font-normal my-3 leading-6'>Attended 3 Months Bakery Programme. Amazing experience. Can’t wait to attend the next session.</p>
            <p className='text-[#918F92] text-xs' >12 Sep 2024</p>
        </div>
    );
};

export default Review;