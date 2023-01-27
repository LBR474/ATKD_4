import { Injectable } from '@angular/core';

import { loadmodelService } from './loadmodel.service';


import { TimerVariablesService } from './timer-variables.service';

// gsap import
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class LeftarmpunchService {
  constructor(
    public loadmodel: loadmodelService,
    public loadTimer: TimerVariablesService
  ) {}

  // // //  left middle punch function area begins

  left_arm_middle_punch = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.582,
        _x: 0.2297,
        _y: 0.3926,
        _z: -0.6741,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.981,
        _x: 0.1638,
        _y: 0.0613,
        _z: -0.0843,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.9588,
        _x: -0.1326,
        _y: 0.206,
        _z: 0.1436,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  // // //  left high punch function area begins

  left_arm_high_punch = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.616,
        _x: 0.3289,
        _y: 0.3063,
        _z: -0.647,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.981,
        _x: 0.1638,
        _y: 0.0613,
        _z: -0.0843,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.9588,
        _x: -0.1326,
        _y: 0.206,
        _z: 0.1436,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });
    }
  };

  // // //  left middle punch function area begins

  left_arm_knife_strike_thumb_up = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.582,
        _x: 0.2297,
        _y: 0.3926,
        _z: -0.6741,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.981,
        _x: 0.1638,
        _y: 0.0613,
        _z: -0.0843,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.8771,
        _x: -0.0811,
        _y: -0.4686,
        _z: 0.0673,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };
}