import { Injectable } from '@angular/core';

import { StartPageComponent } from '../startPage/startPage.component';

// gsap import
import { gsap } from 'gsap';

// soba imports
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports

import { Object3D } from 'three';



@Injectable({
  providedIn: 'root',
})
export class loadmodelService {
  model$ = this.ngtGLTFLoader.load('./assets/TKD_girl_15.glb');

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

  public position_test: number| undefined;

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


  
  modelReadyService(object: Object3D) {

    // metarig
    this.metarig = object.getObjectByName('metarig')
    // spine bones
    this.spine = object.getObjectByName('spine');
    this.spine001 = object.getObjectByName('spine001');
    this.spine002 = object.getObjectByName('spine002');
    this.spine003 = object.getObjectByName('spine003');
    this.spine004 = object.getObjectByName('spine004');
    this.spine005 = object.getObjectByName('spine005');
    this.spine006 = object.getObjectByName('spine006');

    this.position_test = this.spine006?.position.y
    
    
    // // left arm
    this.shoulderL = object.getObjectByName('shoulderL');
    this.upper_armL = object.getObjectByName('upper_armL');
// console.log("From loadmodel service: \n")
// console.log( this.shoulderL?.quaternion);
    
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

    this.palm04L = object.getObjectByName('palm04L');
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

     this.palm04R = object.getObjectByName('palm04R');
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
  constructor(public ngtGLTFLoader: NgtGLTFLoader) {}

  calling_data_service(current_target: any) {
    console.log('From loadmodel service: \n');
    console.log(current_target);
    if (this.spine) {
      gsap.to(this.spine.quaternion, {
        _w: -0.707,
        _x: -0.707,
        _y: 0.0,
        _z: 0.0,
        duration: 1,
        //onComplete: () => {console.log("Down called")}
        // onCompleteParams: [current_target],
      });
    }
  }
}
