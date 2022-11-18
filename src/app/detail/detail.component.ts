import { Component, OnInit ,Input } from '@angular/core';
import {Cv} from "../cv";
import {EmbaucheService} from "../services/embauche/embauche.service";
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css','../exercice2/css/rotating-card.css']
})
export class DetailComponent implements OnInit {

  @Input() cv: Cv | null ;

  constructor(private embaucheService: EmbaucheService,private toastr: ToastrService) {
    this.cv = null;
  }


  ngOnInit(): void {

  }

  onClick($event: MouseEvent) {
    if(this.embaucheService.getList().includes(<Cv>this.cv)){
      this.toastr.info('Candidat '+this.cv?.firstname+' '+this.cv?.name+' déja embauché !', 'Embauche');
    } else {
      this.toastr.success('Candidat '+this.cv?.firstname+' '+this.cv?.name+' embauché !', 'Embauche');
      this.embaucheService.add(this.cv);
    }
  }
}
