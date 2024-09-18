// Import dependencies
import React from 'react';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const ImageCarousel = () => {
  const images = [
    {
      src: 'https://cdn.pixabay.com/photo/2023/04/03/12/59/crowd-7896788_1280.jpg',
      alt: 'Crowd enjoying an event',
      description: 'A large crowd enjoying a live event.'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg',
      alt: 'Audience in a seminar',
      description: 'Audience attending an insightful seminar.'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2019/04/13/22/50/concert-4125832_1280.jpg',
      alt: 'Concert in action',
      description: 'A lively concert featuring a famous band.'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2018/07/04/00/19/champagne-3515140_1280.jpg',
      alt: 'Champagne celebration',
      description: 'A luxurious event celebration with champagne.'
    }
  ];

  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    pauseOnHover: true
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative w-[80%] mx-auto lg:mx-0 lg:w-fit h-96 flex items-center justify-center bg-transparent">
            {/* Image */}
            <img src={image.src} alt={image.alt} className=" w-[80%] mx-auto lg:mx-0 lg:w-[100%] mx-auto drop-shadow-2xl h-full object-cover rounded-lg shadow-lg" />
            
            {/* Text Overlay at Bottom */}
            <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white py-4 rounded-b-md">
              <div className="text-center px-4">
                <h3 className="text-xl font-bold">{image.alt}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
