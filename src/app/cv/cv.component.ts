import { Component, OnInit } from '@angular/core';
import {Cv} from "../cv";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selected: Cv | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  showDetails(value:any) {
    this.selected = value;
  }
}
