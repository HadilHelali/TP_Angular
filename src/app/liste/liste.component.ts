import { Component, OnInit , EventEmitter ,Output } from '@angular/core';
import {Cv} from "../cv";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  listeCVs :Cv[];

  constructor() {
    this.listeCVs =[
      new Cv("helali","hadil",22,12456789,"student","hadil_Image.jpg"),
      new Cv("trimech","raoua",22,987654321,"student","raoua_Image.jpg"),
    ];
  }

  @Output() showDetailsL_CV = new EventEmitter<Cv>();
  ngOnInit(): void {
  }

  onGet(value: Cv){
    this.showDetailsL_CV.emit(value);
  }

}
