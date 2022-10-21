import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-composant1',
  templateUrl: './composant1.component.html',
  styleUrls: ['./composant1.component.css']
})
export class Composant1Component implements OnInit {
  private defaultColor: string = 'white';
  bgcolor = this.defaultColor;

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color:any) {
    this.bgcolor = color.value;
  }

  resetColor() {
    this.bgcolor = this.defaultColor;
  }
}
