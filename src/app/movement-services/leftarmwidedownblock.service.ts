import { Injectable } from '@angular/core';

import { StartPageComponent } from '../startPage/startPage.component';

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
export class LeftarmwidedownblockService {
  constructor(public loadmodel: LoadModelService) {}

  // // // movement one up function area begins
  left_arm_wide_down_block_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR
    ) {
      // this.make_left_fist();
      // this.make_right_fist();
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: -0.01,
        _x: 0.32,
        _y: 0.77,
        _z: -0.55,
        duration: 1,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1,
        // _w: 0.3,
        // _x: -0.23,
        // _y: -0.76,
        // _z: 0.52,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.33,
        _x: 0.69,
        _y: -0.57,
        _z: -0.3,
        duration: 1,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1,
        _w: 0.98,
        _x: 0.1,
        _y: 0.04,
        _z: -0.14,
        onComplete: () => {
          this.left_arm_wide_down_block_arms_down();
        },
      });
    }
  };

  // // // movement one down function area begins
  left_arm_wide_down_block_arms_down = () => {
    console.log('Down called');
    if (
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR
    ) {
      // this.make_left_fist()
      // this.make_right_fist()
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.35,
        _x: -0.15,
        _y: 0.86,
        _z: -0.32,
        duration: 1,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1,
        // _w: 0.3,
        // _x: -0.23,
        // _y: -0.76,
        // _z: 0.52,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.99,
        _x: 0.12,
        _y: 0.04,
        _z: 0.01,
        duration: 1,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1,
        _w: 0.98,
        _x: 0.1,
        _y: 0.04,
        _z: -0.14,
      });
    }
  };
}
