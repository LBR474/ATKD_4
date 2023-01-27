import { Injectable } from '@angular/core';

import { loadmodelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';
import { TimerVariablesService } from './timer-variables.service';

@Injectable({
  providedIn: 'root',
})
export class LongstancefacingleftService {
  constructor(
    public loadmodel: loadmodelService,
    public loadTimer: TimerVariablesService
  ) {}

  // // // long stance facing right function area begins
  long_stance_facing_left_spin_back_90 = () => {
    if (
      this.loadmodel.spine &&
      this.loadmodel.spine006 &&
      this.loadmodel.metarig &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.shinR &&
      this.loadmodel.footR &&
      this.loadmodel.footL
    ) {
      gsap.to(this.loadmodel.metarig.position, {
        x: 0.0,
        y: -0.10,
        z: -0.025,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.metarig.quaternion, {
        _w: 0.7074,
        _x: 0.0,
        _y: 0.7068,
        _z: 0.0,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.3623,
        _x: -0.1319,
        _y: -0.7397,
        _z: -0.5515,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.3623,
        _x: -0.1319,
        _y: 0.7397,
        _z: 0.5515,
        duration: this.loadTimer.full_turn_duration,
      });



       gsap.to(this.loadmodel.thighL.quaternion, {
         _w: -0.1109,
         _x: -0.374,
         _y: -0.8756,
         _z: 0.2849,
         duration: this.loadTimer.full_turn_duration,
       });

       gsap.to(this.loadmodel.thighR.quaternion, {
         _w: 0.2186,
         _x: -0.3231,
         _y: 0.3356,
         _z: -0.8574,
         duration: this.loadTimer.full_turn_duration,
       });


      gsap.to(this.loadmodel.shinL.quaternion, {
        duration: this.loadTimer.full_turn_duration,
        _w: 0.9003,
        _x: 0.4281,
        _y: -0.0143,
        _z: 0.0774,
      });
      gsap.to(this.loadmodel.shinR.quaternion, {
        duration: this.loadTimer.full_turn_duration,
        _w: 0.9984,
        _x: 0.0523,
        _y: 0.0007,
        _z: 0.0224,
      });
      gsap.to(this.loadmodel.footL.quaternion, {
        duration: this.loadTimer.full_turn_duration,
        _w: 0.8524,
        _x: -0.5227,
        _y: -0.0062,
        _z: 0.0117,
      });
      gsap.to(this.loadmodel.footR.quaternion, {
        duration: this.loadTimer.full_turn_duration,
        _w: 0.6641,
        _x: -0.7475,
        _y: 0.0093,
        _z: -0.0094,
      });
    }
  };
}
