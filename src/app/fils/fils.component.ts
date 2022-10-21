import { Component, OnInit ,Input,EventEmitter ,Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  @Input() bgColorPere: any ;
  myFavoriteColor : string ='pink' ;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() colorChange = new EventEmitter();

  changerColorPere(){
    this.colorChange.emit(this.myFavoriteColor);
  }


}
