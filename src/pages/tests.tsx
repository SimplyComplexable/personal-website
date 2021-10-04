import React from 'react';

export interface TestsProps {}

const numArray = [...Array(10)].map((_, index) => index);

const Tests = ({}: TestsProps) => {
  const [clicked, setClicked] = React.useState(false);
  return (
    <section>
      <div>
        {numArray.map(num => (
          <button>{num}</button>
        ))}
      </div>
      <button onClick={() => setClicked(curr => !curr)}>Click Me!</button>
    </section>
  );
};

export default Tests;
