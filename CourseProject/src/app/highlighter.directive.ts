import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';
import { Event } from '@angular/router';

@Directive({
  selector: '[appHighlighter]',
})
export class HighlighterDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appHighlighter') highlightColor: string = 'green';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elemRef: ElementRef, private renderer: Renderer2) {
    console.log(elemRef.nativeElement);
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }

  @HostListener('mouseenter') mouseOver(evnetData: Event) {
    this.backgroundColor = this.highlightColor;
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
  }

  @HostListener('mouseleave') mouseLeave(evnetData: Event) {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   'background-color',
    //   'pink'
    // );
  }
}
