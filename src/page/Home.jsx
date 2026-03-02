import React from 'react';
import HeroSection from '../component/Home/HeroSection';
import HeroFeaturesInfo from '../component/Home/HeroFeaturesInfo';
import FeaturesSection from '../component/Home/FeaturesSection';
import TestimonialsSection from '../component/Home/TestimonialsSection';

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1A1A1A] text-[#E6E6E6]">
            <HeroSection />
            <HeroFeaturesInfo />
            <FeaturesSection />
            <TestimonialsSection />
        </div>
    );
};

export default Home;