import { memo } from 'react';

const SlowRenderingComponent = () => {
  // Log once. The actual slowdown is inside SlowPost.
  console.log(
    '[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />',
  );

  let items = [];
  for (let i = 0; i < 2500; i++) {
    console.log("FOR", i);
    items.push(<SlowPost key={i} index={i} />);
  }
  return <ul>{items}</ul>;
};

const SlowPost = ({ index }) => {
  let startTime = performance.now();
  console.log("slow post", startTime)
  while (performance.now() - startTime < 1) {
    console.log("entered while...", performance.now());
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return <li className='item'>Post #{index + 1}</li>;
};

export default memo(SlowRenderingComponent);