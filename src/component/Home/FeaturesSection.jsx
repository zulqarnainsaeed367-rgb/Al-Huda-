import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Clock, Users, BookOpen, UserCheck, Calendar } from "lucide-react";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import Text from "../Shared/Text";

const FeaturesSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const stats = [
    { icon: Users, value: "1,200+", label: "Students Enrolled" },
    { icon: BookOpen, value: "15+", label: "Courses Offered" },
    { icon: UserCheck, value: "10+", label: "Certified Teachers" },
    { icon: Calendar, value: "5+", label: "Years of Experience" },
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Learn at your own pace. Classes available anytime, anywhere to fit your schedule perfectly.",
    },
    {
      icon: Users,
      title: "Expert Teachers",
      description:
        "Male and female certified Quran instructors with years of teaching experience.",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description:
        "From basic reading to advanced memorization with personalized learning paths.",
    },
  ];

  return (
    <section className="py-15 px-4 bg-gradient-to-b from-[#0D0D0D] via-[#111111] to-[#0D0D0D] relative overflow-hidden">
      <Container size="lg">

        {/* Section Heading */}
        <div className="text-center mb-20" data-aos="fade-down">
          <Heading level="h2" className="mb-4 text-[#F4C430]">
            ABOUT OUR ACADEMY
          </Heading>
          <Text color="muted" className="max-w-2xl mx-auto">
            We combine modern technology with traditional Islamic teaching
            methods to provide a premium and spiritually enriching learning
            experience.
          </Text>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 150}
                className="bg-[#111111] border border-[#D4AF37]/20 backdrop-blur-md rounded-2xl p-8 text-center shadow-lg hover:shadow-[#D4AF37]/20 transition duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#F4C430] to-[#D4AF37] flex items-center justify-center shadow-md shadow-[#D4AF37]/40">
                    <StatIcon className="w-7 h-7 text-black" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#F4C430] mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 200}
                className="bg-[#111111] border border-[#D4AF37]/20 rounded-2xl p-10 text-center transition duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#F4C430] to-[#D4AF37] flex items-center justify-center shadow-lg shadow-[#D4AF37]/40">
                    <Icon className="w-10 h-10 text-black" />
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-[#F4C430] mb-3">
                  {feature.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </Container>
    </section>
  );
};

export default FeaturesSection;