import { Injectable } from '@angular/core';


import { LoadModelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';


@Injectable({
  providedIn: 'root',
})
export class rightarmwidedownblockService {
  constructor(public loadmodel: LoadModelService) {}

  // // // movement one up function area begins
  right_arm_wide_down_block_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR
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
        // _w: 0.51,
        // _x: -0.61,
        // _y: -0.18,
        // _z: 0.57,
        _w: 0.4,
        _x: -0.01,
        _y: -0.27,
        _z: 0.88,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1,
        _w: 0.71,
        _x: 0.36,
        _y: 0.1,
        _z: 0.59,
        onComplete: () => {
          this.right_arm_wide_down_block_arms_down();
        },
      });
    }
  };

  // // // movement one down function area begins
  right_arm_wide_down_block_arms_down = () => {
    // console.log('Down called');
    if (
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.5,
        _x: -0.26,
        _y: -0.66,
        _z: 0.5,
        duration: 1,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.99,
        _x: 0.14,
        _y: -0.07,
        _z: -0.05,
        duration: 1,
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.99,
        _x: -0.15,
        _y: 0.01,
        _z: 0.01,
        duration: 1,
      });



      
    }
  };
}
