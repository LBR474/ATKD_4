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
export class rightarmelbowstrike {
  constructor(public loadmodel: LoadModelService) {}

  // // // movement one up function area begins
  right_arm_elbow_strike_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {

       gsap.to(this.loadmodel.shoulderR.quaternion, {
         duration: 1,
         _w: 0.62,
         _x: -0.61,
         _y: 0.35,
         _z: 0.36,
       });
     
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.4,
        _x: 0.01,
        _y: -0.27,
        _z: 0.88,
      });
      
      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1,
        _w: 0.98,
        _x: 0.1,
        _y: -0.04,
        _z: 0.14,
        onComplete: () => {
          this.right_arm_elbow_strike_arms_down();
        },
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.53,
        _x: -0.17,
        _y: 0.83,
        _z: -0.06,
        duration: 1,
      });
    }
  };

  // // // movement one down function area begins
  right_arm_elbow_strike_arms_down = () => {
    console.log('Down called');
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
     

      //

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.4,
        _x: -0.39,
        _y: -0.77,
        _z: 0.29,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1,
        // _w: 0.6,
        // _x: 0.78,
        // _y: -0.04,
        // _z: -0.16,
        _w: 0.6,
        _x: 0.78,
        _y: -0.16,
        _z: 0.07,
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        duration: 1,
        _w: 0.46,
        _x: -0.08,
        _y: 0.88,
        _z: -0.12,
      });
    }
  };
}
