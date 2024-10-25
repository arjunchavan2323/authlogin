import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherdashbordComponent } from './teacherdashbord.component';

describe('TeacherdashbordComponent', () => {
  let component: TeacherdashbordComponent;
  let fixture: ComponentFixture<TeacherdashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherdashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeacherdashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
