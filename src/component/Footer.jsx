import React from "react";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Clock,
  Send,
  ArrowRight,
} from "lucide-react";

import { APP_NAME, NAVIGATION, CONTACT } from "../constants/appConfig";
import Text from "./Shared/Text";
import Heading from "./Shared/Heading";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0B0B] text-white border-t border-[#1E1E1E]">

      {/* Top CTA Section */}
      <div className="bg-[#111] py-10 border-b border-[#1E1E1E]">
        <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Heading level="h3" color="gold">
              Start Your Quran Learning Journey Today
            </Heading>
            <Text size="sm" color="secondary" className="mt-2">
              Book your free 3-day trial class with certified male & female teachers.
            </Text>
          </div>

          <Link
            to="/contact"
            className="bg-[#D4AF37] hover:bg-yellow-500 text-black px-6 py-3 rounded-md text-sm font-semibold flex items-center gap-2 transition"
          >
            Book Free Trial <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand & About */}
            <div>
              <Heading level="h4" color="gold" className="mb-4">
                {APP_NAME}
              </Heading>

              <Text size="sm" color="secondary" className="leading-relaxed mb-4">
                {APP_NAME} is a globally recognized online Quran academy committed
                to delivering structured and result-oriented Islamic education.
                We specialize in Quran Reading (Nazra), Tajweed, Hifz-ul-Quran,
                and Islamic Studies through one-on-one live sessions.
              </Text>

              <Text size="sm" color="secondary" className="leading-relaxed">
                Our certified teachers ensure personalized guidance for kids
                and adults with flexible timings available 24/7 worldwide.
              </Text>
            </div>

            {/* Navigation */}
            <div>
              <Heading level="h4" color="gold" className="mb-4">
                Quick Links
              </Heading>

              <ul className="space-y-3">
                {NAVIGATION.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-gray-400 hover:text-[#D4AF37] transition text-sm"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/privacy-policy"
                    className="text-gray-400 hover:text-[#D4AF37] transition text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-400 hover:text-[#D4AF37] transition text-sm"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Programs */}
            <div>
              <Heading level="h4" color="gold" className="mb-4">
                Our Programs
              </Heading>

              <ul className="space-y-3 text-sm text-gray-400">
                <li>• Quran Reading (Nazra)</li>
                <li>• Tajweed Mastery Course</li>
                <li>• Hifz-ul-Quran Program</li>
                <li>• Islamic Studies for Children</li>
                <li>• Basic Qaida Course</li>
                <li>• 3 Days Free Trial Class</li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <Heading level="h4" color="gold" className="mb-4">
                Contact Information
              </Heading>

              <ul className="space-y-4 text-sm text-gray-400 mb-6">
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  {CONTACT.phone}
                </li>

                <li className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-gray-300 hover:text-[#F4C430] transition-colors duration-300 font-medium break-all"
                  >
                    {CONTACT.email}
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition"
                  >
                    WhatsApp Support
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37]" />
                  Available 24/7
                </li>

                <li className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  Online Worldwide Service
                </li>
              </ul>

              {/* Newsletter */}
              <div>
                <Text size="sm" className="mb-2 text-gray-300">
                  Subscribe to Newsletter
                </Text>

                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-3 py-2 bg-[#1A1A1A] border border-[#333] text-sm rounded-l-md focus:outline-none focus:border-[#D4AF37]"
                  />
                  <button className="bg-[#D4AF37] px-4 rounded-r-md hover:bg-yellow-500 transition">
                    <Send className="w-4 h-4 text-black" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-[#1E1E1E] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Social */}
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-[#1A1A1A] hover:bg-[#D4AF37] hover:scale-110 rounded-md flex items-center justify-center transition duration-300"
                >
                  <Icon className="w-5 h-5 text-[#D4AF37] hover:text-black transition" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <Text size="sm" color="muted" className="text-center">
              © {currentYear} {APP_NAME}. All Rights Reserved.
              <span className="block md:inline md:ml-2">
              </span>
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;