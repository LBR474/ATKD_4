// begin imports 
import { Injectable } from '@angular/core';

import { StartPageComponent } from '../startPage/startPage.component';

import { LoadModelService } from './loadmodel.service';


// gsap import
import { gsap } from 'gsap';

// soba imports
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports
import * as THREE from 'three';
import { Object3D } from 'three';

@Injectable({
  providedIn: 'root',
})
export class HorsestanceService {
  constructor(
    public loadmodel: LoadModelService
    ) {}

  // // // horse stance function area begins
  horse_stance = () => {
    console.log("Called from horse service")
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
      gsap.to(this.loadmodel.spine.position, {
        y: 0.85,
        duration: 1,
      });
      gsap.to(this.loadmodel.spine.quaternion, {
        duration: 1,
        // _w: 0.7,
        // _x: 0.09,
        // _y: 0.7,
        // _z: -0.09,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.45,
        _x: 0.85,
        _y: 0.26,
        _z: 0.14,
        duration: 1,
      });

      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: 0.45,
        _x: 0.85,
        _y: -0.26,
        _z: -0.14,

        duration: 1,
      });

      gsap.to(this.loadmodel.shinL.quaternion, {
        duration: 1,
        _w: 0.88,
        _x: 0.42,
        _y: -0.05,
        _z: 0.22,
      });
      gsap.to(this.loadmodel.shinR.quaternion, {
        duration: 1,
        _w: 0.88,
        _x: 0.42,
        _y: 0.05,
        _z: -0.22,
        // onComplete: this.loadmodel.calling_loadmodel_service,
        // onCompleteParams: [this.loadmodel.spine],
      });
      gsap.to(this.loadmodel.footL.quaternion, {
        duration: 1,
        _w: 0.79,
        _x: -0.62,
        _y: 0.01,
        _z: -0.03,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        duration: 1,
        _w: 0.79,
        _x: -0.62,
        _y: -0.01,
        _z: 0.03,
      });
    }
  };
}
