import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const useSmoothScrolling = () => {
  let lenis: Lenis | null = null;

  const initSmoothScrolling = () => {
    if (lenis) lenis.destroy();
    lenis = new Lenis({
      lerp: 0.2,
      smoothWheel: true,
    });
    lenis.on("scroll", () => ScrollTrigger.update());
    const scrollFn = (time: number) => {
      if (lenis) lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
  };

  useEffect(() => {
    initSmoothScrolling();

    return () => {
      if (lenis) {
        lenis.destroy();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return {
    lenis,
  };
};
