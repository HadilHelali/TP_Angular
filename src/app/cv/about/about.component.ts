import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from 'src/app/cv';
import { CvService } from 'src/app/services/Cv/cv.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','../../exercice2/css/rotating-card.css']
})
export class AboutComponent implements OnInit {
  cv: Cv | null = null ;
  
  constructor(private routerA:ActivatedRoute,
              private router:Router,
              private cvService: CvService) {
    routerA.params.subscribe(params=>{
      this.cv = this.cvService.findById(params['id'])}); 
   }

  ngOnInit(): void {
  }

  onDelete(cv: Cv) {
      this.cvService.deleteCv(cv)
      this.router.navigate(['cv'])
  }
}
