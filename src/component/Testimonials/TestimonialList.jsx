import React, { useEffect } from 'react';
import { MessageCircle, Star } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialList = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });
    }, []);

    const testimonials = [
        {
            name: "Ahmed Khan",
            role: "Student",
            review: "Al-Huda Academy transformed my Quran reading completely. The teachers are patient and knowledgeable. I completed the basic course in 4 months!",
            rating: 5,
            image: "👨‍🎓"
        },
        {
            name: "Fatima Ahmed",
            role: "Parent",
            review: "My daughter memorizes 2 pages daily with her teacher. The 24/7 availability is perfect for our busy schedule. Highly recommended!",
            rating: 5,
            image: "👩‍👧"
        },
        {
            name: "Omar Ali",
            role: "Student",
            review: "The Tajweed course was excellent. I now recite Quran with proper pronunciation. The female teacher was very encouraging.",
            rating: 5,
            image: "👨‍💼"
        },
        {
            name: "Aisha Rahman",
            role: "Student",
            review: "Started with basic reading and now doing Hifz. The teachers make learning fun and engaging. Best decision ever!",
            rating: 5,
            image: "👩‍🎓"
        },
        {
            name: "Muhammad Saeed",
            role: "Parent",
            review: "My son completed half Quran memorization in 1.5 years. The male teacher's dedication is remarkable.",
            rating: 5,
            image: "👨‍👦"
        },
        {
            name: "Zara Iqbal",
            role: "Student",
            review: "The demo class convinced me to join. No pressure, just pure dedication to teaching Quran properly.",
            rating: 5,
            image: "👩‍💻"
        },
        {
            name: "Hassan Malik",
            role: "Student",
            review: "Outstanding teaching quality! My Quranic understanding has improved tremendously. The monthly progress reports keep me motivated.",
            rating: 5,
            image: "👨‍🎓"
        },
        {
            name: "Noor Khan",
            role: "Student",
            review: "I was nervous about learning online, but the teachers made me feel comfortable. Now I recite with confidence and proper Tajweed!",
            rating: 5,
            image: "👩‍🎓"
        },
        {
            name: "Bilal Ahmed",
            role: "Parent",
            review: "My kids love their online Quran classes. The flexible timings and personalized approach have made all the difference. Worth every penny!",
            rating: 5,
            image: "👨‍👧‍👦"
        },
        {
            name: "Maryam Hassan",
            role: "Student",
            review: "The best investment in my Islamic education! Teachers are certified and truly passionate about helping students succeed.",
            rating: 5,
            image: "👩‍🎓"
        },
        {
            name: "Ibrahim Nasir",
            role: "Student",
            review: "From zero Quranic knowledge to fluent reader in 6 months! The structured curriculum and patient teachers made it possible.",
            rating: 5,
            image: "👨‍🎓"
        },
        {
            name: "Layla Farooq",
            role: "Parent",
            review: "My teenager was skeptical about online learning. Now she's completing Surah memorization weekly. The transparency is amazing!",
            rating: 5,
            image: "👩‍👧"
        }
    ];

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    data-aos="flip-up"
                    data-aos-delay={index * 100}
                    className="bg-[#0D0D0D] p-6 rounded-lg border border-[#D4AF37] hover:border-[#F4C430] transition-colors duration-300"
                >
                    <div className="flex items-center mb-4">
                        <div className="text-4xl mr-4">{testimonial.image}</div>
                        <div>
                            <h3 className="text-lg font-bold text-[#F4C430]">
                                {testimonial.name}
                            </h3>
                            <p className="text-[#D4AF37]">
                                {testimonial.role}
                            </p>
                        </div>
                    </div>

                    <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                                key={i}
                                className="text-[#F4C430] fill-current"
                                size={16}
                            />
                        ))}
                    </div>

                    <p className="mb-4 text-gray-300">
                        "{testimonial.review}"
                    </p>

                    <a
                        href="https://wa.me/923246076098"
                        className="inline-flex items-center text-[#D4AF37] hover:text-[#F4C430] transition-colors text-sm"
                    >
                        <MessageCircle className="mr-1" size={14} />
                        Contact Teacher
                    </a>
                </div>
            ))}
        </div>
    );
};

export default TestimonialList;