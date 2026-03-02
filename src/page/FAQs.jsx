import React from 'react';
import FAQList from '../component/FAQs/FAQList';
import CallToAction from '../component/Shared/CallToAction';

const FAQs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1A1A1A] text-[#E6E6E6] py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-[#F4C430] text-center mb-12">Frequently Asked Questions</h1>
                <FAQList />
                <CallToAction text="Still have questions?" buttonText="Ask Our Teachers" />
            </div>
        </div>
    );
};

export default FAQs;