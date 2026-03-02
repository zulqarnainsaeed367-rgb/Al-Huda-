import React from 'react';
import { MessageCircle } from 'lucide-react';

const CourseList = () => {
    const courses = [
        {
            title: "Basic Quran Reading",
            description: "Learn to read Quran with proper pronunciation",
            ageGroup: "All ages",
            duration: "3-6 months"
        },
        {
            title: "Tajweed Course",
            description: "Master the rules of Quran recitation",
            ageGroup: "8+ years",
            duration: "6-12 months"
        },
        {
            title: "Hifz Program",
            description: "Memorize the entire Holy Quran",
            ageGroup: "10+ years",
            duration: "2-3 years"
        },
        {
            title: "Quran Memorization",
            description: "Short surah memorization program",
            ageGroup: "All ages",
            duration: "Flexible"
        }
    ];

    return (
        <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
                <div key={index} className="bg-[#0D0D0D] p-6 rounded-lg border border-[#D4AF37]">
                    <h3 className="text-2xl font-bold text-[#F4C430] mb-4">{course.title}</h3>
                    <p className="mb-4">{course.description}</p>
                    <div className="mb-4">
                        <p><span className="text-[#D4AF37]">Age Group:</span> {course.ageGroup}</p>
                        <p><span className="text-[#D4AF37]">Duration:</span> {course.duration}</p>
                    </div>
                    <a
                        href={`https://wa.me/923246076098?text=I%20am%20interested%20in%20the%20${course.title}%20course`}
                        className="inline-flex items-center bg-gradient-to-r from-[#F4C430] to-[#D4AF37] text-[#0D0D0D] px-4 py-2 rounded font-bold hover:shadow-lg transition-all"
                    >
                        <MessageCircle className="mr-2" />
                        Enroll Now
                    </a>
                </div>
            ))}
        </div>
    );
};

export default CourseList;