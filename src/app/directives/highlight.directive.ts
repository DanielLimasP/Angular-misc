import {
  Directive,
  ElementRef,
  Host,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  constructor(private el: ElementRef) {
    console.log('Init directive');
    // el.nativeElement.style.backgroundColor = 'yellow';
  }

  @Input('appHighlight') newColor: string;
  @HostListener('mouseenter')
  mouseEnter() {
    console.log(this.newColor);
    this.highlight(this.newColor || 'yellow');
  }
  @HostListener('mouseleave') mouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
