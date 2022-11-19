import {Injectable} from '@angular/core';
import {Cv} from "../../cv";

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  listeEmbacuhes: Cv[] = [];

  constructor() {
  }

  add(cv: Cv | null):boolean {
    if (cv && !this.listeEmbacuhes.includes(cv)) {
      this.listeEmbacuhes.push(cv);
      return true
    }
    return false
  }

  getList(): Cv[] {
    return this.listeEmbacuhes;
  }
}
