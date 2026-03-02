import React from 'react';
import { MessageCircle } from 'lucide-react';

const HeroSection = () => {
    return (
        <section className="py-20 px-4 text-center">
            <h1 className="text-5xl font-bold text-[#F4C430] mb-6">Welcome to Al-Huda Academy</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
                Learn the Holy Quran with expert teachers available 24/7. Male and female instructors ready to guide you on your spiritual journey.
            </p>
            <a
                href="https://wa.me/923246076098"
                className="inline-flex items-center bg-gradient-to-r from-[#F4C430] to-[#D4AF37] text-[#0D0D0D] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all"
            >
                <MessageCircle className="mr-2" />
                Contact Now
            </a>
        </section>
    );
};

export default HeroSection;