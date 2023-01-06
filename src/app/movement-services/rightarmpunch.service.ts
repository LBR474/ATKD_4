import { Injectable } from '@angular/core';
 

import { LoadModelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';


@Injectable({
  providedIn: 'root',
})
export class RightarmpunchService {
  constructor(public loadmodel: LoadModelService) {}

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
        _w: 0.6381,
        _x: 0.0709,
        _y: -0.2975,
        _z: 0.7066,
        duration: 0.25,
        ease: 'power4.in',
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.981,
        _x: 0.1638,
        _y: -0.0613,
        _z: 0.0843,
        duration: 0.25,
        ease: 'power4.in',
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.8829,
        _x: 0.0146,
        _y: -0.4632,
        _z: -0.0757,
        duration: 0.25,
        ease: 'power4.in',
      });
    }
  };
}