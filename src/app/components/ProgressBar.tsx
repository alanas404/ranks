import React from 'react';
import { Progress } from "@nextui-org/react";
import Star from './Star';

const ProgressBar = () => {
    return (
        <div className='flex items-center gap-4'>
            <Progress color='success' className='progress' aria-label="Loading..." size="sm" value={30} />
            <div className='flex items-center gap-2'>
                <Star />
                <p className='text-[#FFFFFF] text-xs font-normal'>60%</p>
            </div>
        </div>
    );
};

export default ProgressBar;