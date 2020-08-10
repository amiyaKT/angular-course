import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Directive({
  selector: '[appAnswerHighlight]',
})
export class AnswerHighlightDirective {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private controlName: NgControl
  ) {}

  ngOnInit() {
    this.controlName.control.parent.valueChanges
      .pipe(map(({ a, b, ans }) => Math.abs((a + b - ans) / (a + b))))
      .subscribe((value) => {
        if (value < 0.2) {
          this.renderer.addClass(this.el.nativeElement, 'close');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'close');
        }
      });
  }
}
