import React from 'react';
import banner from "../../../public/banner.png"
const Banner = () => {
    return (
        <div className='mt-10'>
           <img className='object-cover' src={banner} alt="" />
        </div>
    );
};

export default Banner;