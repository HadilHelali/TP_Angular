import { Component, OnInit ,Input , EventEmitter ,Output} from '@angular/core';
import{Cv} from "../cv";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() cv: Cv | undefined;

  constructor() {

  }

  @Output() showDetailsI_L = new EventEmitter();

  ngOnInit(): void {
  }

  onClick(){
    this.showDetailsI_L.emit(this.cv);
    console.log("done");
  }
}
