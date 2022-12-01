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
export class RightfistService {
  constructor(public loadmodel: LoadModelService) {}
  // // // make right fist function area

  make_right_fist = () => {
    // // thumb right
    if (this.loadmodel.thumb03R) {
      gsap.to(this.loadmodel.thumb03R.quaternion, {
        _w: 0.05,
        _x: -1.0,
        _y: 0.05,
        _z: 0.0,
        duration: 1,
      });
    }

    // // first knuckle
    if (this.loadmodel.f_index01R) {
      gsap.to(this.loadmodel.f_index01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.loadmodel.f_middle01R) {
      gsap.to(this.loadmodel.f_middle01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.loadmodel.f_ring01R) {
      gsap.to(this.loadmodel.f_ring01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.loadmodel.f_pinky01R) {
      gsap.to(this.loadmodel.f_pinky01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }

    // // second knuckle
    if (this.loadmodel.f_index02R) {
      gsap.to(this.loadmodel.f_index02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.loadmodel.f_middle02R) {
      gsap.to(this.loadmodel.f_middle02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.loadmodel.f_ring02R) {
      gsap.to(this.loadmodel.f_ring02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.loadmodel.f_pinky02R) {
      gsap.to(this.loadmodel.f_pinky02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
  };
}
