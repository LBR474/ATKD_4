import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bp4Component } from './bp4.component';

describe('Bp4Component', () => {
  let component: Bp4Component;
  let fixture: ComponentFixture<Bp4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bp4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
