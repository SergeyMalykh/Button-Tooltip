// https://dzone.com/articles/what-are-hostbinding-and-hostlistener-in-angular
// https://stackoverflow.com/questions/40107008/detect-click-outside-angular-component
// https://stackoverflow.com/questions/36695922/angular-2-keyboard-events

import {
  Directive,
  OnInit,
  OnDestroy,
  Input,
  ElementRef,
  HostListener,
  Renderer
} from '@angular/core';

// let instancesCount = 0;

@Directive({
  selector: '[appCustomButtonTooltip]'
})
export class CustomButtonTooltipDirective implements OnInit, OnDestroy {
  private el: HTMLInputElement;

  private htmlDivElement: HTMLDivElement;
  private clickIsInside = false;
  private isPositionBelow = false;
  // private appCustomButtonTooltipId = `appCustomButtonTooltip-${instancesCount++}`;

  @Input()
  appCustomButtonTooltip: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.el = this.elementRef.nativeElement;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.code === 'Escape') {
      this.hide();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onResizeOrScroll(event) {
    const isInViewport = elem => {
      const bounding = elem.getBoundingClientRect();
      return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    this.isPositionBelow = !isInViewport(this.elementRef.nativeElement);
    this.show();
  }

  @HostListener('click')
  onClick() {
    // window.alert('Host Element Clicked');
    this.show();
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.el.contains(event.target)) {
      this.clickIsInside = true;
      this.show();
    } else {
      this.clickIsInside = false;
      this.hide();
    }
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.hide();
  }

  show() {
    // debugger;
    this.hide();

    this.htmlDivElement = this.getTooltipElement(
      this.isPositionBelow,
      this.appCustomButtonTooltip
    );

    if (this.clickIsInside) {
      this.el.parentNode.appendChild(this.htmlDivElement);
    } else {
      this.hide();
    }
  }

  hide() {
    if (this.htmlDivElement) {
      this.htmlDivElement.remove();
    }
  }

  getTooltipElement(
    isPositionBelow: boolean,
    tooltipContent: string
  ): HTMLDivElement {
    const customButtonTooltipClass = isPositionBelow
      ? 'custom-button-tooltip-bottom'
      : 'custom-button-tooltip-top';

    const htmlDivElement: HTMLDivElement = document.createElement('div');

    htmlDivElement.innerHTML = `<div class="${customButtonTooltipClass}">${tooltipContent}</div>`;

    return htmlDivElement;
  }

  // @HostListener('mouseover')
  // onMouseOver() {
  //   this.show();
  // }

  // @HostListener('mouseout')
  // onMouseOut() {
  //   if (!this.clickIsInside) {
  //     this.hide();
  //   }
  // }
}
