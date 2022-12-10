import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface FormInput {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormInput = {
    email: "foulenfouleni@gmail.com",
    password: 'FL123',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
      //TODO 
  }
}
