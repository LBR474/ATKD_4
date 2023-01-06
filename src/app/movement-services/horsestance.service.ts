// begin imports 
import { Injectable } from '@angular/core';

import { StartPageComponent } from '../startPage/startPage.component';

import { LoadModelService } from './loadmodel.service';


// gsap import
import { gsap } from 'gsap';



@Injectable({
  providedIn: 'root',
})
export class HorsestanceService {
  constructor(public loadmodel: LoadModelService) {}

  // // // horse stance function area begins
  horse_stance_legs_up = () => {
    
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
     
      // gsap.to(this.loadmodel.spine.position, {
      //   x: 0.2,
      //   y: 1.0,
      //   duration: 0.5,
      // });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.7153,
        _x: 0.6987,
        _y: -0.0079,
        _z: -0.0047,
        duration: 1.0,
      });

      // gsap.to(this.loadmodel.thighR.quaternion, {
      //   _w: 0.45,
      //   _x: 0.85,
      //   _y: -0.26,
      //   _z: -0.14,

      //   duration: 0.5,
      // });

      gsap.to(this.loadmodel.shinL.quaternion, {
        duration: 1.0,
        _w: 0.7508,
        _x: 0.6602,
        _y: -0.0115,
        _z: -0.0193,
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
        y: 1.0,
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
