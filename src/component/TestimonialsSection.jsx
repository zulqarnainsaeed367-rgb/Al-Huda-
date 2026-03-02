import React from 'react';

const TestimonialsSection = () => {
    return (
        <section className="py-16 px-4 bg-[#1A1A1A]">
            <h2 className="text-3xl font-bold text-[#F4C430] text-center mb-12">Student Success Stories</h2>
            <div className="container mx-auto grid md:grid-cols-2 gap-8">
                <div className="bg-[#0D0D0D] p-6 rounded-lg">
                    <p className="mb-4">"Al-Huda Academy helped me memorize the entire Quran in just 6 months. The teachers are amazing!"</p>
                    <p className="text-[#D4AF37]">- Ahmed, Student</p>
                </div>
                <div className="bg-[#0D0D0D] p-6 rounded-lg">
                    <p className="mb-4">"The 24/7 availability made it perfect for my schedule. Highly recommend!"</p>
                    <p className="text-[#D4AF37]">- Fatima, Parent</p>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;