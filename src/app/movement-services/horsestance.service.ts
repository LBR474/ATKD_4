// begin imports
import { Injectable } from '@angular/core';

import { loadmodelService } from './loadmodel.service';

import { TimerVariablesService } from './timer-variables.service';

// gsap import
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class HorsestanceService {
  constructor(
    public loadmodel: loadmodelService,
    public loadTimer: TimerVariablesService
  ) {}

  // // // horse stance function area begins
  horse_stance_legs_up = () => {
    if (this.loadmodel.pelvisL && this.loadmodel.shinL) {
      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.1819,
        _x: -0.3307,
        _y: -0.9254,
        _z: 0.0354,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.shinL.quaternion, {
        duration: this.loadTimer.up_arms_timer,
        _w: 0.8012,
        _x: 0.5979,
        _y: -0.013,
        _z: -0.0183,
        onComplete: () => {
          this.horse_stance();
        },
      });
    }
  };

  // // // horse stance function area begins
  horse_stance = () => {
    console.log('Called from horse service');
    if (
      this.loadmodel.metarig &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL
      && this.loadmodel.shinR 
      && this.loadmodel.footR 
      && this.loadmodel.footL
    ) {
      console.log(this.loadmodel.metarig.position);
      gsap.to(this.loadmodel.metarig.position, {
        x: 0.1,
        y: -0.1,
        duration: 0.5,
      });

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        // _w: 0.3852,
        // _x: 0.0167,
        // _y: -0.8944,
        // _z: -0.2267,
        _w: 0.3817,
        _x: 0.0543,
        _y: -0.9123,
        _z: -0.1379,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.3817,
        _x: 0.0543,
        _y: 0.9123,
        _z: 0.1379,

        duration: this.loadTimer.up_arms_timer,
      });
 
      gsap.to(this.loadmodel.thighL.quaternion, {
        duration: 0.5,
       
        _w: 0.078384,
        _x: -0.38211036,
        _y: -0.63807213,
        _z: 0.66386116,
      });
      gsap.to(this.loadmodel.thighR.quaternion, {
        duration: 0.5,
        _w: 0.07838394,
        _x: -0.38211039,
        _y: 0.63807213,
        _z: -0.66386116,
       
      });
    
    
      gsap.to(this.loadmodel.shinL.quaternion, {
        duration: 0.5,
        // _w: 0.9264,
        // _x: 0.3344,
        // _y: -0.0397,
        // _z: 0.1684,
        _w: 0.7727,
        _x: 0.5696,
        _y: -0.1373,
        _z: 0.2443,
      });
      gsap.to(this.loadmodel.shinR.quaternion, {
        duration: 0.5,
        _w: 0.7727,
        _x: 0.5696,
        _y: 0.1373,
        _z: -0.2443,
        // onComplete: this.loadmodel.calling_loadmodel_service,
        // onCompleteParams: [this.loadmodel.spine],
      });
      gsap.to(this.loadmodel.footL.quaternion, {
        duration: 0.5,
        _w: 0.6641,
        _x: -0.7475,
        _y: -0.0093,
        _z: 0.0094,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        duration: 0.5,
        _w: 0.6641,
        _x: -0.7475,
        _y: 0.0093,
        _z: -0.0094,
      });
    }
  };

  horse_stance_BP2_final = () => {
    console.log('Called from horse service');
    if (
      this.loadmodel.spine &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.shinR &&
      this.loadmodel.footR &&
      this.loadmodel.footL
    ) {
      console.log(this.loadmodel.spine.position);
      gsap.to(this.loadmodel.spine.position, {
        x: 0.2,
        y: 1.2,
        z: -0.1,
        duration: 0.5,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.45,
        _x: 0.85,
        _y: 0.26,
        _z: 0.14,
        duration: 0.5,
      });

      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: 0.45,
        _x: 0.85,
        _y: -0.26,
        _z: -0.14,

        duration: 0.5,
      });

      gsap.to(this.loadmodel.shinL.quaternion, {
        duration: 0.5,
        _w: 0.88,
        _x: 0.42,
        _y: -0.05,
        _z: 0.22,
      });
      gsap.to(this.loadmodel.shinR.quaternion, {
        duration: 0.5,
        _w: 0.88,
        _x: 0.42,
        _y: 0.05,
        _z: -0.22,
        // onComplete: this.loadmodel.calling_loadmodel_service,
        // onCompleteParams: [this.loadmodel.spine],
      });
      gsap.to(this.loadmodel.footL.quaternion, {
        duration: 0.5,
        _w: 0.79,
        _x: -0.62,
        _y: 0.01,
        _z: -0.03,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        duration: 0.5,
        _w: 0.79,
        _x: -0.62,
        _y: -0.01,
        _z: 0.03,
      });
    }
  };
}
