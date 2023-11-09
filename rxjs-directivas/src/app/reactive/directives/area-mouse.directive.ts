import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appAreaMouse]'
})
export class AreaMouseDirective implements OnInit{

  private htmlElement: ElementRef<HTMLElement>;

  @Input()
  color = 'green';

  @Input()
  height = '200';

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setBackgroundColor();
    this.setHeight();
  }

  setBackgroundColor() {
    this.htmlElement.nativeElement.style.backgroundColor = this.color;
  }

  setHeight() {
    this.htmlElement.nativeElement.style.height = `${this.height}px`;
  }

}
