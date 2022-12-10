import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-suite-img',
  templateUrl: './suite-img.component.html',
  styleUrls: ['./suite-img.component.css']
})
export class SuiteImgComponent implements OnInit {
  images: string[]  = [
    'default_image.jpg',
    'hadil_Image.jpg',
    'raoua_Image.jpg'
  ]
  image : string = this.images[0]
  imageObservable$? : Observable<string>

  constructor() { }

  ngOnInit(): void {
    this.imageObservable$ = new Observable<string>(
      (observer) => {
        let i = this.images.length -1
        setInterval(() => {
          observer.next(this.images[i])
          if (i != 0) {
            i--;
          }
          else{
            i = this.images.length-1
          }

        }, 3000);
      });

    this.imageObservable$.subscribe(
      (val) => {
        this.image = val
      }
    );

  }

}
