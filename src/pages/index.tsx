import { GetStaticProps } from 'next';
import React from 'react';
import Hero from '@components/Hero';
import ListSection, { ListSectionProps } from '@components/ListSection';
import Slider from '@components/Slider';

const data = {
  lists: [
    {
      title: 'Experience',
      orientation: 'right',
      items: [
        { title: 'Lead Developer - Underbelly' },
        { title: 'Software Developer - Underbelly' },
        { title: 'Software Developer - TaskEasy' },
        { title: 'Software Developer - America First Credit Union' },
      ],
    },
    {
      title: 'Education',
      orientation: 'left',
      items: [
        { title: "Bachelor's in Computer Science - Weber State University" },
      ],
    },
    {
      title: 'Skills',
      orientation: 'right',
      items: [
        { title: 'Front-end' },
        { title: 'Back-end' },
        { title: 'Project Management' },
        { title: 'Source Control' },
      ],
    },
  ],
};

export interface HomeProps {
  lists: Array<ListSectionProps>;
}

const Home = ({ lists = [] }: HomeProps) => (
  <>
    <Hero />
    {lists.map(list => (
      <ListSection key={list.title} {...list} />
    ))}
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = () => {
  return { props: data };
};
