import { Injectable } from '@angular/core';

import { LoadModelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class LeftarmblockService {
  constructor(public loadmodel: LoadModelService) {}

  // // //  left_arm_wide_down_block_arms up function area begins

  left_arm_wide_down_block_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.5667,
        _x: -0.0575,
        _y: 0.4206,
        _z: -0.7062,
        duration: 1.1,
        
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.623,
        _x: 0.6557,
        _y: 0.1741,
        _z: -0.3894,
        duration: 1.1,
        onComplete: () => {
          this.left_arm_wide_down_block_arms_down();
        },
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.9955,
        _x: 0.0927,
        _y: 0.004,
        _z: 0.0207,
        duration: 1.1,
      });
    }
  };

  // // // left_arm_wide_down_block_arms down function area begins

  left_arm_wide_down_block_arms_down = () => {
    //console.log('Down called');
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      //this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      // gsap.to(this.loadmodel.shoulderL.quaternion, {
      //   _w: 0.6542,
      //   _x: -0.3396,
      //   _y: -0.3111,
      //   _z: -0.5999,
      //   duration: 1.1,
      // });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.5,
        _x: -0.2594,
        _y: 0.656,
        _z: -0.5023,
        duration: 0.25,
        //ease: 'power4.in',
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.99,
        _x: 0.12,
        _y: 0.04,
        _z: 0.01,
        duration: 0.25,
        //ease: 'power4.in',
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        duration: 0.25,
        _w: 0.99,
        _x: -0.15,
        _y: 0.01,
        _z: 0.01,
        //ease: 'power4.in',
      });
    }
  };

  // // //  left_arm_wide_middle_block_arms up function area begins

  left_arm_wide_middle_block_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        // _w: 0.4,
        // _x: 0.01,
        // _y: 0.27,
        // _z: -0.88,
        _w: 0.4095,
        _x: 0.1476,
        _y: 0.3941,
        _z: -0.8095,
        duration: 1.1,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        // _w: 0.71,
        // _x: 0.36,
        // _y: -0.1,
        // _z: -0.59,
        _w: 0.7107,
        _x: 0.1921,
        _y: 0.0105,
        _z: -0.6767,
        duration: 1.1,
        onComplete: () => {
          this.left_arm_wide_middle_block_arms_down();
        },
      });
    }
  };

  // // //  left_arm_wide_middle_block_arms down function area begins

  left_arm_wide_middle_block_arms_down = () => {
    //console.log('Down called');
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        // _w: -0.05,
        // _x: 0.17,
        // _y: 0.83,
        // _z: -0.53,
        _w: 0.698,
        _x: -0.3828,
        _y: 0.2334,
        _z: -0.5583,
        duration: 0.25,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        // _w: -0.05,
        // _x: 0.17,
        // _y: 0.83,
        // _z: -0.53,
        _w: 0.6377,
        _x: 0.7593,
        _y: 0.0164,
        _z: 0.1292,
        duration: 0.25,
      });
    }
  };

























  
  // // //  left_arm_wide_upper_block_arms up function area begins

  left_arm_wide_upper_block_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        // _w: 0.4,
        // _x: 0.01,
        // _y: 0.27,
        // _z: -0.88,
        _w: 0.4095,
        _x: 0.1476,
        _y: 0.3941,
        _z: -0.8095,
        duration: 1.1,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        // _w: 0.71,
        // _x: 0.36,
        // _y: -0.1,
        // _z: -0.59,
        _w: 0.7107,
        _x: 0.1921,
        _y: 0.0105,
        _z: -0.6767,
        duration: 1.1,
        onComplete: () => {
          this.left_arm_wide_upper_block_arms_down();
        },
      });
    }
  };

  // // //  left_arm_wide_middle_block_arms down function area begins

  left_arm_wide_upper_block_arms_down = () => {
    //console.log('Down called');
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.shoulderL.quaternion, {
        _w: 0.5764,
        _x: 0.0891,
        _y: -0.5131,
        _z: -0.6297,
        duration: 0.25,
      });
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        // _w: 0.8394,
        // _x: 0.2748,
        // _y: -0.4436,
        // _z: 0.1519,
        _w: 0.9381,
        _x: 0.2654,
        _y: -0.2212,
        _z: 0.0227,
        duration: 0.25,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        // _w: 0.736,
        // _x: 0.3968,
        // _y: 0.2001,
        // _z: -0.5109,
        _w: 0.7165,
        _x: 0.4307,
        _y: -0.0681,
        _z: -0.5446,
        duration: 0.25,
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.9816,
        _x: 0.1898,
        _y: 0.006,
        _z: 0.0202,
        duration: 0.25,
      });

   
    }
  };
}
