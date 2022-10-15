import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xyz2Component } from './xyz2.component';

describe('Xyz2Component', () => {
  let component: Xyz2Component;
  let fixture: ComponentFixture<Xyz2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Xyz2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Xyz2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
