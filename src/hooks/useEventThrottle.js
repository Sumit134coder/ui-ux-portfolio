import { useState , useRef } from "react";

const delay = 5000;

const useEventThrottle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const lastThrottledTimeRef = useRef(0);

  const throttle = (fn) => {

    return function (...args) {
      const now = Date.now();

      if (now - lastThrottledTimeRef.current >= delay) {
        lastThrottledTimeRef.current = now;
        fn(...args);
      }
    };
  };

  const handleMouseTrack = (e) => {
    const { clientX, clientY } = e;
    throttle(() => setPosition({ x: clientX, y: clientY }))();
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
