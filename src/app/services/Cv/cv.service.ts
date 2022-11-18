import { Injectable } from '@angular/core';
import {Cv} from "../../cv";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  listeCVs :Cv[];

  constructor() {
    this.listeCVs =[
      new Cv("helali","hadil",22,12456789,"student","hadil_Image.jpg"),
      new Cv("trimech","raoua",22,987654321,"student","raoua_Image.jpg"),
      new Cv("helali","hadil",22,12456789,"student","      "),
      new Cv("trimech","raoua",22,987654321,"student",""),
    ];
  }

  getListCvs() : Cv[] {
    return this.listeCVs;
  }
}
