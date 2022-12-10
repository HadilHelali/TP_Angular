import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { Composant1Component } from './composant1/composant1.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { PereComponent } from './pere/pere.component';
import { FilsComponent } from './fils/fils.component';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { CvComponent } from './cv/cv.component';
import { ItemComponent } from './item/item.component';
import { MiniWordComponent } from './TP2/mini-word/mini-word.component';
import { ArcdirDirective } from './TP2/arcdir.directive';
import { ChangeColorDirective } from './change-color.directive';
import { DefaultImagePipe } from './default-image.pipe';
import { EmbaucheComponent } from './embauche/embauche.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { RouterSimulatorComponent } from './router-simulator/router-simulator.component';
import { AboutComponent } from './cv/about/about.component';
import { LoginComponent } from './login/login.component';
import { AjoutComponent } from './ajout/ajout.component';
import { SuiteImgComponent } from './suite-img/suite-img.component';

@NgModule({
  declarations: [
    AppComponent,
    Composant1Component,
    Exercice2Component,
    PereComponent,
    FilsComponent,
    DetailComponent,
    ListeComponent,
    CvComponent,
    ItemComponent,
    MiniWordComponent,
    ArcdirDirective,
    ChangeColorDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    C1Component,
    C2Component,
    HeaderComponent,
    RouterSimulatorComponent,
    DetailComponent,
    AboutComponent,
    LoginComponent,
    AjoutComponent,
    SuiteImgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastrModule.forRoot(
      {
        preventDuplicates: true
      }
    ),
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
