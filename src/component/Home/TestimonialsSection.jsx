import React, { useEffect } from "react";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";

import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import Text from "../Shared/Text";

const TestimonialsSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: "Ahmed Khan",
      country: "Pakistan",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcbX6xq1yLuP-34OuFeXoxNEqbqkbTNSlPmw&s",
      content:
        "Al-Huda Academy completely improved my Tajweed and Quran recitation. The teachers are very professional and supportive.",
      rating: 5,
    },
    {
      name: "Aisha Rahman",
      country: "United Kingdom",
      image: "https://static.vecteezy.com/ti/fotos-kostenlos/p2/53330043-ein-muslim-schuler-tragen-abaya-niqab-traditionell-kleider-und-ziehen-das-stoff-uber-ihre-gesicht-wie-ist-ublich-im-islam-auf-gehweg-beim-ihr-schule-gebaude-foto.jpg",
      content:
        "Being in the UK, I needed flexible timings. The 24/7 classes made it so easy for me to continue learning Quran.",
      rating: 4,
    },
    {
      name: "Omar Al-Harbi",
      country: "Saudi Arabia",
      image: "https://smartcdn.gprod.postmedia.digital/ottawacitizen/wp-content/uploads/2017/09/boy1.jpg",
      content:
        "The memorization program is structured and effective. I highly recommend Al-Huda Academy to anyone serious about Hifz.",
      rating: 5,
    },
    {
      name: "Fatima Noor",
      country: "Pakistan",
      image: "https://thumbs.dreamstime.com/b/little-asian-pakistani-muslim-girl-wearing-black-hijab-beautiful-eyes-smiling-standing-arms-crossed-white-241632428.jpg",
      content:
        "The female teachers are very kind and knowledgeable. I feel more confident in my Quran reading now.",
      rating: 4,
    },
  ];

  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-[#111111] to-[#0D0D0D]"
      data-aos="fade-up"
    >
      <Container size="lg">

        {/* Section Header */}
        <div className="text-center mb-16">
          <Heading level="h2" className="mb-4 text-[#F4C430]">
            What Our Students Say
          </Heading>
          <Text color="muted" className="max-w-2xl mx-auto">
            Trusted by students worldwide. Real experiences from our satisfied learners.
          </Text>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div
                data-aos="zoom-in-left"
                data-aos-delay={index * 150}
                className="bg-[#141414] border border-[#D4AF37]/20 rounded-2xl p-8 shadow-lg hover:shadow-[#D4AF37]/10 transition duration-300 h-full flex flex-col justify-between"
              >

                {/* Student Info */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#F4C430]"
                  />
                  <div>
                    <h4 className="text-[#F4C430] font-semibold text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.country}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 mb-6 italic leading-relaxed flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#F4C430] text-[#F4C430]"
                    />
                  ))}
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination */}
        <div className="custom-pagination flex justify-center mt-10"></div>

      </Container>
    </section>
  );
};

export default TestimonialsSection;