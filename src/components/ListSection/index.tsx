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
  orientation === 'left'
    ? 'border-l-2 text-left pl-0'
    : 'border-r-2 text-left pr-0';

const ListSection = ({
  title,
  items,
  orientation = 'left',
}: ListSectionProps) => (
  <section className={getClasses(orientation)}>
    <h2 className="pl-4">{title}</h2>
    <ul className="space-y-6">
      {items.map(({ title, description }) => (
        <li key={title}>
          <Slider
            title={title}
            description={description}
            orientation={orientation}
          />
        </li>
      ))}
    </ul>
  </section>
);

export default ListSection;
