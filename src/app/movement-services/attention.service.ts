import { Injectable } from '@angular/core';

// import { loadmodelService } from './loadmodel.service';

import { loadmodelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class AttentionService {
  constructor(public loadmodel: loadmodelService) {}

  // // // attention function area begins
  attention = () => {
    if (
      // whole body
      this.loadmodel.metarig &&
      // arms
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      // legs/pelvis
      
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR 
      
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.5989,
        _x: -0.3975,
        _y: 0.6289,
        _z: -0.2964,
        duration: 1,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.5989,
        _x: -0.3975,
        _y: -0.6289,
        _z: 0.2964,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.9228,
        _x: 0.2558,
        _y: 0.0951,
        _z: -0.2721,
        duration: 1,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1,
        _w: 0.9228,
        _x: 0.2558,
        _y: -0.0951,
        _z: 0.2721,
      });

       gsap.to(this.loadmodel.pelvisL.quaternion, {
         _w: 0.307,
         _x: -0.1721,
         _y: -0.7643,
         _z: -0.5404,
         duration: 1,
       });
      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.307,
        _x: -0.1721,
        _y: 0.7643,
        _z: 0.5404,
        duration: 1,
      });



      gsap.to(this.loadmodel.metarig.position, {
        duration: 1,
        x: -0.1,
      });
    }
  };
}
