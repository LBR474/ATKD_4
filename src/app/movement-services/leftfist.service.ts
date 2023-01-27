import { Injectable } from '@angular/core';

import { loadmodelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class LeftfistService {
  constructor(public loadmodel: loadmodelService) {}

  // // // make left fist function area

  make_left_fist = () => {
    // // thumb left
    if (
      this.loadmodel.thumb01L &&
      this.loadmodel.thumb02L &&
      this.loadmodel.thumb03L
    ) {
      gsap.to(this.loadmodel.thumb01L.quaternion, {
        _w: 0.6542,
        _x: 0.3084,
        _y: 0.6885,
        _z: 0.0537,
        duration: 1,
      });
      gsap.to(this.loadmodel.thumb02L.quaternion, {
        // _w: 0.9954,
        // _x: -0.0708,
        // _y: 0.0039,
        // _z: -0.065,
        duration: 1,
      });
      gsap.to(this.loadmodel.thumb03L.quaternion, {
        _w: 0.929,
        _x: 0.3677,
        _y: -0.0133,
        _z: -0.0399,
        duration: 1,
      });
    }

    // // index finger
    if (
      this.loadmodel.f_index01L &&
      this.loadmodel.f_index02L &&
      this.loadmodel.f_index03L
    ) {
      gsap.to(this.loadmodel.f_index01L.quaternion, {
        _w: 0.7185,
        _x: 0.668,
        _y: -0.1064,
        _z: -0.1616,
        duration: 1,
      });

      gsap.to(this.loadmodel.f_index02L.quaternion, {
        _w: 0.659,
        _x: 0.7521,
        _y: -0.0036,
        _z: -0.0047,
        duration: 1,
      });
      gsap.to(this.loadmodel.f_index03L.quaternion, {
        // _w: 0.7066,
        // _x: 0.7067,
        // _y: -0.0065,
        // _z: -0.0361,
        duration: 1,
      });
    }
    // // middle finger
    if (
      this.loadmodel.f_middle01L &&
      this.loadmodel.f_middle02L &&
      this.loadmodel.f_middle03L
    ) {
      gsap.to(this.loadmodel.f_middle01L.quaternion, {
        _w: 0.7848,
        _x: 0.6152,
        _y: -0.0138,
        _z: -0.0737,
        duration: 1,
      });

      gsap.to(this.loadmodel.f_middle02L.quaternion, {
        _w: 0.633,
        _x: 0.7736,
        _y: -0.0174,
        _z: 0.0241,
        duration: 1,
      });
      gsap.to(this.loadmodel.f_middle03L.quaternion, {
        // _w: 0.6696,
        // _x: 0.7426,
        // _y: -0.0146,
        // _z: 0.0013,
        duration: 1,
      });
    }

    // // ring finger
    if (
      this.loadmodel.f_ring01L &&
      this.loadmodel.f_ring02L &&
      this.loadmodel.f_ring03L
    ) {
      gsap.to(this.loadmodel.f_ring01L.quaternion, {
        _w: 0.7917,
        _x: 0.6045,
        _y: 0.0724,
        _z: 0.0506,
        duration: 1,
      });

      gsap.to(this.loadmodel.f_ring02L.quaternion, {
        _w: 0.7648,
        _x: 0.6439,
        _y: -0.0109,
        _z: 0.0172,
        duration: 1,
      });
      gsap.to(this.loadmodel.f_ring03L.quaternion, {
        _w: 0.633,
        _x: 0.7736,
        _y: -0.0174,
        _z: 0.0241,
        duration: 1,
      });
    }

    // // pinky finger
    if (
      this.loadmodel.palm04L &&
      this.loadmodel.f_pinky01L &&
      this.loadmodel.f_pinky02L &&
      this.loadmodel.f_pinky03L
    ) {
      gsap.to(this.loadmodel.palm04L.quaternion, {
        _w: 0.7076,
        _x: -0.0513,
        _y: 0.6872,
        _z: -0.156,
        duration: 1,
      });

      gsap.to(this.loadmodel.f_pinky01L.quaternion, {
        _w: 0.7171,
        _x: 0.653,
        _y: 0.1012,
        _z: 0.2218,
        duration: 1,
      });

      gsap.to(this.loadmodel.f_pinky02L.quaternion, {
        _w: 0.4404,
        _x: 0.8977,
        _y: -0.014,
        _z: -0.0023,
        duration: 1,
      });
      gsap.to(this.loadmodel.f_pinky03L.quaternion, {
        _w: 0.6696,
        _x: 0.7426,
        _y: -0.0146,
        _z: 0.0013,
        duration: 1,
      });
    }
  };
}
