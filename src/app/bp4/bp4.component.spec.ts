import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { Bp4Component } from './bp4.component';



describe('Bp4Component', () => {
  let component: Bp4Component;
  let fixture: ComponentFixture<Bp4Component>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bp4Component],
      imports: [BrowserAnimationsModule],
      

     
         
        
      
     
      
    }).compileComponents();

    fixture = TestBed.createComponent(Bp4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
