import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

let typeSplitChildren = new SplitType("[text-split]", {
  types: "words,chars",
  wordClass: "lineChildren",
});

export const textAnimation = () => {
  console.log(typeSplitChildren);

  document.querySelectorAll("[words-slide-up]").forEach((item) => {
    if (item) {
      let elements = item.querySelectorAll(".char");
      let tl = gsap.timeline({ paused: true });

      ScrollTrigger.create({
        trigger: item,
        start: "top 60%",
        onEnter: () => {
          console.log("ScrollTrigger entered");
          tl.play();
        },
      });

      tl.from(elements, {
        yPercent: 150,
        duration: 0.4,
        ease: "power1.out",
        stagger: { amount: 0.2 },
      });

      tl.revert();
    }
  });
  ScrollTrigger.refresh();

  return () => {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  };
};
