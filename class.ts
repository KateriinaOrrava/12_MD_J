/* eslint-disable no-undef */
export default class Carousel {
  rootElement: HTMLDivElement;

  previousButton: HTMLButtonElement;

  image: HTMLImageElement;

  images: NodeListOf<HTMLImageElement>;

  nextButton: HTMLButtonElement;

  current: number;

  constructor(selector:string) {
    this.rootElement = document.querySelector(selector);
    this.previousButton = this.rootElement.querySelector('.js-prev');
    this.images = this.rootElement.querySelectorAll('.js-image');
    this.image = this.rootElement.querySelector('.js-image');
    this.nextButton = this.rootElement.querySelector('.js-next');
    this.current = 0;
    this.initEvents();
  }

  initEvents() {
    this.previousButton.addEventListener('click', () => this.showPrevious());
    this.nextButton.addEventListener('click', () => this.showNext());
  }

  showPrevious() {
    this.images[this.current].classList.add('d-none');
    this.current = (this.current - 1 + this.images.length) % this.images.length;
    this.images[this.current].classList.remove('d-none');
  }

  showNext() {
    this.images[this.current].classList.add('d-none');
    this.current = (this.current + 1) % this.images.length;
    this.images[this.current].classList.remove('d-none');
  }
}
