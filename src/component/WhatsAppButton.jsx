import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants/appConfig';

const WhatsAppButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-[#25D366] to-[#20BA63] text-white px-6 py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center gap-3"
        >
            <MessageCircle className="w-6 h-6" />
            <span className={`font-semibold text-sm whitespace-nowrap hidden sm:inline transition-all duration-300`}>
                Chat with us
            </span>
        </a>
    );
};

export default WhatsAppButton;