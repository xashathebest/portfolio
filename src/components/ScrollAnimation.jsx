import React, { useEffect, useRef } from 'react';

const ScrollAnimation = ({ children, className = '', delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a small delay before adding the visible class
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            // Once the element is visible, we don't need to observe it anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in-up ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimation; 