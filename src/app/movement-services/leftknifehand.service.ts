import { Injectable } from '@angular/core';

import { StartPageComponent } from '../startPage/startPage.component';

import { loadmodelService } from './loadmodel.service';

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
export class LeftknifehandService {
  constructor(public loadmodel: loadmodelService) {}
  // // // make left knife function area

  make_left_knife = () => {
    // // thumb left
    if (this.loadmodel.thumb01L) {
      gsap.to(this.loadmodel.thumb01L.quaternion, {
        _w: 0.6165,
        _x: 0.0904,
        _y: 0.7555,
        _z: -0.2025,
        duration: 1,
      });
    }
    if (this.loadmodel.thumb02L) {
      gsap.to(this.loadmodel.thumb02L.quaternion, {
        _w: 0.9974,
        _x: -0.0706,
        _y: 0.0073,
        _z: -0.0161,
        duration: 1,
      });
    }
     if (this.loadmodel.thumb03L) {
       gsap.to(this.loadmodel.thumb03L.quaternion, {
         _w: 0.99899215,
         _x: -0.01559444,
         _y: 0.00294079,
         _z: -0.04198668,
         duration: 1,
       });
     }

     if (this.loadmodel.thumb02L) {
       gsap.to(this.loadmodel.thumb02L.quaternion, {
         _w: 0.9793,
         _x: -0.1677,
         _y: -0.0115,
         _z: 0.1132,
         duration: 1,
       });
     }
     if (this.loadmodel.thumb03L) {
       gsap.to(this.loadmodel.thumb03L.quaternion, {
         _w: 0.999,
         _x: -0.0156,
         _y: -0.0029,
         _z: 0.042,
         duration: 1,
       });
     }

    // // first knuckle
    if (this.loadmodel.f_index01L) {
      gsap.to(this.loadmodel.f_index01L.quaternion, {
        _w: 0.9912,
        _x: -0.0782,
        _y: 0.0561,
        _z: -0.0907,
        duration: 1,
      });
    }
    if (this.loadmodel.f_middle01L) {
      gsap.to(this.loadmodel.f_middle01L.quaternion, {
        _w: 0.9961,
        _x: -0.0666,
        _y: 0.046,
        _z: 0.0338,
        duration: 1,
      });
    }
    if (this.loadmodel.f_ring01L) {
      gsap.to(this.loadmodel.f_ring01L.quaternion, {
        _w: 0.9794,
        _x: -0.0811,
        _y: 0.0277,
        _z: 0.1829,
        duration: 1,
      });
    }
    if (this.loadmodel.f_pinky01L) {
      gsap.to(this.loadmodel.f_pinky01L.quaternion, {
        _w: 0.9688,
        _x: -0.0449,
        _y: -0.0852,
        _z: 0.2284,
        duration: 1,
      });
    }

    // // second knuckle
    if (this.loadmodel.f_index02L) {
      gsap.to(this.loadmodel.f_index02L.quaternion, {
        _w: 1.0,
        _x: 0.08,
        _y: 0.01,
        _z: -0.05,
        duration: 1,
      });
    }
    if (this.loadmodel.f_middle02L) {
      gsap.to(this.loadmodel.f_middle02L.quaternion, {
        _w: 0.99,
        _x: 0.12,
        _y: -0.01,
        _z: -0.01,
        duration: 1,
      });
    }
    if (this.loadmodel.f_ring02L) {
      gsap.to(this.loadmodel.f_ring02L.quaternion, {
        _w: 1.0,
        _x: 0.08,
        _y: 0.0,
        _z: -0.01,
        duration: 1,
      });
    }
    if (this.loadmodel.f_pinky02L) {
      gsap.to(this.loadmodel.f_pinky02L.quaternion, {
        _w: 1.0,
        _x: 0.05,
        _y: 0.0,
        _z: -0.01,
        duration: 1,
      });
    }
  };
}
