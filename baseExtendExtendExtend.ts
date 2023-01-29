/* eslint-disable no-console */
/* eslint-disable no-undef */
import CarouselExtendExtend from './baseExtendExtend';

export default class CarouselExtendExtendExtend extends CarouselExtendExtend {
  fullScreenButton: HTMLButtonElement;

  carouselLast: HTMLDivElement;

  currentImage = 0;

  currentLast = 0;

  timer: any;

  constructor(selector:string) {
    super(selector);
    this.fullScreenButton = this.rootElement.querySelector('.js-fulscreen-btn');
    this.carouselLast = this.rootElement.querySelector('#carousel-last');
    this.showPrevious();
    this.start();
    this.initExpandExpandExpandEvents();
  }

  initExpandExpandExpandEvents() {
    this.fullScreenButton.addEventListener('click', () => this.fullScreen());
  }

  start() {
    this.timer = setInterval(() => {
      this.slideShow();
      this.changeDotsColorPrevious();
      this.changeDotsColorNext();
      this.setSmallImageOrder();
    }, 3000);
  }

  stop() {
    clearInterval(this.timer);
  }

  slideShow() {
    this.images[this.current].classList.add('d-none');
    this.current = (this.current + 1) % this.images.length;
    this.images[this.current].classList.remove('d-none');
  }

  fullScreen() {
    console.log('full screen');
    this.carouselLast.classList.toggle('fullscreen');
  }
}
