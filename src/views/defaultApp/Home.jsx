import React from 'react';
import Hero from './HomeView/Hero';
import About from './HomeView/About';
import Company from './HomeView/Company';
import Screenshots from './HomeView/Screenshots';
import { Pricing } from './HomeView/Pricing';

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Company />
            <Screenshots />
            <Pricing />
        </div>
    );
};

export default Home;
