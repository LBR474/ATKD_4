import { Injectable } from '@angular/core';

import { StartPageComponent } from '../startPage/startPage.component';

import { loadmodelService } from '../movement-services/loadmodel.service';

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
export class ShortstanceleftService {
  constructor(public loadmodel: loadmodelService) {}

  // // // short stance leg up function area begins
  short_stance_leg_up = () => {
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
        y: 0.95,
        duration: 1,
      });
      gsap.to(this.loadmodel.spine.quaternion, {
        duration: 1,
        _w: 0.7,
        _x: 0.09,
        _y: 0.7,
        _z: -0.09,
      });

      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: 0.35,
        _x: -0.59,
        _y: 0.47,
        _z: -0.56,

        duration: 1,
      });
      gsap.to(this.loadmodel.shinR.quaternion, {
        duration: 1,
        _w: 0.96,
        _x: 0.27,
        _y: 0.0,
        _z: -0.0,
        // onComplete: this.loadmodel.calling_loadmodel_service,
        // onCompleteParams: [this.loadmodel.spine],
      });
      gsap.to(this.loadmodel.footR.quaternion, {
        duration: 1,
        _w: 0.65,
        _x: -0.76,
        _y: 0.1,
        _z: 0.03,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.23,
        _x: -0.7,
        _y: -0.58,
        _z: 0.34,
        duration: 1,
      });

      gsap.to(this.loadmodel.shinL.quaternion, {
        duration: 1,
        _w: 0.96,
        _x: 0.27,
        _y: 0.0,
        _z: -0.0,
      });
      gsap.to(this.loadmodel.footL.quaternion, {
        duration: 1,
        _w: 0.79,
        _x: -0.62,
        _y: 0.01,
        _z: -0.03,
      });
    }
  };
}
