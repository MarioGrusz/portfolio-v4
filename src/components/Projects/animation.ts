import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const imagesParallaxAnimation = (
  elements: HTMLElement[]
): (() => void) => {
  elements.forEach((section) => {
    if (section && document.body.contains(section)) {
      gsap.set(section, {
        yPercent: -6,
      });
      gsap.to(section, {
        yPercent: 6,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  });

  ScrollTrigger.refresh();
  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
};
