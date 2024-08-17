import {Navbar, Hero, About, Experience, Tech, Works, FeedBacks, Contact, StarsCanvas} from '@/components';

export default function Home() {
  return (
   <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-current">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <FeedBacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
   </div>
  );
}
