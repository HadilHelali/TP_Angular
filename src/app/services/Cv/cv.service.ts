import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Cv} from "../../cv";

@Injectable({
  providedIn: 'root'
})
export class CvService {

  listeCVs :Cv[];

  selectCvSubject = new Subject<Cv>() //private

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

  findById(id: any) : Cv {
      return this.listeCVs.filter(Cv => Cv.id == id)[0]
  }

  deleteCv(cv : Cv) : boolean {
    var index = this.listeCVs.indexOf(cv)
    this.listeCVs.splice(index, 1)
    return true
  }

  addCv(nom : string , prenom : string , age : number,job: string , CIN:number) : Cv {
    var cv = new Cv(nom , prenom , age,CIN,job,"" )
    this.listeCVs.push(cv)
    return cv
  }
  selectCv(cv : Cv){
    this.selectCvSubject.next(cv)
  }
}
