import { Component, OnInit } from '@angular/core';
import {Cv} from "../cv";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  selected: Cv | null;
  constructor() {
    this.selected = null ;
  }

  ngOnInit(): void {
  }

  showDetails(value:Cv) {
    this.selected = value;
  }
}
