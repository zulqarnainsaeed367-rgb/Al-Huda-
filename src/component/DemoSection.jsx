import React from 'react';
import { MessageCircle } from 'lucide-react';

const DemoSection = () => {
    return (
        <div className="text-center mb-12">
            <p className="text-xl mb-6">Try our 3-day free demo class!</p>
            <a
                href="https://wa.me/923246076098?text=I%20want%20to%20try%20the%20free%20demo%20class"
                className="inline-flex items-center bg-gradient-to-r from-[#F4C430] to-[#D4AF37] text-[#0D0D0D] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
            >
                <MessageCircle className="mr-2" />
                Book Free Demo
            </a>
        </div>
    );
};

export default DemoSection;