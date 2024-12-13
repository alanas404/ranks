import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Star = () => {
    const rating =5;
    return (
       <div className='flex gap-1'>
                      {
                          Array(5).fill(1).map((_, index) => {
                              if (index  < Math.floor(rating)) {
                                  return <FaStar color='#FED307' />
                              }
                              return index + .5 === rating ? <FaStarHalfAlt color='#FED307' /> : <FaRegStar color='#FED307' />
                          })
                      }
                  </div>
    );
};

export default Star;