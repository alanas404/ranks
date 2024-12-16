import React from 'react';
import Image from 'next/image';
const LoyaltyPoint = () => {
    return (
        <div className='p-4 lg:p-6 rounded-xl bg-[#333333d9] mt-6 flex items-center justify-between'>
            <div className='flex items-center gap-2 lg:gap-4 text-white'>
                <Image className='w-8 h-8 lg:w-10 lg:h-10' src="/loyalty/coin.svg" width={40} height={40} alt='' />
                <h2 className='font-futura text-xl lg:text-[32px] font-medium lg:leading-10'>234 Coins</h2>
            </div>
            <div>
                <button className='hidden lg:block py-[9px] px-[39px] text-[#333333] font-futura lg:text-sm font-medium lg:leading-[22px] bg-[#FED307] rounded-lg'>
                    Purchase Gifts
                </button> 
                <button className='lg:hidden'>
                   <Image className='w-8 h-8' src="/loyalty/shopping_cart.svg" width={32} height={32} alt='' />
                </button>
            </div>
        </div>
    );
};

export default LoyaltyPoint;