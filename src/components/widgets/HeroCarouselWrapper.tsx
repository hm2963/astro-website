import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles directly in the TSX component
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import type { ImageMetadata } from 'astro';

export interface SlideData {
  title: string;
  titleHighlight: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
  imageSrc: string; 
  imageAlt: string;
}

export interface HeroCarouselWrapperProps {
  slides: SlideData[];
}

const HeroCarouselWrapper: React.FC<HeroCarouselWrapperProps> = ({ slides }) => {
  console.log('HeroCarouselWrapper received slides:', JSON.stringify(slides, null, 2)); 

  const carouselRef = useRef<HTMLDivElement>(null);
  // Generate a stable carouselId for the component instance
  const [carouselId] = React.useState(() => `hero-carousel-react-${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    if (!carouselRef.current) return;

    console.log('Swiper container ref before init:', carouselRef.current);

    const swiperInstance = new Swiper(carouselRef.current, {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      observer: true,
      observeParents: true,
      watchOverflow: true,
      // init: false, // Removed: Allow Swiper to initialize immediately
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination', // Swiper will find this within carouselRef.current
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next', // Simpler selector, Swiper finds it in carouselRef.current
        prevEl: '.swiper-button-prev', // Simpler selector, Swiper finds it in carouselRef.current
      },
    });
    console.log('React Swiper instance created and initialized (full config):', swiperInstance);

    // Give a brief moment for content (images, fonts) to potentially settle, then update Swiper's measurements
    const updateTimer = setTimeout(() => {
      if (swiperInstance && !swiperInstance.destroyed) {
        swiperInstance.update();
        console.log('React Swiper instance updated after short delay.');
      }
    }, 150); // 150ms delay, can be adjusted

    return () => {
      clearTimeout(updateTimer);
      if (swiperInstance && !swiperInstance.destroyed) {
        swiperInstance.destroy(true, true);
      }
    };
  }, [slides, carouselId]);

  return (
    <div ref={carouselRef} className="swiper relative overflow-hidden w-full h-[70vh]" id={carouselId}> {/* Changed min-h to h and removed min-h-[500px] */}
      <div className="swiper-wrapper flex transition-transform">
        {slides.map((slide, index) => (
          <div className="swiper-slide" key={index}>
            {/* Removed Slide #X debug label */}
            <section className="relative py-20 md:py-32 lg:py-40 bg-transparent text-white overflow-hidden h-full flex items-center">
              <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                  <h2 className="text-xs sm:text-sm uppercase tracking-widest font-medium text-gray-300 mb-3">{slide.subtitle}</h2>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                    {slide.title} <span className="text-white">{slide.titleHighlight}</span>
                  </h1>
                  <a
                    href={slide.buttonHref}
                    className="inline-block bg-white text-[#160e2b] hover:bg-gray-200 px-6 py-3 text-sm sm:text-base font-semibold rounded-md shadow-md transition-colors"
                  >
                    {slide.buttonText}
                  </a>
                </div>
                <div className="relative flex justify-center md:justify-end mt-10 md:mt-0">
                  {slide.imageSrc ? (
                    <img
                      src={slide.imageSrc} 
                      alt={slide.imageAlt}
                      width={450}
                      height={450}
                      className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
                    />
                  ) : null}
                </div>
              </div>
            </section>
          </div>
        ))}
      </div>
      {/* Ensure these elements are correctly targeted by Swiper using the carouselId */}
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </div>
  );
};

export default HeroCarouselWrapper;