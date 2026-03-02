import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappUrl = `https://wa.me/923246076098?text=Name: ${formData.name}%0AMessage: ${formData.message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="bg-[#0D0D0D] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-6">Send us a Message</h2>
            <p className="mb-6">Prefer not to use WhatsApp? Send us a message and we'll get back to you.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#D4AF37] rounded-md text-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#F4C430]"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#D4AF37] rounded-md text-[#E6E6E6] focus:outline-none focus:ring-2 focus:ring-[#F4C430]"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#F4C430] to-[#D4AF37] text-[#0D0D0D] px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;