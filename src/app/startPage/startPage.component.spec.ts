import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Xyz3Component } from './startPage.component';

describe('Xyz3Component', () => {
  let component: Xyz3Component;
  let fixture: ComponentFixture<Xyz3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Xyz3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Xyz3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
