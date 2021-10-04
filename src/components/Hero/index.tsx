import Slider from '@components/Slider';
import React from 'react';

export interface HeroProps {}

const Hero = ({}: HeroProps) => (
  <section className="border-l-2">
    <header className="">
      <h1 className="mb-24">Zack Sunderland</h1>
      <Slider
        title="Software Developer"
        description="I’m a full-stack software engineer, with a love for all things JavaScript. I’ve spent the last few years building up my front-end skills using React.js in combination with Next.js, Express.js and a host of other OSS packages. Before that I worked mostly on back-ends, using Java and before that with PHP. At the end of the day, I just love solving interesting problems with well-thought-out and intuitive solutions! So what problems can we solve together?"
      />
    </header>
  </section>
);

export default Hero;
