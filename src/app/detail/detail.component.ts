import { Component, OnInit ,Input } from '@angular/core';
import {Cv} from "../cv";



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css','../exercice2/css/rotating-card.css']
})
export class DetailComponent implements OnInit {

  @Input() cv: Cv | null ;
  constructor() {
    this.cv = null;
  }


  ngOnInit(): void {

  }

}
