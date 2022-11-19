import {Directive,HostBinding , HostListener} from '@angular/core';
import {formatNumber} from "@angular/common";

@Directive({
  selector: '[appArcdir]'
})
export class ArcdirDirective {
@HostBinding ('style.border-color') bd : string = '';
@HostBinding ('style.color') color : string = '';
  constructor() { }

  colorTab = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
  ]

  @HostListener('keyup') onkeyup(){

    this.color = this.colorTab[ Math.floor(Math.random() * 10 ) % 6 ];
    this.bd = this.colorTab[ Math.floor(Math.random() * 10 ) % 6 ];
  }
}
