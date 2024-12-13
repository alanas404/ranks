import React from 'react';

import Review from './Review';
import ProgressBar from './ProgressBar';

const ReviewsSection = () => {
    return (
        <div>
            <h2 className='text-white'>Reviews</h2>
            <div className='flex flex-col lg:flex-row lg:gap-10 lg:p-[40px] border border-white rounded-2xl'>
                <div className='w-full lg:w-[545px]'> 
                    <h2 className='text-white'>Reviews</h2>
                    <div className='space-y-5'>
                        <ProgressBar />
                        <ProgressBar />
                        <ProgressBar />
                        <ProgressBar />
                        <ProgressBar />
                    </div>
                </div>
                <div className='flex-1'>
                    <div className='border space-y-8'>
                        <Review />
                        <Review />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsSection;