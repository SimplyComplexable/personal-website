import Slider from '@components/Slider';
import React from 'react';

export interface ListItem {
  title: string;
  description: string;
}

export interface ListSectionProps {
  title: string;
  items: Array<ListItem>;
  orientation: 'left' | 'right';
}

const getClasses = (orientation: ListSectionProps['orientation']) =>
  orientation === 'left' ? 'border-l-2 ext-left' : 'border-r-2 text-right';

const ListSection = ({
  title,
  items,
  orientation = 'left',
}: ListSectionProps) => (
  <section className={getClasses(orientation)}>
    <h2>{title}</h2>
    <ul className="space-y-6 font-light">
      {items.map(({ title, description }) => (
        <li key={title}>
          <Slider title={title} description={description} />
        </li>
      ))}
    </ul>
  </section>
);

export default ListSection;
