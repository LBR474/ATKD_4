import { Component, OnInit, Output, EventEmitter } from '@angular/core';

// three imports 
import * as THREE from 'three'
import {
  Bone,
  Euler,
  Mesh,
  MeshStandardMaterial,
  Scene,
  SkeletonHelper,
  SkinnedMesh,
  Object3D,
} from 'three';
import { XyzComponent } from '../xyz/xyz.component';

@Component({
  selector: 'app-xyz2',

  template: `
    <!-- <div class="canvas-container">
      <ngt-canvas>
        <ngt-mesh o3d (animateReady)="onCubeAnimate($event.object)">
          <ngt-box-geometry [ngtBoxHelper]="['red']"></ngt-box-geometry>
          <ngt-mesh-basic-material
            [color]="'hotpink'"
          ></ngt-mesh-basic-material>
        </ngt-mesh>
      </ngt-canvas>
      Canvas is here
    </div> -->
  `,
  styleUrls: ['./xyz2.component.css'],
})
export class Xyz2Component implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
public test_value: string = 'Hello'
  
  // // whole skeleton
  public metarig: Object3D | undefined;

  // // root bone which moves whole body
  public spinal: Object3D | undefined;
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
  public forearmL001: Object3D | undefined;
  public forearmL002: Object3D | undefined;
  public forearmL003: Object3D | undefined;

  // fingers left
  public handL001: Object3D | undefined;
  public handL002: Object3D | undefined;
  public handL003: Object3D | undefined;

  public forearmR: Object3D | undefined;
  public handR: Object3D | undefined;

  // thumb right
  public forearmR001: Object3D | undefined;
  public forearmR002: Object3D | undefined;
  public forearmR003: Object3D | undefined;

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

  constructor() {}

  message: string = 'Hello!';

  ngOnInit(): void {}
}
