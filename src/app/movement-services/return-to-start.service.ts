import { Injectable } from '@angular/core';

import { StartPageComponent } from '../startPage/startPage.component';

// import { LoadModelService } from './loadmodel.service';

import { LoadModelService } from './loadmodel.service';
import { LeftfistService } from './leftfist.service';
import { RightfistService } from './rightfist.service';
import { RightknifehandService } from './rightknifehand.service';
import { LeftknifehandService } from './leftknifehand.service';
import { TogglerService } from './toggler.service';

// gsap import
import { gsap } from 'gsap';




@Injectable({
  providedIn: 'root',
})
export class ReturnToStartService {
  constructor(
    public leftknifehand: LeftknifehandService,
    public loadmodel: LoadModelService,
    public loadLeftFist: LeftfistService,
    public loadRightFist: RightfistService,
    public rightknifehand: RightknifehandService,
    public toggler: TogglerService,
    
  ) {}

  // // // attention function area begins
  return_to_start_function = () => {
    if (
      this.loadmodel.spine &&
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL &&
      this.loadmodel.handR &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.shinR
    ) {
      this.leftknifehand.make_left_knife();
      this.rightknifehand.make_right_knife();
      this.toggler.titler_counter += 1;
      // console.log(this.loadmodel.upper_armL.quaternion);
      gsap.to(this.loadmodel.shoulderL.quaternion, {
        _w: 0.65417784,
        _x: -0.33964056,
        _y: -0.31106198,
        _z: -0.5999468,
        duration: 1,
      });
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.64516646,
        _x: -0.26719585,
        _y: 0.69433504,
        _z: -0.17396994,
        duration: 1,
      });
      gsap.to(this.loadmodel.shoulderR.quaternion, {
        _w: 0.6541779,
        _x: -0.33964077,
        _y: 0.3110618,
        _z: 0.59994668,
        duration: 1,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.64516646,
        _x: -0.26719585,
        _y: -0.69433504,
        _z: 0.17396994,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.99,
        _x: 0.09,
        _y: 0.06,
        _z: 0.05,
        duration: 1,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1,
        _w: 0.99,
        _x: 0.09,
        _y: -0.06,
        _z: -0.05,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.0,
        _z: 0.0,
        duration: 1,
      });
      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: -0.0,
        _z: -0.0,
        duration: 1,
      });
      gsap.to(this.loadmodel.shinL.quaternion, {
        duration: 1,
        _w: 0.99,
        _x: 0.1,
        _y: 0.0,
        _z: -0.02,
      });
      gsap.to(this.loadmodel.shinR.quaternion, {
        duration: 1,
        _w: 0.99,
        _x: 0.1,
        _y: -0.0,
        _z: 0.02,
      });

      gsap.to(this.loadmodel.spine.position, {
        duration: 1,
        x: 0.0,
      });
    }
  };

  // // // attention function area begins
  return_to_start_arms_only = () => {
    if (
      this.loadmodel.spine &&
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL &&
      this.loadmodel.handR &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.shinR
    ) {
      this.loadLeftFist.make_left_fist();
      this.loadRightFist.make_right_fist();
      // console.log(this.loadmodel.upper_armL.quaternion);
      gsap.to(this.loadmodel.shoulderL.quaternion, {
        _w: 0.62,
        _x: -0.61,
        _y: -0.35,
        _z: -0.36,
        duration: 1,
      });
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.55,
        _x: -0.24,
        _y: 0.6,
        _z: -0.52,
        duration: 1,
      });
      gsap.to(this.loadmodel.shoulderR.quaternion, {
        _w: 0.62,
        _x: -0.61,
        _y: 0.35,
        _z: 0.36,
        duration: 1,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.55,
        _x: -0.24,
        _y: -0.6,
        _z: 0.52,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.99,
        _x: 0.09,
        _y: 0.06,
        _z: 0.05,
        duration: 1,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1,
        _w: 0.99,
        _x: 0.09,
        _y: -0.06,
        _z: -0.05,
      });

      
    }
  };
}
