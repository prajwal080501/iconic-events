import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSlider = ({ testimonials, autoSlide = true, slideInterval = 5000 }) => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;
  const slideIntervalRef = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  }, [length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  }, [length]);

  useEffect(() => {
    if (autoSlide) {
      slideIntervalRef.current = setInterval(nextSlide, slideInterval);
      return () => clearInterval(slideIntervalRef.current);
    }
  }, [autoSlide, nextSlide, slideInterval]);

  const handleMouseEnter = () => {
    if (autoSlide) {
      clearInterval(slideIntervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoSlide) {
      slideIntervalRef.current = setInterval(nextSlide, slideInterval);
    }
  };

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  return (
    <div
      className="relative w-full max-w-2xl  mx-auto p-4 mt-10 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Testimonial Slider"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex justify-center"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${length}`}
          >
            <div className="w-[90%] mx-auto bg-gradient-to-b from-orange-500/70 drop-shadow-black drop-shadow-2xl to-orange-700/50 text-white shadow-lg rounded-lg p-8 flex flex-col gap-6 items-center text-center">
              <div className='bg-black/50 rounded-lg flex items-center flex-col p-2'>
                <div className='text-left'>
                  <FaQuoteLeft className="text-5xl text-white" />
                </div>
                {/* <img
                src={testimonial.avatar}
                alt={`${testimonial.name}'s avatar`}
                className="w-fit h-fit rounded-full mb-4"
              /> */}

                <div className=' flex flex-col gap-2 items-center p-2'>
                  <p className="text-gray-100 p-2 rounded-lg font-medium text-lg mb-4">"{testimonial.quote}"</p>
                  <p className="text-orange-400 w-fit p-2 rounded font-semibold">{testimonial.name}</p>
                  {/* <p className="text-white w-fit font-bold   rounded p-2 text-sm">{testimonial.title}</p> */}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
        aria-label="Previous Testimonial"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full focus:outline-none"
        aria-label="Next Testimonial"
      >
        &#10095;
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${idx === current ? 'bg-orange-500' : 'bg-gray-300'
              } focus:outline-none`}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

TestimonialSlider.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  autoSlide: PropTypes.bool,
  slideInterval: PropTypes.number,
};

export default React.memo(TestimonialSlider);
