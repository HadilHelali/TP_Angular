import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CvService } from '../services/Cv/cv.service';
import { Router } from '@angular/router';

export interface FormInput {
  nom: string;
  prenom: string;
  age: number;
  job: string;
  CIN:number
}

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {
  myForm: FormInput = {
    nom: "Fouleni",
  prenom:"Foulen",
  age: 22,
  job:"7ata chay",
  CIN: 112334445
  };

  constructor(
    private router:Router,private cvService : CvService) { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    this.cvService.addCv(form.value.nom,form.value.prenom,form.value.age,form.value.job,form.value.CIN)
    this.router.navigate(['cv'])
}
}
