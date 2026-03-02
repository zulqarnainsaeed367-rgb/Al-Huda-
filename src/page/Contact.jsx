import React from 'react';
import WhatsAppContact from '../component/Contact/WhatsAppContact';
import ContactForm from '../component/Contact/ContactForm';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1A1A1A] text-[#E6E6E6] py-20 px-4">
            <div className="container mx-auto max-w-4xl">
                <h1 className="text-4xl font-bold text-[#F4C430] text-center mb-12">Contact Us</h1>

                <div className="grid md:grid-cols-2 gap-12">
                    <WhatsAppContact />
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default Contact;