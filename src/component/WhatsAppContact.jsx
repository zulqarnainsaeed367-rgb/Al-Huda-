import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppContact = () => {
    return (
        <div className="bg-[#0D0D0D] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">WhatsApp Contact</h2>
            <p className="mb-6">Get instant response through WhatsApp. Our teachers are available 24/7.</p>

            <div className="space-y-4 mb-6">
                <div className="flex items-center">
                    <Phone className="text-[#D4AF37] mr-3" />
                    <span>+92 324 607 6098</span>
                </div>
                <div className="flex items-center">
                    <MessageCircle className="text-[#D4AF37] mr-3" />
                    <span>Available 24/7</span>
                </div>
            </div>

            <a
                href="https://wa.me/923246076098"
                className="inline-flex items-center bg-gradient-to-r from-[#F4C430] to-[#D4AF37] text-[#0D0D0D] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all w-full justify-center"
            >
                <MessageCircle className="mr-2" />
                Contact via WhatsApp
            </a>
        </div>
    );
};

export default WhatsAppContact;