import { Injectable } from '@angular/core';

import { StartPageComponent } from '../startPage/startPage.component';

// import { LoadModelService } from './loadmodel.service';

import { LoadModelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';

// soba imports
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports
import * as THREE from 'three';
import { Object3D } from 'three';

@Injectable({
  providedIn: 'root',
})
export class AttentionService {
  constructor(public loadmodel: LoadModelService) {}

  // // // attention function area begins
  attention = () => {
    
    if (
      this.loadmodel.spine &&
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL &&
      this.loadmodel.handR &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.shinR
    ) {
      console.log(this.loadmodel.upper_armL.quaternion);
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        // _w: 0.4,
        // _x: -0.08,
        // _y: 0.79,
        // _z: -0.45,
        _w: 0.48,
        _x: -0.31,
        _y: 0.63,
        _z: -0.53,
        duration: 1,
        onComplete: () => {
          console.log('Called from attention function');
        },
      });
      // gsap.to(this.loadmodel.upper_armL.rotation, {
      //   _w: 1.56,
      //   _y: 1.16,
      //   _z: -2.33,
      //   duration: 1,
      //   onComplete: () => {
      //     console.log('Called from attention function');
      //   },
      // });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.48,
        _x: -0.31,
        _y: -0.63,
        _z: 0.53,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.98,
        _x: 0.1,
        _y: 0.04,
        _z: -0.14,
        duration: 1,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1,
        _w: 0.98,
        _x: 0.1,
        _y: -0.04,
        _z: 0.14,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: -0.07,
        _z: -0.015,
        duration: 1,
      });
      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.07,
        _z: 0.015,
        duration: 1,
      });
      gsap.to(this.loadmodel.shinL.quaternion, {
        duration: 1,
        // _w: 0.97,
        // _x: 0.25,
        // _y: -0.01,
        // _z: -0.05,
      });
      gsap.to(this.loadmodel.shinR.quaternion, {
        duration: 1,
        // _w: 0.97,
        // _x: 0.25,
        // _y: 0.01,
        // _z: 0.05,
      });

      gsap.to(this.loadmodel.spine.position, {
        duration: 1,
        x: -0.1,
      });
    }
  };
}
