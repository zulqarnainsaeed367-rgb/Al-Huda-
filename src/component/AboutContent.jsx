import React from 'react';

const AboutContent = () => {
    return (
        <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-[#F4C430] text-center mb-12">About Al-Huda Academy</h1>

            <div className="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Our Mission</h2>
                    <p className="mb-6">
                        At Al-Huda Academy, our mission is to make Quran learning accessible to everyone, regardless of their location or schedule.
                        We believe that the teachings of the Holy Quran should be available 24/7 to all who seek knowledge.
                    </p>

                    <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Our Vision</h2>
                    <p className="mb-6">
                        To become the leading online Quran academy, providing personalized, high-quality Islamic education to students worldwide.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Our Teaching Approach</h2>
                    <p className="mb-6">
                        We use modern technology combined with traditional Islamic teaching methods. Our certified teachers provide one-on-one
                        sessions tailored to each student's pace and learning style.
                    </p>

                    <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Our Experience</h2>
                    <ul className="space-y-2">
                        <li>• Certified Quran teachers with years of experience</li>
                        <li>• Specialized in Tajweed and Hifz</li>
                        <li>• Male and female instructors available</li>
                        <li>• 24/7 support and flexible scheduling</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;