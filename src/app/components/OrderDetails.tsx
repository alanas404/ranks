import React from 'react';

const OrderDetails = () => {
    return (
        <div className='p-4 lg:p-6 rounded-xl bg-[#333333d9] mt-6'>
            <h2 className='font-futura text-base lg:text-xl font-bold text-white mb-4  lg:mb-6'>Delivery Details</h2>
            <div className='space-y-4'>
                <div className='font-manrope flex items-center justify-between'>
                    <p className='text-[#ccc] text-xs lg:text-lg'>Order Id</p>
                    <p className='text-white text-xs lg:text-lg'>#98769606</p>
                </div>
                <div className='font-manrope flex items-center justify-between'>
                    <p className='text-[#ccc] text-xs lg:text-lg'>Delivery By</p>
                    <p className='text-white text-xs lg:text-lg'>21/09/2023</p>
                </div>
                <div className='font-manrope flex items-center justify-between'>
                    <p className='text-[#ccc] text-xs lg:text-lg'>Delivery In</p>
                    <p className='text-white text-xs lg:text-lg'>3 to 5 Working Days</p>
                </div>
                <div className='font-manrope flex items-center justify-between'>
                    <p className='text-[#ccc] text-xs lg:text-lg'>Status</p>
                    <p className='text-[#63A0F8] text-xs lg:text-lg'>In Progress</p>
                </div>
                <div className='font-manrope flex items-center justify-between'>
                    <p className='text-[#ccc] text-xs lg:text-lg'>Ship To</p>
                    <p className='text-white text-xs lg:text-lg'>John Doe
                    House: 57, Banani, Dhaka</p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;