import React from 'react';
import DemoSection from '../component/Courses/DemoSection';
import CourseList from '../component/Courses/CourseList';

const Courses = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#000000] to-[#1A1A1A] text-[#E6E6E6]">
            <DemoSection />
            <div className="container mx-auto py-12 max-w-6xl">
                <CourseList />
            </div>
        </div>
    );
};

export default Courses;