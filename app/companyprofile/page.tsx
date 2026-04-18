"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const profilePages = [
  { id: 1, src: '/images/profile/page_1.png', title: 'Corporate Cover' },
  { id: 2, src: '/images/profile/page_2.png', title: 'Introduction' },
  { id: 3, src: '/images/profile/page_3.png', title: 'Our Mission' },
  { id: 4, src: '/images/profile/page_4.png', title: 'Services Overview' },
  { id: 5, src: '/images/profile/page_5.png', title: 'Global Network' },
  { id: 6, src: '/images/profile/page_6.png', title: 'Sea Freight' },
  { id: 7, src: '/images/profile/page_7.png', title: 'Air Freight' },
  { id: 8, src: '/images/profile/page_8.png', title: 'Customs Clearance' },
  { id: 9, src: '/images/profile/page_9.png', title: 'Warehousing' },
  { id: 10, src: '/images/profile/page_10.png', title: 'Buyer\'s Consolidation' },
  { id: 11, src: '/images/profile/page_11.png', title: 'Project Cargo' },
  { id: 12, src: '/images/profile/page_12.png', title: 'Our Partners' },
  { id: 13, src: '/images/profile/page_13.png', title: 'Certifications' },
  { id: 14, src: '/images/profile/page_14.png', title: 'Client Testimonials' },
  { id: 15, src: '/images/profile/page_15.png', title: 'Contact Information' },
  { id: 16, src: '/images/profile/page_16.png', title: 'Global Presence' },
  { id: 17, src: '/images/profile/page_17.png', title: 'Case Studies' },
  { id: 18, src: '/images/profile/page_18.png', title: 'Team' },
  { id: 19, src: '/images/profile/page_19.png', title: 'Vision' },
  { id: 20, src: '/images/profile/page_20.png', title: 'Back Cover' },
];

const FallingStar = ({ delay }: { delay: number }) => (
  <motion.div
    initial={{ y: -20, opacity: 0, x: Math.random() * 100 + '%' }}
    animate={{ 
      y: ['0vh', '80vh'], 
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1, 0.5]
    }}
    transition={{ 
      duration: 3 + Math.random() * 2, 
      repeat: Infinity, 
      delay: delay,
      ease: "linear"
    }}
    className="absolute text-yellow-400 text-xl pointer-events-none z-20"
  >
    ★
  </motion.div>
);

export default function ProfilePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    setStars(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === profilePages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? profilePages.length - 1 : prev - 1));
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-hidden relative">
      <section className="pt-16 pb-8 px-6 text-center relative z-10">
        <motion.h1 
          animate={{ rotateY: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{ 
            perspective: '1000px',
            textShadow: '0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)'
          }}
          className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4 text-white"
        >
          Company Profile
        </motion.h1>
        <p className="text-blue-300 text-sm md:text-lg font-medium tracking-widest uppercase">
          Jilani Shipping International
        </p>
      </section>

      <section className="relative max-w-5xl mx-auto px-2 md:px-4 py-4 md:py-8 z-10">
        <div className="relative aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/10] bg-white rounded-xl md:rounded-2xl shadow-2xl overflow-hidden border-4 md:border-8 border-slate-800">
          <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black/5">
            {stars.map((i) => (
              <FallingStar key={i} delay={i * 0.5} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center p-4 md:p-8"
            >
              <img 
                src={profilePages[currentIndex].src} 
                alt={profilePages[currentIndex].title}
                className="max-w-full max-h-full object-contain shadow-sm relative z-10"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-y-0 left-0 flex items-center z-30">
            <button 
              onClick={prevSlide}
              className="bg-black/30 hover:bg-blue-600 p-2 md:p-4 transition-colors rounded-r-lg"
            >
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center z-30">
            <button 
              onClick={nextSlide}
              className="bg-black/30 hover:bg-blue-600 p-2 md:p-4 transition-colors rounded-l-lg"
            >
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-2">
            {profilePages.map((_, idx) => (
              <div 
                key={idx}
                className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === idx ? 'w-8 bg-blue-500' : 'w-2 bg-slate-700'}`}
              />
            ))}
          </div>
          <div className="bg-slate-800 px-6 py-2 rounded-full border border-slate-700 font-mono text-blue-400 text-xs md:text-sm">
            PAGE {currentIndex + 1} OF {profilePages.length} : <span className="text-white uppercase font-bold">{profilePages[currentIndex].title}</span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            whileInView={{ rotateY: [0, 10, -10, 0] }}
            className="p-6 md:p-12 bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl md:rounded-3xl border border-blue-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <h2 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 italic" style={{ textShadow: '2px 2px 0px #000' }}>
              "Safe and swift logistics service with minimum cost."
            </h2>
            <div className="h-1 w-16 md:w-24 bg-blue-500 mx-auto mb-4 md:mb-6"></div>
            <p className="text-slate-300 text-sm md:text-lg leading-relaxed">
              Jilani Shipping International is dedicated to providing professional international 
              freight forwarding and integrated logistics solutions.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
