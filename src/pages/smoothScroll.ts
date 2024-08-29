function lerp(start: number, end: number, t: number) {
  return start * (1 - t) + end * t;
}

export class SmoothScroll {
  element: HTMLElement;
  images: (HTMLImageElement | null)[];
  currentY: number;
  targetY: number;

  constructor(element: HTMLElement, images: []) {
    this.element = element;
    this.images = images.filter((img) => img !== null) as HTMLImageElement[];
    this.currentY = 0;
    this.targetY = 0;
    this.setup();
    this.onWindowResize();
    window.addEventListener("load", () => {
      this.setup();
      this.onWindowResize();
    });
    this.animate();
  }

  setup() {
    document.body.style.height = `${this.element.offsetHeight}px`;
    window.addEventListener("scroll", () => {
      this.targetY = window.scrollY;
    });
  }

  onWindowResize() {
    window.addEventListener("resize", () => {
      document.body.style.height = `${this.element.offsetHeight}px`;
    });
  }

  animate() {
    this.currentY = lerp(this.currentY, this.targetY, 0.075);
    this.element.style.transform = `translate3d(0, -${this.currentY}px, 0)`;
    this.images.forEach((image) => {
      const parentElement = image?.parentElement;

      if (image && parentElement) {
        const { top, height } = parentElement.getBoundingClientRect();
        const adjustedTop =
          (top - window.innerHeight * 0.5 + height * 0.5) * 0.15;
        image.style.transform = `translateY(${adjustedTop}px)`;
      }
    });

    requestAnimationFrame(this.animate.bind(this));
  }
}
