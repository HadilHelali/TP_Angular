import { Component, OnInit , EventEmitter ,Output } from '@angular/core';
import {Cv} from "../cv";
import {CvService} from "../services/Cv/cv.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  listeCVs :Cv[] = [];

  constructor(private cvService : CvService) {
    /*this.listeCVs =[
      new Cv("helali","hadil",22,12456789,"student","hadil_Image.jpg"),
      new Cv("trimech","raoua",22,987654321,"student","raoua_Image.jpg"),
      new Cv("helali","hadil",22,12456789,"student","      "),
      new Cv("trimech","raoua",22,987654321,"student",""),
    ];*/
  }

  @Output() showDetailsL_CV = new EventEmitter<Cv>();
  ngOnInit(): void {
    this.listeCVs = this.cvService.getListCvs()
  }

  onGet(value: Cv){
    this.showDetailsL_CV.emit(value);
  }

}
