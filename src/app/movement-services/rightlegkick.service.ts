import { Injectable } from '@angular/core';

import { loadmodelService } from './loadmodel.service';
import { TimerVariablesService } from './timer-variables.service';

// gsap import
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class RightlegkickService {
  constructor(
    public loadmodel: loadmodelService,
    public loadTimer: TimerVariablesService
  ) {}

  right_leg_rising_kick_leg_up() {
    if (
      this.loadmodel.metarig &&
      this.loadmodel.spine &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.footL &&
      this.loadmodel.footR
    ) {
      gsap.to(this.loadmodel.metarig.position, {
        x: 0.3,
        y: -0.0,
        z: 0.3,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.36227676,
        _x: -0.13191658,
        _y: -0.73970294,
        _z: -0.55153716,
        duration: this.loadTimer.up_arms_timer,
      });
      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.99837738,
        _x: 0.05232846,
        _y: -0.00065198,
        _z: -0.02244729,
        duration: this.loadTimer.up_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.2083,
        _x: -0.0818,
        _y: 0.9263,
        _z: 0.3031,
        duration: this.loadTimer.up_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: -0.1702,
        _x: -0.2539,
        _y: 0.9438,
        _z: -0.126,
        duration: this.loadTimer.up_arms_timer,
        //duration: 2,
      });

      gsap.to(this.loadmodel.footL.quaternion, {
        _w: 0.9674,
        _x: -0.2529,
        _y: -0.0025,
        _z: 0.013,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.79713196,
        _x: -0.60366082,
        _y: 0.00728697,
        _z: -0.01100774,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.right_leg_rising_kick_leg_down();
        },
      });
    }
  }

  right_leg_rising_kick_leg_down() {
    if (
      this.loadmodel.metarig &&
      // arms area
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL &&
      this.loadmodel.handR &&
      // legs area
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.shinR &&
      this.loadmodel.footL &&
      this.loadmodel.footR
    ) {
      // this.loadLeftFist.make_left_fist();
      // this.loadRightFist.make_right_fist();

      gsap.to(this.loadmodel.metarig.quaternion, {
        _w: 0.957,
        _x: 0.0,
        _y: 0.2901,
        _z: 0.0,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.metarig.position, {
        x: 0.2,
        y: -0.1,
        z: 0.2,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.2706,
        _x: -0.2153,
        _y: -0.9274,
        _z: -0.1427,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.2952,
        _x: 0.0314,
        _y: 0.5392,
        _z: 0.7882,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: 0.07838394,
        _x: -0.38211039,
        _y: 0.63807213,
        _z: -0.66386116,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.856,
        _x: 0.5166,
        _y: -0.0112,
        _z: -0.0195,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.footL.quaternion, {
        _w: 0.7971319,
        _x: -0.60366088,
        _y: -0.00728697,
        _z: 0.01100774,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.6383,
        _x: -0.7127,
        _y: 0.2258,
        _z: 0.1837,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  }
}
