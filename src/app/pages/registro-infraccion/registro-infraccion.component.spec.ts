import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroInfraccionComponent } from './registro-infraccion.component';

describe('RegistroInfraccionComponent', () => {
  let component: RegistroInfraccionComponent;
  let fixture: ComponentFixture<RegistroInfraccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroInfraccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroInfraccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
