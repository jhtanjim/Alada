import React from 'react';
import banner from "../../../public/all product.png"; // Make sure the path is correct
import { Link } from 'react-router-dom';

const AllProductBanner = () => {
    return (
        <div className='relative bg-black my-8'>
            <div
                className='h-[550px] bg-cover bg-center'
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: '',
                }}
            >
                {/* Overlay for background opacity */}
                <div className='absolute inset-0 bg-black opacity-60' /> {/* Adjust the opacity here */}
                
                <div className='flex items-center justify-center h-full relative'> {/* Add relative here */}
                    <div className='text-center px-4 z-10'> {/* Add z-10 to bring text above overlay */}
                        <h1 className='lg:text-6xl text-2xl font-bold leading-9 mb-4 text-white'>
                           Do you Need Grocerry?
                        </h1>
                       <Link> <button className="lg:px-6 lg:py-3 px-4 py-2 bg-[#FECF40] text-black border-2 border-black rounded-lg my-4">
                            <span className='items-center'>All Products</span>
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductBanner;
