import { Injectable } from '@angular/core';
import {Cv} from "../../cv";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  listeEmbacuhes :Cv[] =[];
  constructor() { }

  add(cv: Cv | null ) {
    if (cv) {
      this.listeEmbacuhes.push(cv);
    }
  }

  getList() : Cv[] {
    return this.listeEmbacuhes;
  }
}
