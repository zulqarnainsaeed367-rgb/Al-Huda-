import React from 'react';
import TestimonialList from '../component/Testimonials/TestimonialList';
import CallToAction from '../component/Shared/CallToAction';

const Testimonials = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1A1A1A] text-[#E6E6E6] py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-4xl font-bold text-[#F4C430] text-center mb-12">Student Testimonials</h1>
                <TestimonialList />
                <CallToAction text="Join thousands of satisfied students!" buttonText="Start Learning Today" />
            </div>
        </div>
    );
};

export default Testimonials;