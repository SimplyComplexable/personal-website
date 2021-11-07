import React from 'react';
import { classname } from '@lib/classname';
import style from './style.module.css';

export interface SliderProps {
  title: string;
  description: string;
  orientation?: 'left' | 'right';
}

const Slider = ({ title, description, orientation = 'left' }: SliderProps) => {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);

  const handleClick = React.useCallback(() => {
    setOpen(curr => !curr);
    setHover(false);
  }, [setOpen]);

  return (
    <div className={style.section} onClick={handleClick}>
      <article
        className={classname(
          style.article,
          style[orientation],
          open && style.active,
          hover && style.hover,
        )}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={() => {
          if (!open && !hover) {
            setHover(true);
          }
        }}
      >
        <header className={style.content}>
          <h3>{title}</h3>
          <svg viewBox="0 0 39 71">
            <path
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              d="M3.536 3l31.819 31.82M3.45 66.715l31.82-31.82"
            />
          </svg>
        </header>
        <div className={style.content}>
          <p>{description}</p>
        </div>
      </article>
    </div>
  );
};

export default Slider;
