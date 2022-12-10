import { Component, OnInit ,Input , EventEmitter ,Output} from '@angular/core';
import { Router } from '@angular/router';
import{Cv} from "../cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() cv: Cv | null ;

  constructor(private router:Router) {
  this.cv = null;
  }

  public isSelected : boolean = false ;

  //type narrowing
  @Output() showDetailsI_L = new EventEmitter<Cv>();

  ngOnInit(): void {
  }
  
  onClickDetails() {
    this.router.navigate(['details/'+this.cv?.id]);
    }

  onClick(){
    this.isSelected= true;
    if(this.cv){
      this.showDetailsI_L.emit(this.cv);
    }

  }
}