import React from 'react';
import GiftOrderItem from './GiftOrderItem';

const GiftOrderItems = () => {
    return (
        <div className='p-4 lg:p-6 rounded-xl bg-[#333333d9] mt-6'>
            <h2 className='text-white text-base lg:text-xl font-bold leading-7 mb-4 lg:mb-[22px]'>Ordered Items</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <GiftOrderItem />
                <GiftOrderItem />
                <GiftOrderItem />
                <GiftOrderItem />
                <GiftOrderItem />
                <GiftOrderItem />
            </div>
        </div>
    );
};

export default GiftOrderItems;