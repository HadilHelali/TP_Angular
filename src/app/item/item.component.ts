import { Component, OnInit ,Input , EventEmitter ,Output} from '@angular/core';
import{Cv} from "../cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() cv: Cv | null ;

  constructor() {
  this.cv = null;
  }

  @Output() showDetailsI_L = new EventEmitter<Cv>();

  ngOnInit(): void {
  }

  onClick(){
    if(this.cv){
      this.showDetailsI_L.emit(this.cv);
    }

  }
}
