import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [categories,setCategories]=useState([])
    useEffect(() => {
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
      
      }, []);
    return (
        <div>
            <div className='mx-auto text-center  lg:my-24 my-10  md:w-3/12'>
           
            <h3 className='lg:text-4xl font-bold uppercase border-b-4 text-[#e7422e] lg:py-4'>Popular Categories</h3>
            </div>
            
            <div className='max-w-screen-2xl lg:mx-auto mx-4'>
                {/* categories */}
<div className='grid gap-2  lg:grid-cols-7'>
  {categories.map(category => (
    <Link key={category.id} className='flex justify-center'>
      <div className=' w-full border text-center mx-auto p-4 bg-white rounded h-60 flex flex-col items-center'>
        <img 
          className='object-cover h-32 w-32 mb-2' 
          src={category.categoryImage} 
          alt={category.category} 
        />
        <h1 className='text-lg font-semibold'>{category.category}</h1>
      </div>
    </Link>
  ))}
</div>
</div>
{/*  */}

        </div>
    );
};

export default Categories;