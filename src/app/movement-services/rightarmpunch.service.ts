import { Injectable } from '@angular/core';
 

import { loadmodelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';
import { TimerVariablesService } from './timer-variables.service';


@Injectable({
  providedIn: 'root',
})
export class RightarmpunchService {
  constructor(
    public loadmodel: loadmodelService,
    public loadTimer: TimerVariablesService
  ) {}

  // // //  right middle punch function area begins

  right_arm_middle_punch = () => {
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.582,
        _x: 0.2297,
        _y: -0.3926,
        _z: 0.6741,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.981,
        _x: 0.1638,
        _y: -0.0613,
        _z: 0.0843,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.9588,
        _x: -0.1326,
        _y: -0.206,
        _z: -0.1436,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });
    }
  };

  // // //  right middle punch function area begins

  right_arm_high_punch = () => {
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.616,
        _x: 0.3289,
        _y: -0.3063,
        _z: 0.647,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.981,
        _x: 0.1638,
        _y: -0.0613,
        _z: 0.0843,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.9588,
        _x: -0.1326,
        _y: -0.206,
        _z: -0.1436,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  // // //  left middle punch function area begins

  right_arm_knife_strike_thumb_up = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.582,
        _x: 0.2297,
        _y: -0.3926,
        _z: 0.6741,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.981,
        _x: 0.1638,
        _y: 0.0613,
        _z: -0.0843,
        duration: this.loadTimer.down_arms_timer,
        // ease: 'power4.in',
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.9188,
        _x: -0.0873,
        _y: 0.3804,
        _z: -0.059,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };
}
