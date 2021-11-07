import Slider from '@components/Slider';
import React from 'react';

export interface HeroProps {
  title: string;
  name: string;
  description: string;
}

const Hero = ({ name, title, description }: HeroProps) => (
  <section className="border-l-2 pl-0">
    <header className="">
      <h1 className="mb-24 pl-4">{name}</h1>
      <Slider title={title} description={description} />
    </header>
  </section>
);

export default Hero;
