// angular core imports
import { Component, Input, OnInit } from '@angular/core';

// three imports
import * as THREE from 'three';

import { Mesh, MeshStandardMaterial, Scene, SkeletonHelper, SkinnedMesh } from 'three';
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
  public colorfirst = new THREE.Color('aqua')

  @Input() 
  set colorer(value:string) {
    this.applyColor(value)
    this.#color = value
  }
  #color = ''
    title = 'Angular-TKD_4';
  public color = new THREE.Color('white');
   
  model$ = this.ngtGLTFLoader.load('/assets/TKD_girl_4.gltf');

  modelMaterial: MeshStandardMaterial | undefined
           

  constructor(private ngtGLTFLoader: NgtGLTFLoader) {}

  ngOnInit(): void {}

  setSkeleton(object: Object3D) {
    console.log(object)
  }

  applyColor (colorer: string) {
    if (this.modelMaterial) {
      this.modelMaterial.color.setHex(parseInt(colorer.substring(1), 16));
    }

  }

  modelReady(object: Object3D) {
    const wholeGirl = object.name;
  
    this.modelMaterial = <MeshStandardMaterial>(
      (<Mesh>object.getObjectByName('Sphere001')).material
    );
    this.modelMaterial.wireframe = true;
    //this.modelMaterial.color.setHex(parseInt('6c238c', 16))
    this.applyColor(this.#color)
    

    console.log(object);
  }
}
