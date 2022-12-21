import { Injectable } from '@angular/core';



import { LoadModelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';



@Injectable({
  providedIn: 'root',
})
export class LeftarmwidedownblockService {
  constructor(public loadmodel: LoadModelService) {}

  // // // movement one up function area begins
  left_arm_wide_down_block_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR
    ) {
      // this.make_left_fist();
      // this.make_right_fist();

      gsap.to(this.loadmodel.shoulderL.quaternion, {
        duration: 1,
        // _w: 0.62,
        // _x: -0.61,
        // _y: -0.35,
        // _z: -0.36,
        _w: 0.62,
        _x: -0.61,
        _y: -0.35,
        _z: -0.36,
      });
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.4,
        _x: 0.01,
        _y: 0.27,
        _z: -0.88,
        duration: 1,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.71,
        _x: 0.36,
        _y: -0.1,
        _z: -0.59,
        duration: 1,
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
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR
    ) {
      gsap.to(this.loadmodel.shoulderL.quaternion, {
        _w: 0.62,
        _x: -0.61,
        _y: -0.35,
        _z: -0.36,
        duration: 1,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: -0.05,
        _x: 0.17,
        _y: 0.83,
        _z: -0.53,
        duration: 1,
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
        // _w: 0.98,
        // _x: 0.1,
        // _y: 0.04,
        // _z: -0.14,
      });
    }
  };
}
