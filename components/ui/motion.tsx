"use client"

import React, { createContext, useContext } from 'react';

// Create a context for prefersReducedMotion
const MotionContext = createContext(false);

// Simple stub for motion component
export const motion = {
  div: React.forwardRef((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <div ref={ref} {...rest} />;
  }),
  p: React.forwardRef((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <p ref={ref} {...rest} />;
  }),
  h1: React.forwardRef((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <h1 ref={ref} {...rest} />;
  }),
  h2: React.forwardRef((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <h2 ref={ref} {...rest} />;
  }),
  h3: React.forwardRef((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <h3 ref={ref} {...rest} />;
  }),
  span: React.forwardRef((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <span ref={ref} {...rest} />;
  }),
};

// Hook to check if element is in view
export function useInView(ref, options = {}) {
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
      if (entry.isIntersecting && options.once) {
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isInView;
}

export default motion;