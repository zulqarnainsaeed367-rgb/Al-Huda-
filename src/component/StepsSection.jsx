import React from 'react';

const StepsSection = () => {
    const steps = [
        {
            step: 1,
            title: "Visit Our Website",
            description: "Browse our courses and learn about our teaching methods."
        },
        {
            step: 2,
            title: "Click WhatsApp Icon",
            description: "Contact us directly through WhatsApp for instant response."
        },
        {
            step: 3,
            title: "Book Demo Class",
            description: "Schedule your free 3-day demo class with a teacher."
        },
        {
            step: 4,
            title: "Start Learning",
            description: "Begin your Quran journey with personalized instruction."
        }
    ];

    return (
        <div className="space-y-8">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center bg-[#0D0D0D] p-6 rounded-lg border-l-4 border-[#D4AF37]">
                    <div className="bg-[#D4AF37] text-[#0D0D0D] rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-6">
                        {step.step}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#F4C430] mb-2">{step.title}</h3>
                        <p>{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default StepsSection;