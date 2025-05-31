"use client"

import React, { createContext, useContext, ComponentPropsWithoutRef } from 'react';

interface MotionProps extends ComponentPropsWithoutRef<'div'> {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
}

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean;
}

// Create a context for prefersReducedMotion
const MotionContext = createContext(false);

// Simple stub for motion component
export const motion = {
  div: React.forwardRef<HTMLDivElement, MotionProps>((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <div ref={ref} {...rest} />;
  }),
  p: React.forwardRef<HTMLParagraphElement, MotionProps>((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <p ref={ref} {...rest} />;
  }),
  h1: React.forwardRef<HTMLHeadingElement, MotionProps>((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <h1 ref={ref} {...rest} />;
  }),
  h2: React.forwardRef<HTMLHeadingElement, MotionProps>((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <h2 ref={ref} {...rest} />;
  }),
  h3: React.forwardRef<HTMLHeadingElement, MotionProps>((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <h3 ref={ref} {...rest} />;
  }),
  span: React.forwardRef<HTMLSpanElement, MotionProps>((props, ref) => {
    const { initial, animate, transition, ...rest } = props;
    return <span ref={ref} {...rest} />;
  }),
};

// Hook to check if element is in view
export function useInView(ref: React.RefObject<Element>, options: UseInViewOptions = {}) {
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