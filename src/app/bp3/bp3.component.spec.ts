import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Bp3Component } from './bp3.component';

describe('Bp3Component', () => {
  let component: Bp3Component;
  let fixture: ComponentFixture<Bp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bp3Component ],
      imports: [BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
