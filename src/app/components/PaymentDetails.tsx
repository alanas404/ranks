import React from 'react';

const PaymentDetails = () => {
    return (
        <div className='p-4 lg:p-6 rounded-xl bg-[#333333d9] mt-6'>
            <h2 className='font-futura text-base lg:text-xl font-bold text-white lg:leading-7 mb-4 lg:mb-6'>Payment Details</h2>
            <div className='space-y-4'>
                <div className='font-manrope flex items-center justify-between'>
                    <p className='text-[#ccc] text-xs lg:text-lg'>Sub Total</p>
                    <p className='text-white text-xs lg:text-lg'>৳3200</p>
                </div>
                <div className='font-manrope flex items-center justify-between'>
                    <p className='text-[#ccc] text-xs lg:text-lg'>Delivery Fee</p>
                    <p className='text-white text-xs lg:text-lg'>Free Delivery</p>
                </div>
                <div className='font-manrope flex items-center justify-between'>
                    <p className='text-[#ccc] text-xs lg:text-lg'>Payment Method</p>
                    <p className='text-white text-xs lg:text-lg'>Bkash</p>
                </div>
                <div className='font-futura flex items-center justify-between text-white'>
                    <p className='text-base lg:text-[32px]'>Total</p>
                    <p className='text-base lg:text-[32px]'>৳3280</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentDetails;