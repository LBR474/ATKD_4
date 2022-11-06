import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';
import { Component, OnInit } from '@angular/core';

import * as THREE from 'three';
import { Object3D } from 'three';

// gsap import
import { gsap } from 'gsap';

@Component({
  selector: 'app-xyz3',
  templateUrl: './xyz3.component.html',
  styleUrls: ['./xyz3.component.css'],
})
export class Xyz3Component implements OnInit {
  public bgcolor = new THREE.Color(0x5f5f00);
  public grid_center_line_color = new THREE.Color(0xff5f00);

  model$ = this.ngtGLTFLoader.load('/assets/TKD_girl_7.glb');

  // // whole skeleton
  public metarig: Object3D | undefined;

  // // root bone which moves whole body
  public spine: Object3D | undefined;
  public spine001: Object3D | undefined;
  public spine002: Object3D | undefined;
  public spine003: Object3D | undefined;
  public spine004: Object3D | undefined;
  public spine005: Object3D | undefined;
  //public spine006: Object3D | undefined;

  // // arms
  public shoulderL: Object3D | undefined;
  public shoulderR: Object3D | undefined;
  public upper_armL: Object3D | undefined;
  public upper_armR: Object3D | undefined;

  public forearmL: Object3D | undefined;
  public forearmR: Object3D | undefined;

  // // hand left
  public handL: Object3D | undefined;
  public palm01L: Object3D | undefined;
  public palm02L: Object3D | undefined;
  public palm03L: Object3D | undefined;
  public palm04L: Object3D | undefined;

  // // hand right
  public handR: Object3D | undefined;
  public palm01R: Object3D | undefined;
  public palm02R: Object3D | undefined;
  public palm03R: Object3D | undefined;
  public palm04R: Object3D | undefined;

  // thumb left
  public thumb01L: Object3D | undefined;
  public thumb02L: Object3D | undefined;
  public thumb03L: Object3D | undefined;

  // fingers left
  public f_index01L: Object3D | undefined;
  public f_index02L: Object3D | undefined;
  public f_index03L: Object3D | undefined;

  public f_middle01L: Object3D | undefined;
  public f_middle02L: Object3D | undefined;
  public f_middle03L: Object3D | undefined;

  public f_ring01L: Object3D | undefined;
  public f_ring02L: Object3D | undefined;
  public f_ring03L: Object3D | undefined;

  public f_pinky01L: Object3D | undefined;
  public f_pinky02L: Object3D | undefined;
  public f_pinky03L: Object3D | undefined;

  // thumb right
  public thumb01R: Object3D | undefined;
  public thumb02R: Object3D | undefined;
  public thumb03R: Object3D | undefined;

  // fingers right

  public f_index01R: Object3D | undefined;
  public f_index02R: Object3D | undefined;
  public f_index03R: Object3D | undefined;

  public f_middle01R: Object3D | undefined;
  public f_middle02R: Object3D | undefined;
  public f_middle03R: Object3D | undefined;

  public f_ring01R: Object3D | undefined;
  public f_ring02R: Object3D | undefined;
  public f_ring03R: Object3D | undefined;

  public f_pinky01R: Object3D | undefined;
  public f_pinky02R: Object3D | undefined;
  public f_pinky03R: Object3D | undefined;

  // // legs
  public pelvisL: Object3D | undefined;
  public pelvisR: Object3D | undefined;
  public thighL: Object3D | undefined;

  public thighR: Object3D | undefined;
  public shinL: Object3D | undefined;
  public shinR: Object3D | undefined;
  public footL: Object3D | undefined;
  public footR: Object3D | undefined;
  public toeL: Object3D | undefined;
  public toeR: Object3D | undefined;

  constructor(private ngtGLTFLoader: NgtGLTFLoader) {}

  ngOnInit(): void {}
  modelReadyMovement(object: Object3D) {
    // spine bones
    this.spine = object.getObjectByName('spine');
    this.spine001 = object.getObjectByName('spine001');
    this.spine002 = object.getObjectByName('spine002');
    this.spine003 = object.getObjectByName('spine003');
    this.spine004 = object.getObjectByName('spine004');
    this.spine005 = object.getObjectByName('spine005');
    //this.spine006 = object.getObjectByName('spine006');

    // // left arm
    this.shoulderL = object.getObjectByName('shoulderL');
    this.upper_armL = object.getObjectByName('upper_armL');
    this.forearmL = object.getObjectByName('forearmL');
    this.handL = object.getObjectByName('handL');

    // fingers left

    this.thumb01L = object.getObjectByName('thumb01L');
    this.thumb02L = object.getObjectByName('thumb02L');
    this.thumb03L = object.getObjectByName('thumb03L');

    this.f_index01L = object.getObjectByName('f_index01L');
    this.f_index02L = object.getObjectByName('f_index02L');
    this.f_index03L = object.getObjectByName('f_index03L');

    this.f_middle01L = object.getObjectByName('f_middle01L');
    this.f_middle02L = object.getObjectByName('f_middle02L');
    this.f_middle03L = object.getObjectByName('f_middle03L');

    this.f_ring01L = object.getObjectByName('f_ring01L');
    this.f_ring02L = object.getObjectByName('f_ring02L');
    this.f_ring03L = object.getObjectByName('f_ring03L');

    this.f_pinky01L = object.getObjectByName('f_pinky01L');
    this.f_pinky02L = object.getObjectByName('f_pinky02L');
    this.f_pinky03L = object.getObjectByName('f_pinky03L');

    // // right arm
    this.shoulderR = object.getObjectByName('shoulderR');
    this.upper_armR = object.getObjectByName('upper_armR');
    this.forearmR = object.getObjectByName('forearmR');
    this.handR = object.getObjectByName('handR');

    // fingers right

    this.thumb01R = object.getObjectByName('thumb01R');
    this.thumb02R = object.getObjectByName('thumb02R');
    this.thumb03R = object.getObjectByName('thumb03R');

    this.f_index01R = object.getObjectByName('f_index01R');
    this.f_index02R = object.getObjectByName('f_index02R');
    this.f_index03R = object.getObjectByName('f_index03R');

    this.f_middle01R = object.getObjectByName('f_middle01R');
    this.f_middle02R = object.getObjectByName('f_middle02R');
    this.f_middle03R = object.getObjectByName('f_middle03R');

    this.f_ring01R = object.getObjectByName('f_ring01R');
    this.f_ring02R = object.getObjectByName('f_ring02R');
    this.f_ring03R = object.getObjectByName('f_ring03R');

    this.f_pinky01R = object.getObjectByName('f_pinky01R');
    this.f_pinky02R = object.getObjectByName('f_pinky02R');
    this.f_pinky03R = object.getObjectByName('f_pinky03R');

    // // legs
    this.pelvisL = object.getObjectByName('pelvisL');
    this.pelvisR = object.getObjectByName('pelvisR');
    this.thighL = object.getObjectByName('thighL');

    this.thighR = object.getObjectByName('thighR');
    this.shinL = object.getObjectByName('shinL');
    this.shinR = object.getObjectByName('shinR');
    this.footL = object.getObjectByName('footL');
    this.footR = object.getObjectByName('footR');
    this.toeL = object.getObjectByName('toeL');
    this.toeR = object.getObjectByName('toeR');
  }

  // // // attention function area begins
  attention = () => {
    const x_axis = 1; // this is the upright, "y" axis
    const y_axis = 0; // this is the crossways "x" axis
    const z_axis = 0; // this is the thruways, "z" axis

    const axisVector = new THREE.Vector3(z_axis, y_axis, x_axis);
    const current_target: Object3D | undefined = this.pelvisL;
    const console_func = (current_target: Object3D) => {
      console.log(current_target?.name);

      console.log(
        '_w: ' +
          current_target?.quaternion.w.toFixed(2) +
          ', \n_x: ' +
          current_target?.quaternion.x.toFixed(2) +
          ', \n_y: ' +
          current_target?.quaternion.y.toFixed(2) +
          ', \n_z: ' +
          current_target?.quaternion.z.toFixed(2) +
          ', \n'
      );
    };

    if (
      this.spine &&
      this.handL &&
      this.upper_armL &&
      this.upper_armR &&
      this.forearmL &&
      this.forearmR &&
      this.handR &&
      this.pelvisL &&
      this.pelvisR
    ) {
      console_func(this.pelvisL);
      //current_target?.rotateOnAxis(axisVector, -1.57 / 4.0);
      //WorldAxis(axisVector, 1.57 / 1.0);

      gsap.to(this.upper_armL.quaternion, {
        _w: 0.4,
        _x: -0.08,
        _y: 0.79,
        _z: -0.45,
        duration: 1,
      });

      gsap.to(this.upper_armR.quaternion, {
        duration: 1,
        _w: 0.4,
        _x: -0.08,
        _y: -0.79,
        _z: 0.45,
        onComplete: console_func,
        onCompleteParams: [current_target],
      });

      gsap.to(this.forearmL.quaternion, {
        _w: 0.98,
        _x: 0.04,
        _y: 0.04,
        _z: -0.17,
        duration: 1,
      });

      gsap.to(this.forearmR.quaternion, {
        duration: 1,
        _w: 0.98,
        _x: 0.04,
        _y: -0.04,
        _z: 0.17,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });

      gsap.to(this.handL.quaternion, {
        // _w: 1.0,
        // _x: 0.04,
        // _y: -0.0,
        // _z: -0.08,
        duration: 1,
      });
      gsap.to(this.handR.quaternion, {
        // _w: 1.0,
        // _x: 0.04,
        // _y: 0.0,
        // _z: +0.08,
        duration: 1,
      });
      gsap.to(this.pelvisL.quaternion, {
        _w: 0.4,
        _x: -0.32,
        _y: -0.72,
        _z: -0.47,
        duration: 1,
      });
      gsap.to(this.pelvisR.quaternion, {
        _w: 0.4,
        _x: -0.32,
        _y: 0.72,
        _z: 0.47,
        duration: 1,
      });
      gsap.to(this.spine.position, {
        duration: 1,
        x: -0.1,
      });
    }
  };

  // // // choon bi function area begins
  choon_bi = () => {
    const x_axis = 1; // this is the upright, "y" axis
    const y_axis = 0; // this is the crossways "x" axis
    const z_axis = 0; // this is the thruways, "z" axis

    const axisVector = new THREE.Vector3(z_axis, y_axis, x_axis);
    const current_target: Object3D | undefined = this.forearmL;
    const console_func = (current_target: Object3D) => {
      console.log(current_target?.name);

      console.log(
        '_w: ' +
          current_target?.quaternion.w.toFixed(2) +
          ', \n_x: ' +
          current_target?.quaternion.x.toFixed(2) +
          ', \n_y: ' +
          current_target?.quaternion.y.toFixed(2) +
          ', \n_z: ' +
          current_target?.quaternion.z.toFixed(2) +
          ', \n'
      );
    };

    if (
      this.spine &&
      this.handL &&
      this.upper_armL &&
      this.upper_armR &&
      this.forearmL &&
      this.forearmR &&
      this.handR &&
      this.pelvisL &&
      this.pelvisR
    ) {
      // current_target?.rotateOnAxis(axisVector, -1.57 / 1.0);
      //WorldAxis(axisVector, 1.57 / 1.0);

      gsap.to(this.upper_armL.quaternion, {
        _w: 0.51,
        _x: 0.12,
        _y: 0.78,
        _z: -0.33,
        duration: 1,
      });

      gsap.to(this.upper_armR.quaternion, {
        duration: 1,
        _w: 0.51,
        _x: 0.12,
        _y: -0.78,
        _z: 0.33,
        onComplete: console_func,
        onCompleteParams: [current_target],
      });

      gsap.to(this.forearmL.quaternion, {
        _w: 1.0,
        _x: 0.05,
        _y: 0.03,
        _z: 0.03,
        duration: 0.5,
      });
      // gsap.to(this.forearmL.quaternion, {
      //   _w: 0.57,
      //   _x: 0.0,
      //   _y: 0.06,
      //   _z: -0.81,

      //   duration: 0.5,
      // });

      gsap.to(this.forearmR.quaternion, {
        duration: 1,
        _w: 1.0,
        _x: 0.05,
        _y: 0.03,
        _z: 0.03, // onComplete: console_func,
        // onCompleteParams: [current_target],
      });

      gsap.to(this.handL.quaternion, {
        // _w: 1.0,
        // _x: 0.04,
        // _y: -0.0,
        // _z: -0.08,
        duration: 1,
      });
      gsap.to(this.handR.quaternion, {
        // _w: 1.0,
        // _x: 0.04,
        // _y: 0.0,
        // _z: +0.08,
        duration: 1,
      });
      gsap.to(this.pelvisL.quaternion, {
        _w: 0.47,
        _x: -0.27,
        _y: -0.68,
        _z: -0.5,
        duration: 1,
      });
      gsap.to(this.pelvisR.quaternion, {
        _w: 0.47,
        _x: -0.27,
        _y: 0.68,
        _z: 0.5,
        duration: 1,
      });
      gsap.to(this.spine.position, {
        duration: 1,
        x: 0.1,
        onComplete: this.choon_bi_arms,
        onCompleteParams: [this.forearmL, this.forearmR]
      });
    }
  };




 // // // choon bi arms function area begins
  choon_bi_arms = () => {
    const x_axis = 0; // this is the upright, "y" axis
    const y_axis = 0; // this is the crossways "x" axis
    const z_axis = 1; // this is the thruways, "z" axis

    const axisVector = new THREE.Vector3(z_axis, y_axis, x_axis);
    const current_target: Object3D | undefined = this.upper_armL;
    const console_func = (current_target: Object3D) => {
      console.log(current_target?.name);

      console.log(
        '_w: ' +
          current_target?.quaternion.w.toFixed(2) +
          ', \n_x: ' +
          current_target?.quaternion.x.toFixed(2) +
          ', \n_y: ' +
          current_target?.quaternion.y.toFixed(2) +
          ', \n_z: ' +
          current_target?.quaternion.z.toFixed(2) +
          ', \n'
      );
    };

    if (
      this.spine &&
      this.handL &&
      this.upper_armL &&
      this.upper_armR &&
      this.forearmL &&
      this.forearmR &&
      this.handR &&
      this.pelvisL &&
      this.pelvisR
    ) {
      current_target?.rotateOnAxis(axisVector, 1.57 / 2.0);
      //WorldAxis(axisVector, 1.57 / 1.0);

      // gsap.to(this.upper_armL.quaternion, {
      //   _w: 0.51,
      //   _x: 0.12,
      //   _y: 0.78,
      //   _z: -0.33,
      //   duration: 1,
      // });

      // gsap.to(this.upper_armR.quaternion, {
      //   duration: 1,
      //   _w: 0.51,
      //   _x: 0.12,
      //   _y: -0.78,
      //   _z: 0.33,
      //   onComplete: console_func,
      //   onCompleteParams: [current_target],
      // });

      gsap.to(this.forearmL.quaternion, {
        _w: 0.57,
        _x: 0.0,
        _y: 0.06,
        _z: -0.81,

        duration: 0.5,
      });
       gsap.to(this.forearmR.quaternion, {
         _w: 0.57,
         _x: 0.0,
         _y: -0.06,
         _z: 0.81,

         duration: 0.5,
       });

     

      // gsap.to(this.handL.quaternion, {
      //   // _w: 1.0,
      //   // _x: 0.04,
      //   // _y: -0.0,
      //   // _z: -0.08,
      //   duration: 1,
      // });
      // gsap.to(this.handR.quaternion, {
      //   // _w: 1.0,
      //   // _x: 0.04,
      //   // _y: 0.0,
      //   // _z: +0.08,
      //   duration: 1,
      // });
      // gsap.to(this.pelvisL.quaternion, {
      //   _w: 0.47,
      //   _x: -0.27,
      //   _y: -0.68,
      //   _z: -0.5,
      //   duration: 1,
      // });
      // gsap.to(this.pelvisR.quaternion, {
      //   _w: 0.47,
      //   _x: -0.27,
      //   _y: 0.68,
      //   _z: 0.5,
      //   duration: 1,
      // });
      // gsap.to(this.spine.position, {
      //   duration: 1,
      //   x: 0.1,
      // });
    }
  };












  // // // make right fist function area

  make_right_fist = () => {
    const x_axis = 0; // this is the upright, "y" axis
    const y_axis = 0; // this is the crossways "x" axis
    const z_axis = 1; // this is the thruways, "z" axis

    const axisVector = new THREE.Vector3(z_axis, y_axis, x_axis);
    const current_target: Object3D | undefined = this.thumb03R;
    const console_func = (current_target: Object3D) => {
      console.log(current_target?.name);

      console.log(
        '_w: ' +
          current_target?.quaternion.w.toFixed(2) +
          ', \n_x: ' +
          current_target?.quaternion.x.toFixed(2) +
          ', \n_y: ' +
          current_target?.quaternion.y.toFixed(2) +
          ', \n_z: ' +
          current_target?.quaternion.z.toFixed(2) +
          ', \n'
      );
    };
    //current_target?.rotateOnAxis(axisVector, -1.57 / 0.5);
    //WorldAxis(axisVector, 1.57 / 1.0);

    // // thumb right
    if (this.thumb03R) {
      gsap.to(this.thumb03R.quaternion, {
        _w: 0.05,
        _x: -1.0,
        _y: 0.05,
        _z: 0.0,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }

    // // first knuckle
    if (this.f_index01R) {
      gsap.to(this.f_index01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_middle01R) {
      gsap.to(this.f_middle01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_ring01R) {
      gsap.to(this.f_ring01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_pinky01R) {
      gsap.to(this.f_pinky01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,

        onComplete: console_func,
        onCompleteParams: [current_target],
      });
    }

    // // second knuckle
    if (this.f_index02R) {
      gsap.to(this.f_index02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_middle02R) {
      gsap.to(this.f_middle02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_ring02R) {
      gsap.to(this.f_ring02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_pinky02R) {
      gsap.to(this.f_pinky02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,

        onComplete: console_func,
        onCompleteParams: [current_target],
      });
    }
  };

  // // // make left fist function area

  make_left_fist = () => {
    const x_axis = 0; // this is the upright, "y" axis
    const y_axis = 0; // this is the crossways "x" axis
    const z_axis = 1; // this is the thruways, "z" axis

    const axisVector = new THREE.Vector3(z_axis, y_axis, x_axis);
    const current_target: Object3D | undefined = this.thumb03L;
    const console_func = (current_target: Object3D) => {
      console.log(current_target?.name);

      console.log(
        '_w: ' +
          current_target?.quaternion.w.toFixed(2) +
          ', \n_x: ' +
          current_target?.quaternion.x.toFixed(2) +
          ', \n_y: ' +
          current_target?.quaternion.y.toFixed(2) +
          ', \n_z: ' +
          current_target?.quaternion.z.toFixed(2) +
          ', \n'
      );
    };
    //current_target?.rotateOnAxis(axisVector, -1.57 / 0.5);
    //WorldAxis(axisVector, 1.57 / 1.0);

    // // thumb left
    if (this.thumb03L) {
      gsap.to(this.thumb03L.quaternion, {
        _w: 0.05,
        _x: -1.0,
        _y: 0.05,
        _z: 0.0,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }

    // // first knuckle
    if (this.f_index01L) {
      gsap.to(this.f_index01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_middle01L) {
      gsap.to(this.f_middle01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_ring01L) {
      gsap.to(this.f_ring01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_pinky01L) {
      gsap.to(this.f_pinky01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,

        onComplete: console_func,
        onCompleteParams: [current_target],
      });
    }

    // // second knuckle
    if (this.f_index02L) {
      gsap.to(this.f_index02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_middle02L) {
      gsap.to(this.f_middle02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_ring02L) {
      gsap.to(this.f_ring02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,

        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
    }
    if (this.f_pinky02L) {
      gsap.to(this.f_pinky02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,

        onComplete: console_func,
        onCompleteParams: [current_target],
      });
    }
  };

  setInitial(controls: NgtSobaOrbitControls) {
    const orbitControl = controls.camera;
    //orbitControl.lookAt(0, 0, 0)
    if (orbitControl) {
      orbitControl.position.setY(4);
    }
  }
}
