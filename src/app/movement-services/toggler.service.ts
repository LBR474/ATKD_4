import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TogglerService {
  isOpen = true;
  linkTo = '<app-homePage></app-homePage>';
  constructor() {}

  toggle() {
    console.log('called');
    this.isOpen = !this.isOpen;
  }
}
