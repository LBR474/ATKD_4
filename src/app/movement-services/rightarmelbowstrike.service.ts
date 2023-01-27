import { Injectable } from '@angular/core';

import { loadmodelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';
import { TimerVariablesService } from './timer-variables.service';

@Injectable({
  providedIn: 'root',
})
export class rightarmelbowstrike {
  constructor(
    public loadmodel: loadmodelService,
    public loadTimer: TimerVariablesService,
    ) {}


















  // // // right arm elbow strike arms up function area begins

  right_arm_elbow_strike_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
    
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.up_arms_timer,
        _w: 0.5667,
        _x: -0.0575,
        _y: -0.4206,
        _z: 0.7062,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.up_arms_timer,
        _w: 0.9947,
        _x: 0.0867,
        _y: -0.05,
        _z: -0.024,
        onComplete: () => {
          this.right_arm_elbow_strike_arms_down();
        },
      });

    
      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.381,
        _x: -0.02,
        _y: 0.9185,
        _z: -0.1034,
        duration: this.loadTimer.up_arms_timer,
      });
    }
  };

  // // // right arm elbow strike arms down function area begins

  right_arm_elbow_strike_arms_down = () => {
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      //

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        // _w: 0.426,
        // _x: -0.3376,
        // _y: -0.8393,
        // _z: -0.0064,
        _w: 0.2386,
        _x: -0.596,
        _y: -0.7634,
        _z: 0.0711,
        //ease: 'power4.in',
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        // _w: 0.6,
        // _x: 0.78,
        // _y: -0.04,
        // _z: -0.16,
        _w: 0.562,
        _x: 0.8194,
        _y: -0.0165,
        _z: -0.1125,
        //ease: 'power4.in',
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        // _w: 0.46,
        // _x: -0.08,
        // _y: 0.88,
        // _z: -0.12,
        _w: 0.6311,
        _x: -0.0492,
        _y: 0.7685,
        _z: -0.0932,
        //ease: 'power4.in',
      });
    }
  };































  
  // // // right arm middle and upper elbow strike arms up function area begins

  right_arm_MandU_elbow_strike_arms_up = () => {
    //this.loadhorse.horse_stance();
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.shoulderR.quaternion, {
        duration: this.loadTimer.up_arms_timer,
        _w: 0.6541779,
        _x: -0.33964077,
        _y: 0.3110618,
        _z: 0.59994668,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.up_arms_timer,
        // _w: 0.4,
        // _x: 0.01,
        // _y: -0.27,
        // _z: 0.88,
        _w: 0.4785,
        _x: 0.011,
        _y: -0.3066,
        _z: 0.8227,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.up_arms_timer,
        // _w: 0.98,
        // _x: 0.1,
        // _y: -0.04,
        // _z: 0.14,
        _w: 0.4589,
        _x: 0.5419,
        _y: 0.0202,
        _z: 0.7038,
        onComplete: () => {
          this.right_arm_MandU_elbow_strike_arms_down();
        },
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.53,
        _x: -0.17,
        _y: 0.83,
        _z: -0.06,
        duration: this.loadTimer.up_arms_timer,
      });
    }
  };

  // // // right arm middle and upper elbow strike arms down function area begins

  right_arm_MandU_elbow_strike_arms_down = () => {
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.shoulderR.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        _w: 0.6541779,
        _x: -0.33964077,
        _y: 0.3110618,
        _z: 0.59994668,
      });


      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        // _w: 0.426,
        // _x: -0.3376,
        // _y: -0.8393,
        // _z: -0.0064,
        _w: 0.2386,
        _x: -0.596,
        _y: -0.7634,
        _z: 0.0711,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        // _w: 0.6,
        // _x: 0.78,
        // _y: -0.04,
        // _z: -0.16,
        _w: 0.562,
        _x: 0.8194,
        _y: -0.0165,
        _z: -0.1125,
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        _w: 0.6311,
        _x: -0.0492,
        _y: 0.7685,
        _z: -0.0932,
      });
    }
  };
}
