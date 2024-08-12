import React from 'react';
import Card from './Card';
import Section from './Section';

const services = [
  {
    title: 'Event Planning',
    description: 'Comprehensive planning and coordination services for events of all sizes.',
    icon: '🎉', // Example icon, can use SVGs or FontAwesome
  },
  {
    title: 'Design & Decor',
    description: 'Creative design and decor services to make your event unique and beautiful.',
    icon: '🎨',
  },
  {
    title: 'Catering',
    description: 'Delicious catering options to satisfy all your guests.',
    icon: '🍽️',
  },
  {
    title: 'Entertainment',
    description: 'Live bands, DJs, and entertainment options to keep the energy high.',
    icon: '🎵',
  },
];

const Services = () => {
  return (
    <div className="flex flex-col justify-center">
      <p className="mb-12 text-center text-white/40">
        We offer a range of services to make your event unforgettable. Discover what we can do for you.
      </p>
      <div className="flex flex-wrap justify-center items-stretch gap-8">
        {services.map((service, index) => (
          <Card key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;
