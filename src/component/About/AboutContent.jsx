import React, { useState } from "react";
import  "aos/dist/aos.css"; // AOS styles (if you decide to use AOS again in the future)

const AboutContent = () => {
    // 1. State for hover logic
    const [isHovered, setIsHovered] = useState(false);

    // 2. Define your Image URLs
    const femaleTeacher = "https://www.quranhomeschool.com/uploads/ckeditor/eeefd9e3a2bd55145caa0b88fe834f7d.webp";
    const maleTeacher = "https://www.quranhomeschool.com/uploads/ckeditor/935015eb897e6fa9f4c22af3f1b66567.jpeg"; // Replace with your male teacher image

    return (
        <section className="bg-[#0D0D0D] text-white py-15 px-6 overflow-hidden">
            <div className="container mx-auto max-w-7xl">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[#D4AF37] font-semibold tracking-widest uppercase mb-2">Who We Are</h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        About <span className="text-[#D4AF37]">Al-Huda Academy</span>
                    </h1>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Al-Huda Quran Academy is more than an online learning platform. It is a mission-driven initiative
                        dedicated to spreading authentic Islamic knowledge and providing ethical, compassionate
                        counseling support to the Ummah worldwide.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content: Text Information */}
                    <div className="order-2 lg:order-1">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-[#D4AF37] mb-4">Our Global Reach</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    We serve students and clients across the <strong>USA, UK, Pakistan, Canada, Europe, the Middle East, and beyond</strong>,
                                    making both Quran education and counseling accessible regardless of location or background.
                                </p>
                            </div>

                            <div className="bg-[#161616] p-8 rounded-2xl border-l-4 border-[#D4AF37]">
                                <h3 className="text-xl font-bold text-white mb-2">Our Simple Goal:</h3>
                                <p className="text-[#D4AF37] text-xl font-serif italic">
                                    "To educate hearts through the Quran and support lives through guided Islamic counseling."
                                </p>
                            </div>

                            {/* Approach & Services */}
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="p-4 rounded-xl border border-[#222] hover:border-[#D4AF37]/50 transition-colors">
                                    <h4 className="text-[#D4AF37] font-bold mb-2">Authentic Education</h4>
                                    <p className="text-sm text-gray-400">Structured Quranic programs with Tajweed and Hifz focus.</p>
                                </div>
                                <div className="p-4 rounded-xl border border-[#222] hover:border-[#D4AF37]/50 transition-colors">
                                    <h4 className="text-[#D4AF37] font-bold mb-2">Ethical Counseling</h4>
                                    <p className="text-sm text-gray-400">Compassionate support rooted in Islamic values and ethics.</p>
                                </div>
                            </div>

                            {/* Highlights */}
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                                {["Certified Male & Female Teachers", "24/7 Global Flexibility", "Personalized One-on-One", "3-Day Free Trial"].map((item, i) => (
                                    <li key={i} className="flex items-center space-x-2">
                                        <span className="text-[#D4AF37]">✦</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Content: Teacher Image with Hover Effect */}
                    <div className="relative order-1 lg:order-2">
                        <div
                            className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-2 border-[#222] cursor-pointer"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {/* Main Image Layer (Female) */}
                            <img
                                src={femaleTeacher}
                                alt="Female Teacher"
                                className={`w-full h-[550px] object-cover transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                            />
                            
                            {/* Hover Image Layer (Male) */}
                            <img
                                src={maleTeacher}
                                alt="Male Teacher"
                                className={`absolute top-0 left-0 w-full h-[550px] object-cover transition-opacity duration-700 ease-in-out ${isHovered ? 'opacity-100 scale-105' : 'opacity-0'}`}
                            />

                            {/* Bottom Label Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                                <span className="bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 rounded uppercase tracking-tighter">
                                    {isHovered ? "Our Male Mentors" : "Our Female Educators"}
                                </span>
                            </div>
                        </div>

                        {/* Decorative Glows */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D4AF37] opacity-10 blur-[100px] rounded-full"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#D4AF37] opacity-20 blur-[80px] rounded-full"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutContent;