// Angular core imports
import { Component, OnInit } from '@angular/core';

// soba imports
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports
import * as THREE from 'three';
import { Object3D } from 'three';

// gsap import
import { gsap } from 'gsap';

//import { DemoPipe } from '../demo.pipe';
//import { Xyz2Component } from '../xyz2/xyz2.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-attention',

  template: `
  `,
  styleUrls: ['./attention.component.css'],
})
export class AttentionComponent implements OnInit {
  

  constructor(
    private ngtGLTFLoader: NgtGLTFLoader,
    
    public data: DataService
  ) {}

  ngOnInit(): void {}

  // // // attention function area begins
  attention = () => {
    if (
      this.data.spine &&
      this.data.shoulderL &&
      this.data.shoulderR &&
      this.data.upper_armL &&
      this.data.upper_armR &&
      this.data.forearmL &&
      this.data.forearmR &&
      this.data.handL &&
      this.data.handR &&
      this.data.pelvisL &&
      this.data.pelvisR &&
      this.data.shinL &&
      this.data.shinR
    ) {
      gsap.to(this.data.upper_armL.quaternion, {
        _w: 0.4,
        _x: -0.08,
        _y: 0.79,
        _z: -0.45,
        duration: 1,
        onComplete: () => { console.log("Called from xyz2") }
      });

      gsap.to(this.data.upper_armR.quaternion, {
        duration: 1,
        _w: 0.4,
        _x: -0.08,
        _y: -0.79,
        _z: 0.45,
      });

      gsap.to(this.data.forearmL.quaternion, {
        _w: 0.98,
        _x: 0.04,
        _y: 0.04,
        _z: -0.17,
        duration: 1,
      });

      gsap.to(this.data.forearmR.quaternion, {
        duration: 1,
        _w: 0.98,
        _x: 0.04,
        _y: -0.04,
        _z: 0.17,
      });

      gsap.to(this.data.pelvisL.quaternion, {
        _w: 0.53,
        _x: -0.46,
        _y: -0.56,
        _z: -0.43,
        duration: 1,
      });
      gsap.to(this.data.pelvisR.quaternion, {
        _w: 0.53,
        _x: -0.46,
        _y: 0.56,
        _z: 0.43,
        duration: 1,
      });
      gsap.to(this.data.shinL.quaternion, {
        duration: 1,
        _w: 0.97,
        _x: 0.25,
        _y: -0.01,
        _z: -0.05,
      });
      gsap.to(this.data.shinR.quaternion, {
        duration: 1,
        _w: 0.97,
        _x: 0.25,
        _y: 0.01,
        _z: 0.05,
      });

      gsap.to(this.data.spine.position, {
        duration: 1,
        x: -0.1,
      });
    }
  };

}
