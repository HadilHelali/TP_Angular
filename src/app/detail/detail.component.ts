import { Component, OnInit ,Input } from '@angular/core';
import {Cv} from "../cv";
import {EmbaucheService} from "../services/embauche/embauche.service";
import { ToastrService } from 'ngx-toastr';
import { CvService } from '../services/Cv/cv.service';




@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css','../exercice2/css/rotating-card.css']
})
export class DetailComponent implements OnInit {

  @Input() cv: Cv | null ;

  constructor(private embaucheService: EmbaucheService,private toastr: ToastrService,private cvService:CvService) {
    this.cv = null;
  }


  ngOnInit(): void {
    this.cvService.selectCvSubject.subscribe(c=>this.cv=c)
  }

  onClick() {
    if(!this.embaucheService.add(this.cv)){
      this.toastr.info('Candidat '+this.cv?.firstname+' '+this.cv?.name+' déja embauché !', 'Embauche');
    } else {
      this.toastr.success('Candidat '+this.cv?.firstname+' '+this.cv?.name+' embauché !', 'Embauche');
    }
  }

  
}
