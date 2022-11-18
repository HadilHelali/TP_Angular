import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {

  color: string= 'black' ;
  fontsize : number  = 12;
  fontFam : string = 'Arial';

  options = [
    {title:'Arial',value:'Palatino Linotype'},
    {title:'Sono', value:'Sono'},
    {title:'DancingScript',value:'DancingScript'},
    {title:'BhuTuka', value:'BhuTuka'},

  ];


  constructor() {
    this.fontFam = 'Arial';
}

  ngOnInit(): void {
  }

  onChange(fon:string){

    this.fontFam = fon;

    console.log(this.fontFam);

  }

  /*selectOption(value: number) {
   this.selected = value ;
   switch (this.selected){
     case 1 : this.fontFam = 'Arial'; break;
     case 2 : this.fontFam = 'Sono'; break;
     case 3 : this.fontFam = 'DancingScript'; break;
     case 4 : this.fontFam = 'BhuTuka'; break;
     default : this.fontFam = 'Arial';
   }
    this.fontFam = 'BhuTuka'
    console.log(this.fontFam);
 }*/

}
