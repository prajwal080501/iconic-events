import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileIcon from "./components/MobileIcon";
import Mobilenav from "./components/Mobilenav";
import Section from "./components/Section";
import Services from "./components/Services";
import TestimonialSlider from './components/TestimonialSlider'
import { useState } from 'react';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [component, setComponent] = useState('service');
  const handleComponent = (componentName) => {
    console.log(componentName, 'componentName')
    setComponent(componentName)
  }
  return (
    <div className='bg-zinc-900  h-fit snap-container'>
      <Header handleComponent={handleComponent} openModal={openModal} />
      <MobileIcon />
      <Contact isOpen={isModalOpen} onClose={closeModal} />
      <section className="snap-section h-screen">
        <Hero />
      </section>
      <Section title={component.charAt(0).toUpperCase() + component.slice(1)}>
        {component === 'service' ? <Services /> : ""}
        {component === 'testimonials' && <TestimonialSlider />}
      </Section>
      <Footer brandName={'Iconic Events'} />
      <Mobilenav openModal={openModal} />
    </div>
  )
}

export default App
