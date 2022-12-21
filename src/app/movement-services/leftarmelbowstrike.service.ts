import { Injectable } from '@angular/core';


import { LoadModelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';


@Injectable({
  providedIn: 'root',
})
export class leftarmelbowstrike {
  constructor(public loadmodel: LoadModelService) {}

  // // // left arm elbow strike arms up function area begins
  left_arm_elbow_strike_arms_up = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
       gsap.to(this.loadmodel.shoulderL.quaternion, {
         duration: 1,
        //  _w: 0.62,
        //  _x: -0.61,
        //  _y: -0.35,
        //  _z: -0.36,
        _w: 0.62, 
        _x: -0.61, 
        _y: -0.35, 
        _z: -0.36, 
       });
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        duration: 1,

        _w: 0.4,
        _x: -0.01,
        _y: 0.27,
        _z: -0.88,
        
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        duration: 1,
        _w: 0.98,
        _x: 0.1,
        _y: 0.04,
        _z: -0.14,
        onComplete: () => {
         this.left_arm_elbow_strike_arms_down();
        },
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.53,
        _x: -0.17,
        _y: 0.83,
        _z: 0.06,
        duration: 1,
      });
    }
  };

  // // // left arm elbow strike arms down function area begins
  left_arm_elbow_strike_arms_down = () => {
    console.log('Down called');
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL
    ) {
      
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        duration: 1,
        // _w: 0.4,
        // _x: -0.39,
        // _y: 0.77,
        // _z: -0.29,
        _w: 0.4,
        _x: -0.39,
        _y: 0.77,
        _z: -0.29,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        duration: 1,
        // _w: 0.98,
        // _x: 0.1,
        // _y: 0.04,
        // _z: -0.14,
        _w: 0.6,
        _x: 0.78,
        _y: 0.16,
        _z: -0.07,
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        duration: 1,
        // _w: 0.91,
        // _x: -0.14,
        // _y: -0.39,
        // _z: 0.04,
        _w: 0.46,
        _x: -0.08,
        _y: -0.88,
        _z: 0.12,
      });
    }
  };
}
