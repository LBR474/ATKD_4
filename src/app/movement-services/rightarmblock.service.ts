import { Injectable } from '@angular/core';
 

import { LoadModelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';


@Injectable({
  providedIn: 'root',
})
export class rightarmblockService {
  constructor(public loadmodel: LoadModelService) {}









  // // // right_arm_wide_down_block_arms up function area begins

  right_arm_wide_down_block_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR
    ) {
     
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1.1,
        // _w: 0.51,
        // _x: -0.61,
        // _y: -0.18,
        // _z: 0.57,
        _w: 0.5667,
        _x: -0.0575,
        _y: -0.4206,
        _z: 0.7062,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1.1,
        _w: 0.623,
        _x: 0.6557,
        _y: -0.1741,
        _z: 0.3894,
        onComplete: () => {
          this.right_arm_wide_down_block_arms_down();
        },
      });
    }
  };

  // // // right_arm_wide_down_block_arms down function area begins

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
        duration: 0.25,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.99,
        _x: 0.14,
        _y: -0.07,
        _z: -0.05,
        duration: 0.25,
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.99,
        _x: -0.15,
        _y: 0.01,
        _z: 0.01,
        duration: 0.25,
      });
    }
  };


















  // // // right_arm_wide_middle_block_arms up function area begins

  right_arm_wide_middle_block_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR
    ) {
      // gsap.to(this.loadmodel.shoulderR.quaternion, {
      //   duration: 1.1,
      //   _w: 0.62,
      //   _x: -0.61,
      //   _y: 0.35,
      //   _z: 0.36,
      // });
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1.1,
        // _w: 0.51,
        // _x: -0.61,
        // _y: -0.18,
        // _z: 0.57,
        _w: 0.4095,
        _x: 0.1476,
        _y: -0.3941,
        _z: 0.8095,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1.1,
        // _w: 0.71,
        // _x: 0.36,
        // _y: 0.1,
        // _z: 0.59,
        _w: 0.7107,
        _x: 0.1921,
        _y: 0.0105,
        _z: 0.6767,
        onComplete: () => {
          this.right_arm_wide_middle_block_arms_down();
        },
      });
    }
  };






  // // // right_arm_wide_down_block_arms down function area begins

  right_arm_wide_middle_block_arms_down = () => {
    // console.log('Down called');
    if (
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        // _w: 0.5,
        // _x: -0.26,
        // _y: -0.66,
        // _z: 0.5,
        _w: 0.698,
        _x: -0.3828,
        _y: -0.2334,
        _z: 0.5583,
        duration: 0.25,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        
        _w: 0.6377,
        _x: 0.7593,
        _y: 0.0164,
        _z: 0.1292,
        duration: 0.25,
      });
    }
  };





















  

  // // // right_arm_wide_upper_block_arms up function area begins

  right_arm_wide_upper_block_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR
    ) {
      // gsap.to(this.loadmodel.shoulderR.quaternion, {
      //   duration: 1.1,
      //   _w: 0.62,
      //   _x: -0.61,
      //   _y: 0.35,
      //   _z: 0.36,
      // });
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1.1,
        // _w: 0.51,
        // _x: -0.61,
        // _y: -0.18,
        // _z: 0.57,
        _w: 0.4095,
        _x: -0.1476,
        _y: -0.3941,
        _z: 0.8095,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1.1,
        // _w: 0.71,
        // _x: 0.36,
        // _y: 0.1,
        // _z: 0.59,
        _w: 0.7107,
        _x: 0.1921,
        _y: 0.0105,
        _z: 0.6767,
        onComplete: () => {
          this.right_arm_wide_upper_block_arms_down();
        },
      });
    }
  };

  // // // right_arm_wide_upper_block_arms down function area begins

  right_arm_wide_upper_block_arms_down = () => {
    // console.log('Down called');
    if (
      this.loadmodel.upper_armR &&
      this.loadmodel.shoulderR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {

       gsap.to(this.loadmodel.shoulderR.quaternion, {
         //  _w: 0.6882,
         //  _x: -0.0126,
         //  _y: 0.5206,
         //  _z: 0.5052,
         _w: 0.5764,
         _x: 0.0891,
         _y: 0.5131,
         _z: 0.6297,
         duration: 0.25,
       });
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.9381,
        _x: 0.2654,
        _y: 0.2212,
        _z: 0.0227,
        duration: 0.25,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        // _w: 0.6163,
        // _x: 0.1599,
        // _y: -0.2212,
        // _z: 0.7387,
        _w: 0.7165,
        _x: 0.4307,
        _y: -0.0681,
        _z: 0.5446,
        duration: 0.25,
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.9816,
        _x: -0.1898,
        _y: 0.006,
        _z: 0.0202,
        duration: 0.25,
      });
    }
  };
}
