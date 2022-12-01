import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BP2Component } from './bp2.component';

describe('BP2Component', () => {
  let component: BP2Component;
  let fixture: ComponentFixture<BP2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BP2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BP2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
