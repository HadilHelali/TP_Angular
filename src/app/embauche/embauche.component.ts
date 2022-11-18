import { Component, OnInit } from '@angular/core';
import {EmbaucheService} from "../services/embauche/embauche.service";
import {Cv} from "../cv";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  List : Cv[]
  constructor(private embaucheService : EmbaucheService) {
    this.List = this.embaucheService.getList()
  }

  ngOnInit(): void {
  }

}
