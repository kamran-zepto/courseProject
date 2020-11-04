import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective implements OnInit {
  constructor(private elemRef: ElementRef, private renderer: Renderer2) {
    console.log(elemRef.nativeElement);
  }

  ngOnInit(): void {
    this.renderer.setStyle(
      this.elemRef.nativeElement,
      'background-color',
      'blue'
    );
  }
}
