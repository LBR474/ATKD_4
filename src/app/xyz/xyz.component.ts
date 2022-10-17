// angular core imports
import { Component, Input, OnInit } from '@angular/core';

// three imports
import * as THREE from 'three';

// gsap import
import { gsap } from 'gsap';

import {
  Bone,
  Euler,
  Mesh,
  MeshStandardMaterial,
  Scene,
  SkeletonHelper,
  SkinnedMesh,
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { Object3D } from 'three';

// soba imports
import { NgtGLTFLoader } from '@angular-three/soba/loaders';
import { NgtSkeletonHelper } from '@angular-three/core/helpers';

// // component decorator area begins

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css'],
})

// // xyz class area begins
export class XyzComponent implements OnInit {
  //
  // // class-wide scoped variable area begins
  public colorfirst = new THREE.Color('aqua');
  public color = new THREE.Color('gray');

  model$ = this.ngtGLTFLoader.load('/assets/TKD_girl_4.gltf');

  modelMaterial: MeshStandardMaterial | undefined;

  public ninety_degrees: number = Math['PI'] / 2;

  public boneNames: string[] = [];
  // // root bone which moves whole body
  public spine: Object3D | undefined;

  // // arms
  public upper_armL: Object3D | undefined;
  public upper_armR: Object3D | undefined;

  public forearmL: Object3D | undefined;
  public forearmR: Object3D | undefined;

  public handL: Object3D | undefined;
  public handR: Object3D | undefined;

  // // legs
  public pelvisL: Object3D | undefined;
  public pelvisR: Object3D | undefined;

  public attention_counter: number = 0;

  // // input area begins

  @Input()
  set colorer(value: string) {
    this.applyColor(value);
    this.#color = value;
  }
  #color = '';
  title = 'Angular-TKD_4';

  constructor(private ngtGLTFLoader: NgtGLTFLoader) {}

  ngOnInit(): void {}

  //
  // // modelreadyMovement area begins
  modelReadyMovement(object: Object3D) {
    this.spine = object.getObjectByName('spine');

    this.upper_armL = object.getObjectByName('upper_armL');
    this.upper_armR = object.getObjectByName('upper_armR');
    this.forearmL = object.getObjectByName('forearmL');
    this.forearmR = object.getObjectByName('forearmR');
    this.handL = object.getObjectByName('handL');
    this.handR = object.getObjectByName('handR');

    this.pelvisL = object.getObjectByName('pelvisL');
    this.pelvisR = object.getObjectByName('pelvisR');

    console.log(this.upper_armL?.rotation.x);
  }
  //
  attention = () => {
    if (
      this.attention_counter < 1 &&
      this.handL &&
      this.upper_armL &&
      this.spine &&
      this.upper_armR &&
      this.pelvisL &&
      this.pelvisR
    ) {
      gsap.to(this.upper_armL.rotation, {
        duration: 1,
        z: '-=0.69 ',
      });

      gsap.to(this.upper_armR.rotation, {
        duration: 1,
        z: '+=0.69',
      });
      gsap.to(this.pelvisL.rotation, {
        duration: 1,
        z: '-=0.2',
      });
      gsap.to(this.pelvisR.rotation, {
        duration: 1,
        z: '+=0.2',
      });
      gsap.to(this.spine.position, {
        duration: 1,
        x: '-=0.1',
      });
    }
    this.attention_counter = 1;
  };
  myFunction(forearmL: Object3D, forearmR: Object3D, angle: number) {
    //console.log('Called: ' + selector);
    if (forearmL && forearmR) {
      gsap.to(forearmL.rotation, {
        duration: 1,
        z: angle,
      });
      gsap.to(forearmR.rotation, {
        duration: 1,
        z: -angle,
      });
    }
  }
  choon_bi = () => {
    if (
      //this.attention_counter < 1 &&
      this.spine &&
      this.upper_armL &&
      this.upper_armR &&
      this.forearmL &&
      this.forearmR &&
      this.pelvisL &&
      this.pelvisR
    ) {
      gsap.to(this.upper_armL.rotation, {
        duration: 1,
        z: -2.17,
        y: '-=0.9',
        // onComplete: this.myFunction,
        // onCompleteParams: [this.forearmL, this.forearmR, -1.57],
      });

      gsap.to(this.upper_armR.rotation, {
        duration: 1,
        z: 2.17,
        y: '+=0.9',
      });

      gsap.to(this.forearmR.rotation, {
        duration: 1,
        z: 1.57,
        y: '+=0.9',
      });
      gsap.to(this.forearmL.rotation, {
        duration: 1,
        z: -1.57,
        y: '-=0.9',
      });

      gsap.to(this.pelvisL.rotation, {
        duration: 1,
        z: -1.533,
      });
      gsap.to(this.pelvisR.rotation, {
        duration: 1,
        z: +1.533,
      });
      gsap.to(this.spine.position, {
        duration: 1,
        x: 0.0,
      });
    }
    this.attention_counter = 1;
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
}
