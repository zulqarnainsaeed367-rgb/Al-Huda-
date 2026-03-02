import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './common/ScrollToTop';
import Navbar from './common/Navbar';
import Footer from './component/Footer';
import WhatsAppButton from './component/WhatsAppButton';
import Home from './page/Home';
import About from './page/About';
import Courses from './page/Courses';
import HowItWorks from './page/HowItWorks';
import Contact from './page/Contact';
import FAQs from './page/FAQs';
import Testimonials from './page/Testimonials';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0D0D0D]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;