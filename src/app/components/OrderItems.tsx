import React from 'react';
import OrderItem from './OrderItem';

const OrderItems = () => {
    return (
        <div className='p-4 lg:p-6 rounded-xl bg-[#333333d9] mt-6'>
            <h2 className='text-white text-base lg:text-xl font-bold leading-7 mb-4 lg:mb-6'>Ordered Items</h2>
            <div className='space-y-2 lg:space-y-3'>
                <OrderItem/>
                <OrderItem/>
            </div>
        </div>
    );
};

export default OrderItems;