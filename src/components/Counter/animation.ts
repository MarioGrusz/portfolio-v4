import { MutableRefObject } from "react";
import gsap from "gsap";

export const projectCounterAnimation = (
  numberRightRowRef: MutableRefObject<HTMLUListElement | null>,
  liRefs: MutableRefObject<(HTMLLIElement | null)[]>,
  index: number
) => {
  const numberRightRow = numberRightRowRef.current;
  const numberRightRowElements = liRefs.current;

  if (
    !numberRightRow ||
    !numberRightRowElements.length ||
    !numberRightRowElements[0]
  ) {
    console.warn("Invalid references, animation cannot proceed.");
    return;
  }

  // Get element height
  const elementHeight =
    numberRightRowElements[0].getBoundingClientRect().height;

  // Parse number and calculate translateY value
  const number = parseInt(numberRightRow.dataset.number || "0", 10);
  const translateYValue = -elementHeight * number;

  // Apply initial state and animation using GSAP
  if (numberRightRow && index + 1 === number) {
    // Set initial state
    // gsap.set(numberRightRow, {
    //   y: 0,
    // });

    // Animate to target state
    const duration = 0.4 + index * 0.2;
    gsap.to(numberRightRow, {
      duration,
      delay: 0.2,
      y: translateYValue,
      ease: "power1.out",
    });
  }
};
