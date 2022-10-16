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

  public spine: Object3D | undefined;
  public shoulderL: Object3D | undefined;
  public shoulderR: Object3D | undefined;
  public pelvisL: Object3D | undefined;
  public pelvisR: Object3D | undefined;

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
  // // modelready area begins
  modelReady(object: Object3D) {
    const wholeGirl = object.name;
    const mesh = object.getObjectByName('metarig');

    this.spine = object.getObjectByName('spine');
    this.shoulderL = object.getObjectByName('upper_armL');
    this.shoulderR = object.getObjectByName('upper_armR');
    this.pelvisL = object.getObjectByName('pelvisL');
    this.pelvisR = object.getObjectByName('pelvisR');

    this.modelMaterial = <MeshStandardMaterial>(
      (<Mesh>object.getObjectByName('Sphere001_4')).material
    );
    //this.modelMaterial.wireframe = true;
    //this.modelMaterial.color.setHex(parseInt('6c238c', 16))
    this.applyColor(this.#color);
    // console.log(mesh);
    //console.log(this.boneNames);
  }

  attention = () => {
    if (
      this.shoulderL &&
      this.spine &&
      this.shoulderR &&
      this.pelvisL &&
      this.pelvisR
    ) {
      //  gsap.to(this.spine.rotation, {
      //    duration: 1,
      //    z: '+=0.785',
      //  });
      gsap.to(this.shoulderL.rotation, {
        duration: 1,
        z: '-=0.69 ',
      });

      gsap.to(this.shoulderR.rotation, {
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
  };

  applyColor(colorer: string) {
    if (this.modelMaterial) {
      this.modelMaterial.color.setHex(parseInt(colorer.substring(1), 16));
    }
  }
}
