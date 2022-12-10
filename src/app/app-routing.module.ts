import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {C1Component} from "./c1/c1.component";
import {C2Component} from "./c2/c2.component";
import { PereComponent } from './pere/pere.component';
import { CvComponent } from './cv/cv.component';
import { MiniWordComponent } from './TP2/mini-word/mini-word.component';
import { AboutComponent } from './cv/about/about.component';
import { LoginComponent } from './login/login.component';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
  {path : '', redirectTo: '/color',pathMatch : 'full'},
  {path : 'color',component: PereComponent},
  {path : 'cv',component: CvComponent},
  {path : 'miniWord',component: MiniWordComponent},
  {path : 'details/:id',component: AboutComponent},
  {path : 'login',component: LoginComponent},
  {path : 'addUtil',component: AjoutComponent}
  /* {path : 'c1',component: C1Component},
  {path : 'c2', component: C2Component} */
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
