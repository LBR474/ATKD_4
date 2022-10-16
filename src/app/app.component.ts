// angular core imports
import { Component, OnInit } from '@angular/core';

// three imports
import * as THREE from 'three';

// soba imports
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Angular-TKD_4';
  public color = new THREE.Color('pink');
  multi: string[][] = [
    ['#b3478c', '#1e62c0', '#ffa764', '#3de68b', '#a11f2a', '#ffbf00'],
    ['Pink', 'Blue', 'Orange', 'Green', 'Red', 'Yellow'],
  ];

  colors: string[] = [
    '#b3478c',
    '#1e62c0',
    '#ffa764',
    '#3de68b',
    '#a11f2a',
    '#ffbf00',
  ];

  selectedColor = this.colors[0];

  model$ = this.ngtGLTFLoader.load('/assets/TKD_girl_4.gltf');

  constructor(private ngtGLTFLoader: NgtGLTFLoader) {}

  ngOnInit(): void {}
}
