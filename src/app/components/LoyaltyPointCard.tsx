import React from 'react';
import Image from 'next/image';

const LoyaltyPointCard = () => {
    return (
        <div className='p-3 lg:p-4 rounded-lg bg-[#333333d9] text-white mt-6 flex items-center justify-between'>
           <div className='flex items-center gap-2'>
                <Image className='w-9 h-9 lg:w-10 lg:h-10' src="/loyalty/coin.svg" width={40} height={40} alt='' />
                <div className='text-white font-manrope'>
                    <h2 className='text-sm lg:text-base font-normal'>Referral</h2>
                    <p className='text-xs text-[#ccc]'>12 Sep 2024</p>
                </div>
           </div>
           <div className='font-futura text-base lg:text-xl font-medium leading-7 text-[#72BA70]'>
              <p>+200</p>
           </div>
        </div>
    );
};

export default LoyaltyPointCard;