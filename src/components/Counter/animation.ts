import { MutableRefObject } from "react";
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
  const elementHeight =
    numberRightRowElements[0].getBoundingClientRect().height;

  const number = parseInt(numberRightRow.dataset.number || "0", 10);
  const translateYValue = -elementHeight * number;

  if (numberRightRow && index + 1 === number) {
    const duration = 0.3 + index * 0.3;
    numberRightRow.style.transition = `transform ${duration}s ease-in-out`;
    numberRightRow.style.transform = `translateY(${translateYValue}px)`;
  } else {
    console.warn("No <ul> element found in numberRightRow.");
  }
};
