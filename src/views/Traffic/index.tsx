import { useTimeout } from '@hooks/useTimeout';
import React from 'react';
import style from './style.module.css';

export interface TrafficProps {}
const timeRanges = {
  0: [30, 50],
  1: [20, 40],
  2: [20, 35],
  3: [40, 90],
  4: [80, 120],
  5: [150, 220],
  6: [300, 500],
  7: [400, 600],
  8: [300, 500],
  9: [300, 500],
  10: [200, 500],
  11: [200, 300],
  12: [400, 600],
  13: [400, 600],
  14: [200, 300],
  15: [200, 300],
  16: [400, 500],
  17: [500, 700],
  18: [400, 600],
  19: [300, 500],
  20: [200, 400],
  21: [200, 400],
  22: [100, 250],
  23: [100, 150],
};

type Hour = keyof typeof timeRanges;

const getRandomDriverCount = (hour: Hour) => {
  const [min, max] = timeRanges[hour];
  return Math.ceil(Math.random() * (max - min) + min);
};
const SECONDS_PER_HOUR = 60 * 60;

const SECONDS_PER_SECOND = 60 * 10;

const startTime = Math.ceil(Date.now() / 1000);

const getHour = () => {
  const elapsedSeconds = Math.ceil(Date.now() / 1000) - startTime;
  const representedSeconds = elapsedSeconds * SECONDS_PER_SECOND;
  return (Math.floor(representedSeconds / SECONDS_PER_HOUR) % 24) as Hour;
};

const repeat = (count: number, cb) => new Array(count).fill(null).map(cb);

const Traffic = ({}: TrafficProps) => {
  const [hour, setHour] = React.useState(0);
  const [driverCount, setDriverCount] = React.useState(0);
  useTimeout(
    () => {
      const hour = getHour();
      const driverCount = getRandomDriverCount(hour);
      setHour(hour);
      setDriverCount(driverCount);
    },
    1000,
    true,
  );
  return (
    <div>
      {hour}: {driverCount}
      <div className={style.container} style={{ '--rows': 2 }}>
        {repeat(9, (_, index) => (
          <div key={index} />
        ))}
      </div>
    </div>
  );
};

export default Traffic;
