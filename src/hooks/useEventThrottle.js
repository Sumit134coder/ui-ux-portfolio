import { useState } from "react";

const delay = 5000;

const useEventThrottle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const throttle = (fn) => {
    let lastTime = 0;

    return function (...args) {
      const now = Date.now();

      if (now - lastTime >= delay) {
        lastTime = now;

        fn(...args);
      }
    };
  };

  const handleMouseTrack = (e) => {
    const { clientX, clientY } = e;
    const x = throttle(() => console.log("throttled function", e));
    x();
    setPosition({ x: clientX, y: clientY });
  };

  return {
    data: {
      position,
    },
    methods: {
      handleMouseTrack,
    },
  };
};

export default useEventThrottle;
