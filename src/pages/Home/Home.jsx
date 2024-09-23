import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import AllProductBanner from './AllProductBanner';
import Footer from '../Shared/Footer/Footer';
import Blog from './Blog';

const Home = () => {
    return (
        <div>
            <Banner  />
            <Categories />
            <AllProductBanner />
            <Blog/>
            <Footer/>
        </div>
    );
};

export default Home;