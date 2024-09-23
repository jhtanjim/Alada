import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blog data:', error));
    }, []);

    return (
        <div className="container mx-auto px-4 my-8">
         <div className='mx-auto text-center  lg:my-24 my-10  md:w-3/12'>
           
           <h3 className='lg:text-4xl font-bold uppercase border-b-4 text-[#e7422e] lg:py-4'>Popular Blogs</h3>
           </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map(blog => (
                    <div key={blog.id} className="border rounded-lg overflow-hidden shadow-md">
                        <img src={blog.image} alt={blog.title} className="w-full h-50 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">{blog.title}</h3>
                            <p className="text-gray-500">{blog.author} - {new Date(blog.date).toLocaleDateString()}</p>
                            <p className="mt-2">{blog.content.substring(0, 100)}...</p>
                            <button className="mt-4 bg-[#e7422e]   text-white px-4 py-2 rounded hover:bg-white hover:text-[#E6422E]">
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
