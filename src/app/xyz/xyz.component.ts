// angular core imports
import { Component, Input, OnInit } from '@angular/core';

// three imports
import * as THREE from 'three';

import {
  Bone,
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

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css'],
})
export class XyzComponent implements OnInit {
  public colorfirst = new THREE.Color('aqua');

  @Input()
  set colorer(value: string) {
    this.applyColor(value);
    this.#color = value;
  }
  #color = '';
  title = 'Angular-TKD_4';
  public color = new THREE.Color('white');
  public rotation = 90;

  model$ = this.ngtGLTFLoader.load('/assets/TKD_girl_4.gltf');

  modelMaterial: MeshStandardMaterial | undefined;
  public modelBone: Object3D | undefined;

  constructor(private ngtGLTFLoader: NgtGLTFLoader) {}

  ngOnInit(): void {}

  setSkeleton(object: Object3D) {
    console.log(object);
  }

  applyColor(colorer: string) {
    this.rotation += 30;
    if (this.modelMaterial) {
      this.modelMaterial.color.setHex(parseInt(colorer.substring(1), 16));
    }
    this.modelBone?.rotateY(this.rotation);
  }

  modelReady(object: Object3D) {
    const wholeGirl = object.name;
    const mesh = object.getObjectByName('metarig');
    this.modelBone = object.getObjectByName('metarig')?.children[0].children[0];
    this.modelMaterial = <MeshStandardMaterial>(
      (<Mesh>object.getObjectByName('Sphere001_4')).material
    );
    this.modelMaterial.wireframe = true;
    //this.modelMaterial.color.setHex(parseInt('6c238c', 16))
    this.applyColor(this.#color);

    console.log(mesh);
  }
}
