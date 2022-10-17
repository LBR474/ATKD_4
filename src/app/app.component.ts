// angular core imports
import { Component, OnInit } from '@angular/core';

// soba imports
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Taekwondo patterns game';

  multi: string[][] = [
    [
      '#FFFFFF',
      '#b3478c',
      '#1e62c0',
      '#ffa764',
      '#3de68b',
      '#a11f2a',
      '#ffbf00',
    ],
    ['White', 'Pink', 'Blue', 'Orange', 'Green', 'Red', 'Yellow'],
  ];

  // colors: string[] = [
  //   '#b3478c',
  //   '#1e62c0',
  //   '#ffa764',
  //   '#3de68b',
  //   '#a11f2a',
  //   '#ffbf00',
  // ];

  selectedColor = this.multi[0][0];

 

  constructor(private ngtGLTFLoader: NgtGLTFLoader) {}

  ngOnInit(): void {}
}
