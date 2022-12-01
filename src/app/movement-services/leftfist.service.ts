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
export class LeftfistService {
  constructor(public loadmodel: LoadModelService) {}

  // // // make left fist function area

  make_left_fist = () => {
    // // thumb left
    if (this.loadmodel.thumb03L) {
      gsap.to(this.loadmodel.thumb03L.quaternion, {
        _w: 0.05,
        _x: -1.0,
        _y: 0.05,
        _z: 0.0,
        duration: 1,
      });
    }

    // // first knuckle
    if (this.loadmodel.f_index01L) {
      gsap.to(this.loadmodel.f_index01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.loadmodel.f_middle01L) {
      gsap.to(this.loadmodel.f_middle01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.loadmodel.f_ring01L) {
      gsap.to(this.loadmodel.f_ring01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.loadmodel.f_pinky01L) {
      gsap.to(this.loadmodel.f_pinky01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }

    // // second knuckle
    if (this.loadmodel.f_index02L) {
      gsap.to(this.loadmodel.f_index02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.loadmodel.f_middle02L) {
      gsap.to(this.loadmodel.f_middle02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.loadmodel.f_ring02L) {
      gsap.to(this.loadmodel.f_ring02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.loadmodel.f_pinky02L) {
      gsap.to(this.loadmodel.f_pinky02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
  };
}
