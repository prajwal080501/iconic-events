import Maps from './components/Maps'
import {
  Hero,
  MobileIcon,
  Section,
  Services,
  Divider,
  TestimonialSlider,
  ImageCarousel
} from './components/components'
import { testimonials } from "./data/data"
function App() {
  return (
    <div className='bg-zinc-900 h-fit snap-container'>
      <MobileIcon />
      <section className="snap-section min-h-screen md:h-screen">
        <Hero />
      </section>
      <Section title="Services">
        <Services />
      </Section>
        <Divider className={'bg-orange-500'} />
      <Section title="Hear what our customers say" subtitle="Valuable feedbacks from customer">
        <TestimonialSlider testimonials={testimonials} />
      </Section>
      <Divider className={'bg-orange-500'} />
      <Section title="Our Past Events" subtitle="Experience our past events">
        <ImageCarousel />
      </Section>
    </div>
  );

}

export default App
