import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css' ,'./css/rotating-card.css']
})
export class Exercice2Component implements OnInit {

  Nom = 'Fouleni';
  Prenom = 'Foulen';
  Job = 'travail';
  Image ='assets/images/tim_logo.png';
  CitationPref = "Citation";
  DescripTravail = "un travail";
  MotsCles = "mots clés";

  constructor() { }

  ngOnInit(): void {
  }

}
