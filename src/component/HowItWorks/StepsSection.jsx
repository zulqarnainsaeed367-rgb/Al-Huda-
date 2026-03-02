import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const StepsSection = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const steps = [
        { step: 1, title: "Visit Our Website", description: "Browse our courses and learn about our teaching methods." },
        { step: 2, title: "Click WhatsApp Icon", description: "Contact us directly through WhatsApp for instant response." },
        { step: 3, title: "Book Demo Class", description: "Schedule your free 3-day demo class with a teacher." },
        { step: 4, title: "Start Learning", description: "Begin your Quran journey with personalized instruction." }
    ];

    return (
        <section className="py-6 bg-[#0A0A0A]">
            <div className="max-w-3xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] mb-12">
                    How It Works
                </h2>

                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <div 
                            key={index}
                            data-aos="flip-left"
                            className="group relative flex items-start p-6 bg-[#121212] rounded-2xl border border-[#222222] hover:border-[#D4AF37] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.1)]"
                        >
                            {/* Number Indicator */}
                            <div className="flex-shrink-0 bg-[#1A1A1A] text-[#D4AF37] border-2 border-[#D4AF37] rounded-full w-14 h-14 flex items-center justify-center font-bold text-2xl mr-6 group-hover:bg-[#D4AF37] group-hover:text-[#0D0D0D] transition-colors duration-300">
                                {step.step}
                            </div>

                            {/* Content */}
                            <div className="mt-1">
                                <h3 className="text-xl font-semibold text-white group-hover:text-[#F4C430] transition-colors mb-1">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepsSection;