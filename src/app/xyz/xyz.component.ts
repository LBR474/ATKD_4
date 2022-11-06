// angular core imports
import { Component, Input, OnInit } from '@angular/core';
import { NgtRenderState } from '@angular-three/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

// three imports
import * as THREE from 'three';
import { Mesh, MeshStandardMaterial, Object3D } from 'three';

// gsap import
import { gsap } from 'gsap';

// gui import
import GUI from 'lil-gui';

// soba imports
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// // component decorator area begins

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css'],
})

// // xyz class area begins
export class XyzComponent implements OnInit {
  //rotateStarter: boolean = false;
  //
  // // class-wide scoped variable area begins
  public colorfirst = new THREE.Color('aqua');
  public color = new THREE.Color('red');
  public QuatW: number  = 0 
  model$ = this.ngtGLTFLoader.load('/assets/TKD_girl_4.gltf');

  modelMaterial: MeshStandardMaterial | undefined;

  public sphere: Object3D | undefined;
  public sphere001: Object3D | undefined;

  // // whole skeleton
  public metarig: Object3D | undefined;

  // // root bone which moves whole body
  public spine: Object3D | undefined;
  public spine001: Object3D | undefined;
  public spine002: Object3D | undefined;
  public spine003: Object3D | undefined;
  public spine004: Object3D | undefined;
  public spine005: Object3D | undefined;
  public spine006: Object3D | undefined;

  // // arms
  public upper_armL: Object3D | undefined;
  public upper_armR: Object3D | undefined;

  public forearmL: Object3D | undefined;
  public handL: Object3D | undefined;

  // thumb left
  public thumbL001: Object3D | undefined;
  public thumbL002: Object3D | undefined;

  // fingers left
  public handL001: Object3D | undefined;
  public handL002: Object3D | undefined;
  public handL003: Object3D | undefined;

  public forearmR: Object3D | undefined;
  public handR: Object3D | undefined;

  // thumb right
  public thumbR001: Object3D | undefined;
  public thumbR002: Object3D | undefined;

  // fingers right
  public handR001: Object3D | undefined;
  public handR002: Object3D | undefined;
  public handR003: Object3D | undefined;

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

  //public attention_counter: number = 0;

  //public rotateStarterCounter = 0;

  // // input area begins

  @Input()
  set colorer(value: string) {
    this.applyColor(value);
    this.#color = value;
  }
  #color = '';
  // title = 'Angular-TKD_4';

  constructor(private ngtGLTFLoader: NgtGLTFLoader) {}

  ngOnInit(): void {}

  //
  // // modelreadyMovement area begins
  modelReadyMovement(object: Object3D) {
    this.metarig = object.getObjectByName('metarig');
    this.sphere = object.getObjectByName('Sphere');
    this.sphere001 = object.getObjectByName('Sphere001');
    // spine bones
    this.spine = object.getObjectByName('spine');
    this.spine001 = object.getObjectByName('spine001');
    this.spine002 = object.getObjectByName('spine002');
    this.spine003 = object.getObjectByName('spine003');
    this.spine004 = object.getObjectByName('spine004');
    this.spine005 = object.getObjectByName('spine005');
    this.spine006 = object.getObjectByName('spine006');

    // // arms and shoulder bones
    this.upper_armL = object.getObjectByName('upper_armL');

    
    this.upper_armR = object.getObjectByName('upper_armR');

    this.forearmL = object.getObjectByName('forearmL');
    this.handL = object.getObjectByName('handL');

    // thumb left
    this.thumbL001 = object.getObjectByName('thumbL001');
    this.thumbL002 = object.getObjectByName('thumbL002');

    // fingers left

    this.handL001 = object.getObjectByName('handL001');
    this.handL002 = object.getObjectByName('handL002');
    this.handL003 = object.getObjectByName('handL003');

    this.forearmR = object.getObjectByName('forearmR');
    this.handR = object.getObjectByName('handR');

    // thumb right
    this.thumbR001 = object.getObjectByName('thumbR001');
    this.thumbR002 = object.getObjectByName('thumbR002');

    // fingers right
    this.handR001 = object.getObjectByName('handR001');
    this.handR002 = object.getObjectByName('handR002');
    this.handR003 = object.getObjectByName('handR003');

    //legs
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
    
    const current_target: Object3D | undefined = this.forearmL;

    const console_func = (current_target: any) => {
      console.log(current_target.name);

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

    //console_func(this.forearmR);

    // var gui = new GUI();
    // var gui_read: number;
    // gui
    //   .add(this.thumbL001!.quaternion, 'w', -1, 1, 0.1)
    //   .name('W quaternion')
    //   .listen();
    // gui
    //   .add(this.thumbL001!.quaternion, 'x', -1, 1, 0.1)
    //   .name('X quaternion')
    //   .listen();
    // gui
    //   .add(this.thumbL001!.quaternion, 'y', -1, 1, 0.1)
    //   .name('Y quaternion')
    //   .listen();
    // gui
    //   .add(this.thumbL001!.quaternion, 'z', -1, 1, 0.1)
    //   .name('Z quaternion')
    //   .listen();
  }
// //FirstName: number = 0 | undefined
  changeName(): void {
    this.QuatW = this.thumbL001!.quaternion.w;
    //this.LastName = 'New Last Name';
  }













  //
  //
  //
  // // attention function area begins
  attention = () => {
    const x_axis = 0; // this is the upright, "y" axis
    const y_axis = 0; // this is the crossways "x" axis
    const z_axis = 1; // this is the thruways, "z" axis

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
      this.handL &&
      this.upper_armL &&
      this.spine &&
      this.upper_armR &&
      this.pelvisL &&
      this.pelvisR
    ) {
      //current_target?.rotateOnWorldAxis(axisVector, -0.785 / 1.1);
      gsap.to(this.upper_armL.quaternion, {
        _w: 0.59,
        _x: -0.32,
        _y: 0.59,
        _z: -0.46,
        duration: 1,
      });

      gsap.to(this.upper_armR.quaternion, {
        duration: 1,
        _w: 0.59,
        _x: -0.32,
        _y: -0.59,
        _z: 0.46,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
      gsap.to(this.pelvisL.quaternion, {
        _w: 0.54,
        _x: -0.48,
        _y: -0.4,
        _z: -0.57,
        duration: 1,
      });
      gsap.to(this.pelvisR.quaternion, {
        _w: 0.54,
        _x: -0.48,
        _y: 0.4,
        _z: 0.57,
        duration: 1,
      });
      gsap.to(this.spine.position, {
        duration: 1,
        x: -0.1,
      });
    }
  };
















  //
  //
  //
  // // choon_bi function area begins
  choon_bi = () => {

    this.QuatW = this.thumbL001!.quaternion.w;
    const x_axis = 0; // this is the upright, "y" axis
    const y_axis = 0; // this is the crossways "x" axis
    const z_axis = 1; // this is the thruways, "z" axis

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
      this.metarig &&
      this.spine &&
      // // arms
      this.upper_armL &&
      this.upper_armR &&
      this.forearmL &&
      this.forearmR &&
      // // pelvis and legs
      this.pelvisL &&
      this.pelvisR &&
      this.thighL &&
      this.thighR &&
      this.shinL &&
      this.shinR &&
      this.footL &&
      this.footR
      // &&
      // this.thighL &&
      // this.thighR &&
    ) {
      //current_target?.rotateOnWorldAxis(axisVector, 1.57 / 1);
      gsap.to(this.spine.position, {
        duration: 1,
        x: +0.1,
      });
      gsap.to(this.upper_armL.quaternion, {
        _w: 0.6,
        _x: -0.21,
        _y: 0.71,
        _z: -0.3,

        duration: 1,
        //onComplete: this.choon_bi_arms,
        //onCompleteParams: [current_target],
      });
      gsap.to(this.upper_armR.quaternion, {
        _w: 0.6,
        _x: -0.21,
        _y: -0.71,
        _z: 0.3,

        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });

      gsap.to(this.forearmL.quaternion, {
        _w: 0.7,
        _x: 0.71,
        _y: -0.05,
        _z: 0.05,

        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
      gsap.to(this.forearmR.quaternion, {
        _w: 0.7,
        _x: 0.71,
        _y: 0.05,
        _z: -0.05,

        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });

      gsap.to(this.pelvisL.quaternion, {
        _w: 0.56,
        _x: -0.45,
        _y: -0.43,
        _z: -0.54,
        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
      gsap.to(this.pelvisR.quaternion, {
        _w: 0.56,
        _x: -0.45,
        _y: 0.43,
        _z: 0.54,
        duration: 1,
        onComplete: this.choon_bi_arms,
        // onCompleteParams: [current_target],
      });
    }
  };



















  //
  //
  //
  // // choon_bi_arms function area begins
  //
  //
  //
  choon_bi_arms = () => {
    
    const x_axis = 0; // this is the upright, "y" axis
    const y_axis = 0; // this is the crossways "x" axis
    const z_axis = 1; // this is the thruways, "z" axis

    const axisVector = new THREE.Vector3(z_axis, y_axis, x_axis);
    const current_target: Object3D | undefined = this.thumbL001;
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
    this.QuatW = this.thumbL001!.quaternion.w;
    
    
    };

    if (
      this.metarig &&
      this.spine &&
      // // arms
      this.upper_armL &&
      this.upper_armR &&
      this.forearmL &&
      this.forearmR &&
      this.thumbL001 &&
      this.thumbR001 &&
      this.thumbL002 &&
      this.thumbR002 &&
      this.handL001 &&
      this.handR001 &&
      this.handL002 &&
      this.handR002 &&
      this.handL003 &&
      this.handR003 &&
      // // pelvis and legs
      this.pelvisL &&
      this.pelvisR &&
      this.thighL &&
      this.thighR &&
      this.shinL &&
      this.shinR &&
      this.footL &&
      this.footR
      // &&
      // this.thighL &&
      // this.thighR &&
    ) {
      //current_target?.rotateOnWorldAxis(axisVector, -1.57 / 1);

      gsap.to(this.handL001.quaternion, {
        _w: 0.93245,
        _x: 0.118695,
        _y: -0.137076,
        _z: -0.312503,

        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
      gsap.to(this.handR001.quaternion, {
        _w: 0.93245,
        _x: 0.118695,
        _y: 0.137076,
        _z: 0.312503,
        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
      gsap.to(this.handL002.quaternion, {
        _w: 0.882,
        _x: -0.018,
        _y: -0.145,
        _z: -0.448,
        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
      gsap.to(this.handR002.quaternion, {
        _w: 0.882,
        _x: 0.018,
        _y: 0.145,
        _z: 0.448,
        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });

      gsap.to(this.handL003.quaternion, {
        _w: 0.472,
        _x: -0.045,
        _y: -0.282,
        _z: -0.834,
        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
      gsap.to(this.handR003.quaternion, {
        _w: 0.472,
        _x: -0.045,
        _y: 0.282,
        _z: 0.834,
        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });

      gsap.to(this.thumbL001.quaternion, {
        _w: 0.66,
        _x: -0.18,
        _y: 0.71,
        _z: -0.222,
        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });
      gsap.to(this.thumbR001.quaternion, {
        _w: 0.66,
        _x: -0.18,
        _y: -0.71,
        _z: +0.222,
        duration: 1,
        // onComplete: console_func,
        // onCompleteParams: [current_target],
      });

      gsap.to(this.upper_armL.quaternion, {
        _w: 0.34,
        _x: 0.015,
        _y: 0.67,
        _z: -0.65,
        duration: 1,
      });
      gsap.to(this.upper_armR.quaternion, {
        _w: 0.34,
        _x: 0.015,
        _y: -0.67,
        _z: +0.65,
        duration: 1,
        onComplete: console_func,
        onCompleteParams: [current_target],
      });
      gsap.to(this.forearmL.quaternion, {
        _w: 1.0,
        _x: 0.0,
        _y: 0.0,
        _z: 0.08,
        duration: 1,
      });
      gsap.to(this.forearmR.quaternion, {
        _w: 1.0,
        _x: 0.0,
        _y: 0.0,
        _z: -0.08,
        duration: 1,
        onComplete: console_func,
        onCompleteParams: [current_target],
      });
    }
  };

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //
  //
  // // turn left function area
  turn_left() {
    if (this.metarig) {
      gsap.to(this.metarig.rotation, {
        y: 1.57,
        duration: 1,
      });
      this.short_stance_left();
    }
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  //
  //
  // // go straight function area
  go_straight() {
    if (this.metarig) {
      console.log(this.footR?.position);
      gsap.to(this.metarig.position, {
        x: '+=1.00',
        duration: 1,
      });
      gsap.to(this.metarig.rotation, {
        y: 1.57,
        duration: 1,
      });
      this.short_stance_left();
    }
  }






















  //
  //
  //
  // // short_stance_left function area begins

  short_stance_left = () => {
    const x_axis = 0; // this is the upright, "y" axis
    const y_axis = 1; // this is the crossways "x" axis
    const z_axis = 0; // this is the thruways, "z" axis
    const axisVector = new THREE.Vector3(z_axis, y_axis, x_axis);
    const current_target: Object3D | undefined = this.thighL;
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
      this.metarig &&
      this.upper_armL &&
      this.spine &&
      this.upper_armR &&
      this.pelvisL &&
      this.pelvisR &&
      this.thighL &&
      this.thighR &&
      this.shinL &&
      this.shinR &&
      this.footL &&
      this.footR
      // &&
      // this.thighL &&
      // this.thighR &&
    ) {
      //this.shinR?.rotateOnWorldAxis(axisVector, 0.785 / 2);
      gsap.to(this.shinL.quaternion, {
        _w: 0.9639255606253982,
        _x: 0.2661021896850282,
        _y: 0.004468210595730874,
        _z: -0.004148686221767771,
        duration: 1,
        onComplete: console_func,
      });
      gsap.to(this.shinR.quaternion, {
        _w: 0.9788637874496302,
        _x: 0.07259718128993811,
        _y: 0.19096356377012427,
        _z: -0.00939599396115548,
        duration: 1,
        onComplete: console_func,
      });
      gsap.to(this.footR.quaternion, {
        _w: 0.4652208037720662,
        _x: -0.8848673355432263,
        _y: 0.014804238640529486,
        _z: -0.01898080278130789,
        duration: 1,
      });

      gsap.to(this.thighR.quaternion, {
        _w: 0.4886624588977405,
        _x: -0.5256868596929981,
        _y: 0.5236467077985348,
        _z: -0.458973327111866,
        duration: 1,
      });

      gsap.to(this.thighL.quaternion, {
        _w: 0.21,
        _x: -0.66,
        _y: -0.67,
        _z: 0.21,
        duration: 1,
        onComplete: console_func,
        onCompleteParams: [current_target],
      });
      gsap.to(this.metarig.position, {
        y: -0.1,
        z: 0.2,
        duration: 1,
      });
    }
  };

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //
  //
  // // turn right function area
  turn_bone() {
    if (this.thumbL001) {
      gsap.to(this.thumbL001.quaternion, {
        x: '+=0.1',
        duration: 0.001,
      });
      //this.short_stance_right();
    }
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //
  //
  // // turn right function area
  turn_right() {
    if (this.metarig) {
      gsap.to(this.metarig.rotation, {
        y: -1.57,
        duration: 1,
      });
      this.short_stance_right();
    }
  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //
  //
  //
  // // short_stance_right function area begins

  short_stance_right = () => {
    const x_axis = 0; // this is the upright, "y" axis
    const y_axis = 1; // this is the crossways "x" axis
    const z_axis = 0; // this is the thruways, "z" axis
    const axisVector = new THREE.Vector3(z_axis, y_axis, x_axis);
    const current_target: Object3D | undefined = this.shinL;
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
      this.metarig &&
      this.upper_armL &&
      this.spine &&
      this.upper_armR &&
      this.pelvisL &&
      this.pelvisR &&
      this.thighL &&
      this.thighR &&
      this.shinL &&
      this.shinR &&
      this.footL &&
      this.footR
    ) {
      //current_target?.rotateOnWorldAxis(axisVector, -0.785 / 1.5);
      gsap.to(this.metarig.position, {
        y: -0.1,
        z: 0.2,
        duration: 1,
      });
      gsap.to(this.thighR.quaternion, {
        _w: 0.21,
        _x: -0.67,
        _y: 0.69,
        _z: -0.18,
        duration: 1,
        onComplete: console_func,
        onCompleteParams: [current_target],
      });

      gsap.to(this.thighL.quaternion, {
        _w: 0.49,
        _x: -0.53,
        _y: -0.52,
        _z: 0.46,
        duration: 1,
      });

      gsap.to(this.shinR.quaternion, {
        _w: 0.98,
        _x: 0.2,
        _y: -0.0,
        _z: 0.0,

        duration: 1,
      });
      gsap.to(this.shinL.quaternion, {
        _w: 0.96,
        _x: 0.07,
        _y: -0.25,
        _z: 0.01,

        duration: 1,
      });
      gsap.to(this.footR.quaternion, {
        _w: 0.7,
        _x: -0.71,
        _y: 0.02,
        _z: -0.01,
        duration: 0.01,
      });

      gsap.to(this.footL.quaternion, {
        _w: 0.47,
        _x: -0.88,
        _y: -0.01,
        _z: 0.02,

        duration: 0.01,
      });
    }
  };

  //
  // // modelreadyColor area begins
  modelReadyColor(object: Object3D) {
    this.modelMaterial = <MeshStandardMaterial>(
      (<Mesh>object.getObjectByName('Sphere001_4')).material
    );

    this.applyColor(this.#color);
  }

  applyColor(colorer: string) {
    if (this.modelMaterial) {
      this.modelMaterial.color.setHex(parseInt(colorer.substring(1), 16));
    }
  }

//   onCubeBeforeRender($event: { state: NgtRenderState; object: Object3D }) {
//     const cube = $event.object;
//     const moveTestquaternion = new THREE.Quaternion();
//     const x_axis = 0; // this is the upright, "y" axis
//     const y_axis = 0; // this is the crossways "x" axis
//     const z_axis = 1; // this is the thruways, "z" axis
//     const axisVector = new THREE.Vector3(z_axis, y_axis, x_axis);
//     moveTestquaternion.setFromAxisAngle(
//       new THREE.Vector3(z_axis, y_axis, x_axis),
//       -Math.PI / 48
//     );

//     const thighLDownHere =
//       $event.object.children[0].children[0].children[1].children[0];
//     const shinLDownHere =
//       $event.object.children[0].children[0].children[1].children[0].children[0];

//     //console.log(shinLDownHere)

//     if (
//       //this.rotateStarter
//       //&& shinLDownHere.quaternion.w > 0.25
//     ) {
//       //thighLDownHere.applyQuaternion(moveTestquaternion)
//       //shinLDownHere.applyQuaternion(moveTestquaternion);
//       shinLDownHere.rotateOnWorldAxis(axisVector, 1.57);
//       console.log(shinLDownHere.quaternion);
//     }
//   }
//   animate() {
//     this.rotateStarter = true;
//   }
}
