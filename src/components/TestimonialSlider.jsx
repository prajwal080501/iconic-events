import React, { useEffect, useState } from 'react';
// import './TestimonialSlider.css'; // Include your custom CSS if needed

const testimonials = [
  { id: 1, quote: "This service is amazing!", author: "John Doe" },
  { id: 2, quote: "I loved the experience.", author: "Jane Smith" },
  { id: 3, quote: "Highly recommend to everyone!", author: "Alice Johnson" },
  { id: 4, quote: "Exceptional quality and service.", author: "Bob Brown" },
];

const TestimonialSlider = ({ autoPlay = true, autoPlayTime = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, autoPlayTime);

      return () => clearInterval(interval);
    }
  }, [autoPlay, autoPlayTime]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative w-full flex justify-center lg:w-1/2 max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`flex-shrink-0 w-full p-6 bg-[#C69749] rounded-lg shadow-lg rounded-lg transform transition-transform duration-500 ease-in-out ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
          >
            <blockquote className="text-xl italic text-white">
              "{testimonial.quote}"
            </blockquote>
            <p className="mt-4 bg-zinc-900 text-white p-2 rounded-lg w-fit text-lg font-semibold font-bold">
              - {testimonial.author}
            </p>
          </div>
        ))}
      </div>

      {/* <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        &larr;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-800 text-white rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
      >
        &rarr;
      </button> */}
    </div>
  );
};

export default TestimonialSlider;
