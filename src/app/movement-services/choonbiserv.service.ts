import { Injectable } from '@angular/core';

// import { LoadModelService } from './loadmodel.service';

import { LoadModelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';
import { LeftfistService } from './leftfist.service';
import { RightfistService } from './rightfist.service';

@Injectable({
  providedIn: 'root',
})
export class ChoonbiservService {
  constructor(
    public loadModel: LoadModelService,
    public loadLeftFist: LeftfistService,
    public loadRightFist: RightfistService,
    
    ) {}
  // // // choon bi function area begins
  choon_bi_up_arms = () => {
    if (
      this.loadModel.spine &&
      this.loadModel.handL &&
      this.loadModel.shoulderL &&
      this.loadModel.shoulderR &&
      this.loadModel.upper_armL &&
      this.loadModel.upper_armR &&
      this.loadModel.forearmL &&
      this.loadModel.forearmR &&
      this.loadModel.handR &&
      this.loadModel.pelvisL &&
      this.loadModel.pelvisR &&
      this.loadModel.thighL &&
      this.loadModel.thighR
    ) {
      gsap.to(this.loadModel.shoulderL.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: -0.59,
        _z: -0.55,
        duration: 1,
      });
      gsap.to(this.loadModel.shoulderR.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: 0.59,
        _z: 0.55,
        duration: 1,
      });

      gsap.to(this.loadModel.upper_armL.quaternion, {
        _w: 0.5,
        _x: 0.12,
        _y: 0.78,
        _z: -0.33,
        duration: 1,
      });

      gsap.to(this.loadModel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.5,
        _x: 0.12,
        _y: -0.78,
        _z: 0.33,
      });

      gsap.to(this.loadModel.forearmL.quaternion, {
        _w: 0.8,
        _x: 0.6,
        _y: 0.04,
        _z: 0.02,
        duration: 1,
      });

      gsap.to(this.loadModel.forearmR.quaternion, {
        duration: 1,
        _w: 0.8,
        _x: 0.6,
        _y: 0.04,
        _z: 0.02,
      });

      gsap.to(this.loadModel.handL.quaternion, {
        _w: 0.99,
        _x: -0.15,
        _y: -0.01,
        _z: -0.01,
        duration: 1,
      });
      gsap.to(this.loadModel.handR.quaternion, {
        _w: 0.99,
        _x: -0.15,
        _y: 0.01,
        _z: 0.01,
        duration: 1,
      });
      gsap.to(this.loadModel.spine.position, {
        duration: 1,
        y: 1.0,
        onComplete: this.choon_bi,
      });
    }
  };

  // // // choon bi function area begins
  choon_bi = () => {
    if (
      this.loadModel.spine &&
      this.loadModel.handL &&
      this.loadModel.shoulderL &&
      this.loadModel.shoulderR &&
      this.loadModel.upper_armL &&
      this.loadModel.upper_armR &&
      this.loadModel.forearmL &&
      this.loadModel.forearmR &&
      this.loadModel.handR &&
      this.loadModel.pelvisL &&
      this.loadModel.pelvisR &&
      this.loadModel.thighL &&
      this.loadModel.thighR &&
      this.loadModel.shinL &&
      this.loadModel.shinR 
    ) {
      this.loadLeftFist.make_left_fist();
      this.loadRightFist.make_right_fist();

      
      gsap.to(this.loadModel.pelvisL.quaternion, {
        _w: 0.47,
        _x: -0.27,
        _y: -0.71,
        _z: -0.45,
        duration: 1,
      });
      
      
      gsap.to(this.loadModel.pelvisR.quaternion, {
        _w: 0.47,
        _x: -0.27,
        _y: 0.71,
        _z: 0.45,
        duration: 1,
      });

      gsap.to(this.loadModel.thighL.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.0,
        _z: 0.0,
        duration: 1,
      });

      gsap.to(this.loadModel.thighR.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.0,
        _z: 0.0,
        duration: 1,
      });
      gsap.to(this.loadModel.shinL.quaternion, {
        _w: 0.99,
        _x: 0.1,
        _y: 0.0,
        _z: -0.02,
        duration: 1,
      });

      gsap.to(this.loadModel.shinR.quaternion, {
        _w: 0.99,
        _x: 0.1,
        _y: -0.0,
        _z: 0.02,
        duration: 1,
      });




      gsap.to(this.loadModel.shoulderL.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: -0.59,
        _z: -0.55,
        duration: 1,
      });
      gsap.to(this.loadModel.shoulderR.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: 0.59,
        _z: 0.55,
        duration: 1,
      });

      gsap.to(this.loadModel.upper_armL.quaternion, {
        _w: 0.3,
        _x: -0.23,
        _y: 0.76,
        _z: -0.52,
        duration: 1,
      });

      gsap.to(this.loadModel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.3,
        _x: -0.23,
        _y: -0.76,
        _z: 0.52,
      });
      gsap.to(this.loadModel.forearmL.quaternion, {
        _w: 0.95,
        _x: 0.31,
        _y: 0.04,
        _z: 0.02,
        duration: 1,
      });

      gsap.to(this.loadModel.forearmR.quaternion, {
        duration: 1,
        _w: 0.95,
        _x: 0.31,
        _y: 0.04,
        _z: 0.02,
      });
    }
  };
}
