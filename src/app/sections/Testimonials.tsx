'use client';

import { motion } from 'framer-motion';
import Slider from 'react-infinite-logo-slider';
import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [sliderWidth, setSliderWidth] = useState('100%'); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSliderWidth('50%'); 
      } else {
        setSliderWidth('100%');
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); 
    };
  }, []);

  const testimonials = [
    {
      name: 'Jane Doe',
      role: 'Product Manager',
      quote:
        'Christian is an exceptional developer who delivered exactly what we needed — fast and beautifully designed.',
    },
    {
      name: 'John Smith',
      role: 'CTO, StartupX',
      quote:
        'The systems he built for us boosted our efficiency by 40%. Highly recommend working with him!',
    },
    {
      name: 'Emily Chen',
      role: 'Designer',
      quote:
        'A fantastic collaborator. Christian made our ideas come to life better than we imagined.',
    },
    {
      name: 'Mark Rivera',
      role: 'CEO, SaaSPro',
      quote:
        'Christian’s work ethic and creativity helped us land our biggest client yet.',
    },
  ];

  return (
    <section id="testimonials" className="px-6 sm:px-20 py-24 relative">
      <div className="text-center text-white max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#99f2c8] to-[#bcf5da] bg-clip-text text-transparent">
          Testimonials
        </h2>
        <p className="text-white/70">What people say about working with me</p>
      </div>

      <Slider
        width={sliderWidth} 
        duration={150}
        pauseOnHover={false}
        blurBorders={false}
        blurBorderColor={'#1B1B1B'}
      >
        {testimonials.map((testimonial, index) => (
          <Slider.Slide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="rounded-2xl p-8 text-center w-full max-w-sm mx-auto"
            >
              <p className="text-lg italic text-white/80 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <h3 className="text-xl font-semibold text-[#99f2c8]">
                {testimonial.name}
              </h3>
              <p className="text-sm text-white/50">{testimonial.role}</p>
            </motion.div>
          </Slider.Slide>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
