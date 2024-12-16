import React from 'react';

const Order = () => {
    return (
        <div className='p-3 lg:p-6 rounded-xl bg-[#333333d9] text-white mt-6'>
          <div className='flex items-center justify-between'>
             <h2 className='text-sm lg:text-xl font-futura font-bold lg:leading-7'>#75685118779</h2>
             <h2 className='text-xs lg:text-base font-manrope leading-6'>19/09/2023</h2>
          </div> 
          <div className='my-2 lg:my-3'>
             <p className='text-xs lg:text-base font-manrope leading-6'>2 Items in Total</p>
          </div>
          <div className='flex items-center justify-between'>
            <h2 className='text-sm lg:text-xl font-bold font-futura leading-7'>BDT 1300</h2>
            <p className='bg-[#63A0F8] text-xs lg:text-base font-manrope leading-7 py-1 px-2 lg:px-3 rounded'>In Progress</p>
          </div>
        </div>
    );
};

export default Order;