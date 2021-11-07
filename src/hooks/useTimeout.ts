import React from 'react';

export const useTimeout = (
  cb: () => void,
  timeout: number,
  interval = false,
) => {
  React.useEffect(() => {
    const func = interval ? setInterval : setTimeout;
    const timer = func(cb, timeout);
    return () => clearTimeout(timer);
  }, [cb, timeout, interval]);
};
