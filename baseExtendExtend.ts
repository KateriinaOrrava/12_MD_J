/* eslint-disable no-undef */
import Carousel from './class';

export default class CarouselExtendExtend extends Carousel {
  dotsContainer: HTMLDivElement;

  dot: HTMLButtonElement;

  dots: NodeListOf<HTMLButtonElement>;

  smallImage: HTMLImageElement;

  smallImages: NodeListOf<HTMLImageElement>;

  constructor(selector:string) {
    super(selector);
    this.dotsContainer = this.rootElement.querySelector('.js-dots-container');
    this.dots = this.rootElement.querySelectorAll('.js-dot');
    this.dot = this.rootElement.querySelector('.js-dot');
    this.smallImage = this.rootElement.querySelector('.js-image--sm');
    this.smallImages = this.rootElement.querySelectorAll('.js-image--sm');

    this.showPrevious();
    this.showNext();
  }

  showPrevious() {
    super.showPrevious();
    this.changeDotsColorPrevious();
    this.setSmallImageOrder();
  }

  showNext() {
    super.showNext();
    this.changeDotsColorNext();
    this.setSmallImageOrder();
  }

  changeDotsColorNext() {
    this.eraseDotColor();
    this.dots[(this.current - 1 + this.images.length) % 7].style.backgroundColor = 'aliceblue';
  }

  changeDotsColorPrevious() {
    this.eraseDotColor();
    this.dots[(this.current + 1 + this.images.length) % 7].style.backgroundColor = 'aliceblue';
  }

  eraseDotColor() {
    this.dots[(this.current + this.images.length) % 7].style.backgroundColor = 'grey';
  }

  setSmallImageOrder() {
    for (let i = 0; i < this.smallImages.length; i += 1) {
      this.smallImages[i].style.order = `${(i - this.current + 3 + this.smallImages.length) % this.smallImages.length}`;
    }
  }
}
