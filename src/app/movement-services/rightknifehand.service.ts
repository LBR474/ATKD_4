import { Injectable } from '@angular/core';

import { loadmodelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';



@Injectable({
  providedIn: 'root',
})
export class RightknifehandService {
  constructor(public loadmodel: loadmodelService) {}
  // // // make left knife function area begins

  make_right_knife = () => {
    // // thumb left
    if (this.loadmodel.thumb01R) {
      gsap.to(this.loadmodel.thumb01R.quaternion, {
        _w: 0.66417915,
        _x: 0.17169252,
        _y: -0.72755533,
        _z: 0.00714795,
        duration: 1,
      });
    }
    // if (this.loadmodel.thumb02R) {
    //   gsap.to(this.loadmodel.thumb02R.quaternion, {
    //     _w: 0.99097157,
    //     _x: -0.07093502,
    //     _y: 0.00037168,
    //     _z: -0.11376929,
    //     duration: 1,
    //   });
    // }

    // // first knuckle
    if (this.loadmodel.f_index01R) {
      gsap.to(this.loadmodel.f_index01R.quaternion, {
        _w: 0.9887,
        _x: -0.0796,
        _y: -0.0542,
        _z: 0.115,
        duration: 1,
      });
    }
    if (this.loadmodel.f_middle01R) {
      gsap.to(this.loadmodel.f_middle01R.quaternion, {
        _w: 0.9961,
        _x: -0.0666,
        _y: -0.046,
        _z: -0.0338,
        duration: 1,
      });
    }
    if (this.loadmodel.f_ring01R) {
      gsap.to(this.loadmodel.f_ring01R.quaternion, {
        _w: 0.9794,
        _x: -0.0811,
        _y: -0.0277,
        _z: -0.1829,
        duration: 1,
      });
    }
    if (this.loadmodel.f_pinky01R) {
      gsap.to(this.loadmodel.f_pinky01R.quaternion, {
        _w: 0.9564,
        _x: -0.0491,
        _y: 0.0829,
        _z: -0.2756,
        duration: 1,
      });
    }

    // // second knuckle
    if (this.loadmodel.f_index02R) {
      gsap.to(this.loadmodel.f_index02R.quaternion, {
        _w: 1.0,
        _x: 0.08,
        _y: 0.01,
        _z: -0.05,
        duration: 1,
      });
    }
    if (this.loadmodel.f_middle02R) {
      gsap.to(this.loadmodel.f_middle02R.quaternion, {
        _w: 0.99455881,
        _x: 0.0998411,
        _y: 0.02935884,
        _z: -0.00475445,
        duration: 1,
      });
    }
    if (this.loadmodel.f_ring02R) {
      gsap.to(this.loadmodel.f_ring02R.quaternion, {
        _w: 1.0,
        _x: 0.08,
        _y: 0.0,
        _z: -0.01,
        duration: 1,
      });
    }
    if (this.loadmodel.f_pinky02R) {
      gsap.to(this.loadmodel.f_pinky02R.quaternion, {
        _w: 1.0,
        _x: 0.05,
        _y: 0.0,
        _z: -0.01,
        duration: 1,
      });
    }
  };
}
