import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[darkTheme]'
})
export class ThemeDirective implements OnInit{

  private htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit() {
    this.setBackgroundColor();
    this.setTextColor();
  }

  setBackgroundColor() {
    this.htmlElement.nativeElement.style.backgroundColor = '#333';
  }

  setTextColor() {
    this.htmlElement.nativeElement.style.color = 'snow';
  }

}
