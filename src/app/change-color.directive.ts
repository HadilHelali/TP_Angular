import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {
  @HostBinding ('style.color') color : string = '';

  constructor() { }

  @HostListener('mouseenter') mouseenter(){
    this.color = 'lightblue'
  }

  @HostListener('mouseleave') mouseleave(){
    this.color = 'gray'
  }

}
