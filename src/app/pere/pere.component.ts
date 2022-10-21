import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit {

  bgColor = "deepskyblue ";
  constructor() { }

  ngOnInit(): void {
  }

  changeBgColor(value: string){
    this.bgColor = value;
  }
}
