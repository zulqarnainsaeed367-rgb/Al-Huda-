import React from 'react';
import { MessageCircle } from 'lucide-react';

const CallToAction = ({ text, buttonText }) => {
    return (
        <div className="text-center mt-12">
            <p className="text-xl mb-6">{text}</p>
            <a
                href="https://wa.me/923246076098"
                className="inline-flex items-center bg-gradient-to-r from-[#F4C430] to-[#D4AF37] text-[#0D0D0D] px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all"
            >
                <MessageCircle className="mr-2" />
                {buttonText}
            </a>
        </div>
    );
};

export default CallToAction;