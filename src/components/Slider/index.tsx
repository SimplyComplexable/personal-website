import React from 'react';
import { classname } from '@lib/classname';
import style from './index.module.css';

export interface SliderProps {
  title: string;
  description: string;
}

const Slider = ({ title, description }: SliderProps) => {
  const [open, setOpen] = React.useState(false);
  const [animation, setAnimation] = React.useState<string>();

  const handleClick = React.useCallback(() => {
    setOpen(curr => {
      setAnimation(!curr ? style.slidein : style.slideinBackwards);
      return !curr;
    });
  }, [setOpen, setAnimation]);
  console.log(animation);

  return (
    <div className={style.section} onClick={handleClick}>
      <article className={classname(style.article, open && style.active)}>
        <header>
          <h3>{title}</h3>
        </header>
        <div className={style.wrapper}>
          <div className={classname(style.content)}>
            <p>{description}</p>
          </div>
          <div
            className={classname(style.content, animation)}
            onMouseEnter={() => setAnimation(style.hover)}
            onMouseLeave={() => setAnimation(style.hoverOut)}
          >
            <p>{description}</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Slider;
