import React from 'react';
import Image from 'next/image';

const OrderItem = () => {
    return (
        <div className='p-3 lg:p-4 bg-black rounded-lg flex items-center justify-between border border-[#707070]/50'>
            <div className='flex items-center gap-2 lg:gap-2.5'>
                <Image className='w-[64px] h-[64px] lg:w-[87px] lg:h-[77px]' src="/orders/order_item.svg" alt='' width={87} height={77} />
                <div className='text-white font-manrope'>
                    <h2 className='text-xs lg:text-base'>Shell Advance AX7 Advance Engine Oil</h2>
                    <p className='text-xs lg:text-sm flex items-center gap-2.5'>BDT 950 <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M14.9512 5.38062C14.7987 5.2282 14.592 5.14258 14.3764 5.14258C14.1608 5.14258 13.954 5.2282 13.8016 5.38062L10.0731 9.10907L6.34466 5.38062C6.1922 5.2282 5.98545 5.14258 5.76987 5.14258C5.55429 5.14258 5.34753 5.2282 5.19507 5.38062C5.04265 5.53308 4.95703 5.73983 4.95703 5.95541C4.95703 6.17099 5.04265 6.37775 5.19507 6.53021L8.92353 10.2587L5.19507 13.9871C5.04265 14.1396 4.95703 14.3463 4.95703 14.5619C4.95703 14.7775 5.04265 14.9843 5.19507 15.1367C5.34753 15.2891 5.55429 15.3748 5.76987 15.3748C5.98545 15.3748 6.1922 15.2891 6.34466 15.1367L10.0731 11.4083L13.8016 15.1367C13.954 15.2891 14.1608 15.3748 14.3764 15.3748C14.592 15.3748 14.7987 15.2891 14.9512 15.1367C15.1036 14.9843 15.1892 14.7775 15.1892 14.5619C15.1892 14.3463 15.1036 14.1396 14.9512 13.9871L11.2227 10.2587L14.9512 6.53021C15.1036 6.37775 15.1892 6.17099 15.1892 5.95541C15.1892 5.73983 15.1036 5.53308 14.9512 5.38062Z" fill="white" />
                    </svg></span>1 Item</p>
                    <p className='text-xs lg:text-sm'>1 Litre</p>
                </div>
            </div>
            <button className='p-2 lg:p-3 font-futura text-[#FED307] text-xs lg:text-base font-medium border border-[#FED307]  rounded-lg'>
                Review
            </button>
        </div> 
    );
};

export default OrderItem;