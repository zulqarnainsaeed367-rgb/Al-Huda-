import React, { useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const FAQList = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const faqs = [
        {
            question: "How can I start classes?",
            answer: "Simply click the WhatsApp button and contact our teachers. We'll schedule your demo class and get you started immediately."
        },
        {
            question: "Are teachers male or female?",
            answer: "We have both male and female certified Quran teachers available. You can choose your preferred instructor."
        },
        {
            question: "Is there a demo class?",
            answer: "Yes! We offer a 3-day free demo class so you can experience our teaching before committing."
        },
        {
            question: "What are the class timings?",
            answer: "Classes are available 24/7. You can choose any time that works best for your schedule."
        },
        {
            question: "Do you teach children?",
            answer: "Yes, we teach students of all ages, from young children to adults."
        },
        {
            question: "What courses do you offer?",
            answer: "We offer Basic Quran Reading, Tajweed, Hifz (memorization), and specialized programs for all levels."
        }
    ];

    return (
        <div className="space-y-6">
            {faqs.map((faq, index) => (
                <div 
                    key={index}
                    data-aos="fade-right"
                    className="bg-[#0D0D0D] p-6 rounded-lg border border-[#D4AF37]"
                >
                    <h3 className="text-xl font-bold text-[#F4C430] mb-4">
                        {faq.question}
                    </h3>
                    <p className="mb-4">{faq.answer}</p>

                    <a
                        href="https://wa.me/923246076098"
                        className="inline-flex items-center text-[#D4AF37] hover:text-[#F4C430] transition-colors"
                    >
                        <MessageCircle className="mr-2" size={16} />
                        Contact us on WhatsApp
                    </a>
                </div>
            ))}
        </div>
    );
};

export default FAQList;