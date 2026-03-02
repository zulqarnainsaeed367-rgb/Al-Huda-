import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Card from "../Shared/Card";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import Text from "../Shared/Text";

const g2 = "/g2.png";
const g7 = "/g7.png";

const HeroFeaturesInfo = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const features = [
    {
      img: "https://cdn.prod.website-files.com/669d056a8b4ad6c79fa3316d/692b56c979329ead6db5dd6e_Untitled%20design.jpg",
      title: "Certified Quran Teachers",
      description:
        "Qualified male and female instructors providing authentic Tajweed and Quran education.",
    },
    {
      img: "https://quranbeautyonline.com/wp-content/uploads/2025/09/The-Best-Online-Quran-Tajweed-Courses-600x400.webp",
      title: "Live Online Classes",
      description:
        "Interactive one-on-one and group classes available worldwide via Zoom & Meet.",
    },
    {
      img: g2,
      title: "Complete Quran Courses",
      description:
        "Nazra, Tajweed, Hifz, Translation, and Islamic Studies programs for all ages.",
    },
    {
      img: g7,
      title: "Progress & Certification",
      description:
        "Regular progress reports and certificates upon successful course completion.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-[#0D0D0D]">
      <Container size="lg">

        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <Heading
            level="h2"
            className="text-[#F4C430] mb-4 tracking-tight text-3xl md:text-4xl font-extrabold"
          >
            Why Choose Our Online Quran Academy?
          </Heading>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F4C430] to-[#FFD700] mx-auto mb-6 rounded-full"></div>
          <Text
            color="secondary"
            size="md"
            className="max-w-2xl mx-auto opacity-80 text-lg"
          >
            Providing authentic Islamic education with modern online learning methods
            tailored for students across the globe.
          </Text>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20
                         hover:border-yellow-400 hover:shadow-[0_15px_35px_rgba(244,196,48,0.25)]
                         transform transition-transform duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative w-full overflow-hidden h-60">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <Heading
                  level="h4"
                  className="text-yellow-400 text-xl font-bold mb-3"
                >
                  {feature.title}
                </Heading>
                <Text
                  color="secondary"
                  size="sm"
                  className="text-gray-200 opacity-90 leading-relaxed"
                >
                  {feature.description}
                </Text>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-full bg-yellow-400 opacity-20 blur-3xl animate-pulse"></div>
            </Card>
          ))}
        </div>

      </Container>
    </section>
  );
};

export default HeroFeaturesInfo;