import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { MessageCircle, Award, Users, BookOpen } from 'lucide-react';
import Button from '../Shared/Button';
import Heading from '../Shared/Heading';
import Text from '../Shared/Text';
import Container from '../Shared/Container';
import { WHATSAPP_URL } from '../../constants/appConfig';

const HeroSection = () => {
    const slides = [
        {
            id: 1,
            title: 'Learn Quran Online',
            subtitle: 'With Expert Teachers Available 24/7',
            image: 'https://www.shutterstock.com/image-photo/turkish-child-sitting-crosslegged-reading-260nw-2619938135.jpg',
            cta: 'Start Learning',
        },
        {
            id: 2,
            title: 'Expert Islamic Education',
            subtitle: 'Male & Female Certified Instructors',
            image: 'https://static.vecteezy.com/system/resources/thumbnails/071/617/416/small/muslim-mother-and-young-son-reading-the-quran-together-in-a-serene-outdoor-setting-free-photo.jpg',
            cta: 'Book Demo Class',
        },
        {
            id: 3,
            title: 'Your Journey Begins Here',
            subtitle: 'Comprehensive Quran Learning Programs',
            image: 'https://www.shutterstock.com/image-photo/closeup-shot-2-emirati-child-260nw-2709502009.jpg',
            cta: 'Explore Courses',
        },
    ];

    return (
        <section className="relative w-full h-screen max-h-[600px] md:max-h-[800px] overflow-hidden">
            {/* Swiper Carousel */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                effect="fade"
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-full"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id} className="relative w-full h-full">
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url('${slide.image}')`,
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#0D0D0D] to-transparent opacity-80"></div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full flex items-center px-4">
                            <Container size="lg" className="w-full">
                                <div className="max-w-2xl">
                                    <Heading level="h1" color="gold" className="mb-4 text-5xl md:text-6xl lg:text-7xl animate-fade-in">
                                        {slide.title}
                                    </Heading>
                                    <Text size="xl" color="secondary" className="mb-8 max-w-xl">
                                        {slide.subtitle}
                                    </Text>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            href={WHATSAPP_URL}
                                            variant="primary"
                                            size="large"
                                            icon={MessageCircle}
                                        >
                                            {slide.cta}
                                        </Button>
                                        <Button
                                            href="/how-it-works"
                                            variant="secondary"
                                            size="large"
                                        >
                                            Learn More
                                        </Button>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Styling for Swiper */}
            <style>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: #F4C430;
                    background: rgba(13, 13, 13, 0.7);
                    border-radius: 50%;
                    width: 50px;
                    height: 50px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid #D4AF37;
                    transition: all 0.3s ease;
                }

                .swiper-button-next:hover,
                .swiper-button-prev:hover {
                    background: rgba(212, 175, 55, 0.3);
                    color: #F4C430;
                    border-color: #F4C430;
                }

                .swiper-button-next::after,
                .swiper-button-prev::after {
                    font-size: 20px;
                }

                .swiper-pagination {
                    bottom: 30px;
                }

                .swiper-pagination-bullet {
                    background: rgba(255, 255, 255, 0.5);
                    width: 12px;
                    height: 12px;
                    transition: all 0.3s ease;
                }

                .swiper-pagination-bullet-active {
                    background: #F4C430;
                    width: 30px;
                    border-radius: 6px;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out;
                }
            `}</style>
        </section>
    );
};

export default HeroSection;