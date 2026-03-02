import React from 'react';
import StepsSection from '../component/HowItWorks/StepsSection';
import CallToAction from '../component/Shared/CallToAction';

const HowItWorks = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1A1A1A] text-[#E6E6E6] py-16 md:py-24 px-4 sm:px-6">
            <div className="container mx-auto max-w-5xl">
                {/* Header Section */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-flex items-center justify-center mb-4 px-4 py-2 bg-[#F4C430]/10 rounded-full border border-[#F4C430]/30">
                        <span className="text-sm md:text-base font-semibold text-[#F4C430]">Simple Process</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 md:mb-6 leading-tight">
                        How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] via-[#D4AF37] to-[#F4C430]">Works</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-2">
                        Start your Quranic journey in just 4 simple steps
                    </p>
                    <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
                        No sign-up or login required. Start learning instantly with our hassle-free process!
                    </p>
                </div>

                {/* Steps Section */}
                <div className="mb-16 md:mb-24">
                    <StepsSection />
                </div>

                {/* Call To Action */}
                <CallToAction text="Ready to start your Quran journey?" buttonText="Start Your Journey" />
            </div>
        </div>
    );
};

export default HowItWorks;