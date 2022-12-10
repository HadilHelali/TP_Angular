import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteImgComponent } from './suite-img.component';

describe('SuiteImgComponent', () => {
  let component: SuiteImgComponent;
  let fixture: ComponentFixture<SuiteImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuiteImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
