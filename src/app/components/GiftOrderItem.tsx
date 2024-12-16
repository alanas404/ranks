import React from 'react';
import Image from 'next/image';

const GiftOrderItem = () => {
    return (
        <div className='p-3 lg:p-4  rounded-lg flex items-center justify-between border-2 border-dashed border-[#707070]/50'>
            <div className='flex items-center gap-2 lg:gap-2.5'>
                <Image className='w-[64px] h-[64px] lg:w-[87px] lg:h-[77px]' src="/orders/order_item.svg" alt='' width={87} height={77} />
                <div className='text-white '>
                    <h2 className='text-xs lg:text-base font-futura'>Shell Advance AX7 </h2>
                    <p className='text-xs lg:text-sm flex items-center gap-2.5 font-manrope text-[#9E9E9E]'>Quantity : 2</p>
                    <p className='text-xs lg:text-sm font-manrope text-[#9E9E9E]'>200 Coins</p>
                </div>
            </div>
        </div>
    );
};

export default GiftOrderItem;