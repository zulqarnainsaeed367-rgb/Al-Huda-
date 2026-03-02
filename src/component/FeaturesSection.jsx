import React from 'react';

const FeaturesSection = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto grid md:grid-cols-3 gap-8">
                <div className="text-center">
                    <div className="text-[#D4AF37] text-4xl mb-4">🕐</div>
                    <h3 className="text-[#F4C430] text-xl font-bold mb-2">24/7 Availability</h3>
                    <p>Learn at your own pace, anytime, anywhere.</p>
                </div>
                <div className="text-center">
                    <div className="text-[#D4AF37] text-4xl mb-4">👨‍🏫👩‍🏫</div>
                    <h3 className="text-[#F4C430] text-xl font-bold mb-2">Expert Teachers</h3>
                    <p>Male and female certified Quran instructors.</p>
                </div>
                <div className="text-center">
                    <div className="text-[#D4AF37] text-4xl mb-4">📚</div>
                    <h3 className="text-[#F4C430] text-xl font-bold mb-2">Comprehensive Courses</h3>
                    <p>From basics to advanced memorization.</p>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;