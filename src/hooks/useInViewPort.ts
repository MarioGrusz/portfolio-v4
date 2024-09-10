import { useState, useEffect, RefObject } from "react";

function useInViewPort<T extends HTMLElement>(
  refs: RefObject<T>[],
  options?: IntersectionObserverInit
) {
  const [inViewport, setInViewport] = useState<boolean[]>(
    new Array(refs.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = refs.findIndex((ref) => ref.current === entry.target);
        const isIntersecting = entry.isIntersecting;
        if (index !== -1) {
          setInViewport((prevInViewport) => {
            const newInViewport = [...prevInViewport];
            newInViewport[index] = isIntersecting;
            return newInViewport;
          });
        }
      });
    }, options);

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    const handleResize = () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
          observer.observe(ref.current);
        }
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [options]);

  return inViewport;
}

export default useInViewPort;
