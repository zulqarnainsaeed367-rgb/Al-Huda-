import React from "react";
import { MessageCircle, Sparkles, Star } from "lucide-react";

const DemoSection = () => {
  return (
    <div className="relative w-full min-h-[550px] flex items-center justify-center mb-8 overflow-hidden rounded-[2.5rem] shadow-2xl group border border-white/5">

      {/* ================= Background Video Layer ================= */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
        >
          <source
            src="https://videos.pexels.com/video-files/8488700/8488700-sd_960_540_25fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>
      </div>

      {/* ================= Content Layer ================= */}
      <div className="relative z-10 px-6 py-6 md:py-12 text-center max-w-4xl mx-auto bg-black/20 backdrop-blur-md rounded-[3rem] border border-white/10 m-4 shadow-2xl">

        {/* Top Badge */}
        <div className="inline-flex items-center space-x-0 bg-[#F4C430]/20 border border-[#F4C430]/40 px-4 py-2 rounded-full mb-8 animate-pulse">
          <Sparkles className="w-4 h-4 text-[#F4C430]" />
          <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-[0.2em]">
            Limited Time Opportunity
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-7xl font-black mb-6 text-white leading-tight drop-shadow-lg">
          Ready to Elevate Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4C430] via-[#D4AF37] to-[#F4C430] animate-pulse">
            Quranic Journey?
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed">
          Experience the difference with our{" "}
          <span className="text-[#F4C430] font-bold underline decoration-2 underline-offset-8">
            3-Day Free Demo
          </span>
          . Expert tutors and personalized attention await you.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-8">
          <a
            href="https://wa.me/923246076098?text=I%20want%20to%20try%20the%20free%20demo%20class"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center bg-gradient-to-r from-[#F4C430] via-[#D4AF37] to-[#F4C430] text-[#0D0D0D] px-12 py-5 rounded-full font-black text-xl shadow-[0_0_40px_rgba(244,196,48,0.4)] hover:shadow-[0_0_60px_rgba(244,196,48,0.7)] hover:-translate-y-2 active:scale-95 transition-all duration-300"
          >
            <MessageCircle className="mr-3 w-7 h-7 group-hover:rotate-12 transition-transform" />
            START FREE DEMO NOW
          </a>

          {/* Rating */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center space-x-1 text-[#F4C430]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="text-white/80 text-sm font-semibold tracking-wide uppercase">
              4.9/5 Rating from 500+ Students
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent"></div>
    </div>
  );
};

export default DemoSection;