/* eslint-disable no-undef */
import Carousel from './class';

export default class CarouselExtend extends Carousel {
  dotsContainer: HTMLDivElement;

  dot1: HTMLButtonElement;

  dot2: HTMLButtonElement;

  dot3: HTMLButtonElement;

  constructor(selector:string) {
    super(selector);

    this.dotsContainer = this.rootElement.querySelector('.js-dots-container');
    this.dot1 = this.rootElement.querySelector('.js-dot-1');
    this.dot2 = this.rootElement.querySelector('.js-dot-2');
    this.dot3 = this.rootElement.querySelector('.js-dot-3');
  }

  showPrevious() {
    super.showPrevious();
    this.colorCircles();
  }

  showNext() {
    super.showNext();
    this.colorCircles();
  }

  colorCircles() {
    if ((this.current + this.images.length) % this.images.length === 0) {
      this.dot1.style.backgroundColor = 'grey';
      this.dot2.style.backgroundColor = 'aliceblue';
      this.dot3.style.backgroundColor = 'aliceblue';
    } else if ((this.current + this.images.length) % this.images.length === 6) {
      this.dot1.style.backgroundColor = 'aliceblue';
      this.dot2.style.backgroundColor = 'aliceblue';
      this.dot3.style.backgroundColor = 'grey';
    } else {
      this.dot1.style.backgroundColor = 'aliceblue';
      this.dot2.style.backgroundColor = 'grey';
      this.dot3.style.backgroundColor = 'aliceblue';
    }
  }
}
