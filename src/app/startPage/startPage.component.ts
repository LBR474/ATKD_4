// Angular core imports
import { Component, OnInit, AfterViewInit } from '@angular/core';

// angular animation.ts imports
import {
  attchoonOpenClose,
  correctOpenClose,
  finalOpenClose,
  instructionOpenClose,
  leftArmOpenClose,
  openClose,
  rotator,
  stanceOpenClose,
  slideInAnimation,
  visibleInvisible,
} from '../app.animation';

// angular forms imports
import { FormControl } from '@angular/forms';

// gsap import
import { gsap } from 'gsap';

// soba imports
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports
import * as THREE from 'three';
//import { Object3D } from 'three';

// movement services imports
import { AttentionService } from '../movement-services/attention.service';
import { BP1CollateMovementServiceService } from '../movement-services/bp1collatemovementservice.service';
import { HorsestanceService } from '../movement-services/horsestance.service';
import { LeftarmwidedownblockService } from '../movement-services/leftarmwidedownblock.service';
import { LeftfistService } from '../movement-services/leftfist.service';
import { LoadModelService } from '../movement-services/loadmodel.service';
import { ReturnToStartService } from '../movement-services/return-to-start.service';
import { RightfistService } from '../movement-services/rightfist.service';
import { TogglerService } from '../movement-services/toggler.service';

@Component({
  providers: [],
  selector: 'app-startPage',
  templateUrl: './startPage.component.html',
  styleUrls: ['./startPage.component.css'],
  animations: [
    attchoonOpenClose,
    correctOpenClose,
    finalOpenClose,
    instructionOpenClose,
    leftArmOpenClose,

    openClose,
    rotator,
    stanceOpenClose,
    slideInAnimation,
    visibleInvisible,
  ],
})
export class StartPageComponent implements OnInit, AfterViewInit {
  // global variables area

  attention_clicked = false;
  public bgcolor = new THREE.Color(0x5f5f00);
  choonBi_clicked = false;

  choonbi: string = 'choOn bi';
  public grid_center_line_color = new THREE.Color(0xff5f00);

  title: string = 'Basic poomsae one';

  constructor(
    public attserve: AttentionService,
    public bp1MovementCollate: BP1CollateMovementServiceService,
    public loadHorse: HorsestanceService,
    public loadLeftArmwidedownBlock: LeftarmwidedownblockService,
    public loadLeftFist: LeftfistService,
    public loadModel: LoadModelService,
    public loadRightFist: RightfistService,
    public ngtGLTFLoader: NgtGLTFLoader,
    public rts: ReturnToStartService,
    public toggler: TogglerService // public rts: ReturnToStartService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //console.log('From after view init: ' + this.loadModel.spine003);
  }

  // // // choon bi function area begins
  choon_bi_up_arms = () => {
    if (
      this.loadModel.spine &&
      this.loadModel.handL &&
      this.loadModel.shoulderL &&
      this.loadModel.shoulderR &&
      this.loadModel.upper_armL &&
      this.loadModel.upper_armR &&
      this.loadModel.forearmL &&
      this.loadModel.forearmR &&
      this.loadModel.handR &&
      this.loadModel.pelvisL &&
      this.loadModel.pelvisR &&
      this.loadModel.thighL &&
      this.loadModel.thighR
    ) {
      gsap.to(this.loadModel.shoulderL.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: -0.59,
        _z: -0.55,
        duration: 1,
      });
      gsap.to(this.loadModel.shoulderR.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: 0.59,
        _z: 0.55,
        duration: 1,
      });

      gsap.to(this.loadModel.upper_armL.quaternion, {
        _w: 0.5,
        _x: 0.12,
        _y: 0.78,
        _z: -0.33,
        duration: 1,
      });

      gsap.to(this.loadModel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.5,
        _x: 0.12,
        _y: -0.78,
        _z: 0.33,
      });

      gsap.to(this.loadModel.forearmL.quaternion, {
        _w: 0.8,
        _x: 0.6,
        _y: 0.04,
        _z: 0.02,
        duration: 1,
      });

      gsap.to(this.loadModel.forearmR.quaternion, {
        duration: 1,
        _w: 0.8,
        _x: 0.6,
        _y: 0.04,
        _z: 0.02,
      });

      gsap.to(this.loadModel.thighL.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.0,
        _z: 0.0,
        duration: 1,
      });
      gsap.to(this.loadModel.thighR.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.0,
        _z: 0.0,
        duration: 1,
      });
      gsap.to(this.loadModel.spine.position, {
        duration: 1,
        x: 0.0,
        onComplete: this.choon_bi,
      });
    }
  };

  // // // choon bi function area begins
  choon_bi = () => {
    if (
      this.loadModel.spine &&
      this.loadModel.handL &&
      this.loadModel.shoulderL &&
      this.loadModel.shoulderR &&
      this.loadModel.upper_armL &&
      this.loadModel.upper_armR &&
      this.loadModel.forearmL &&
      this.loadModel.forearmR &&
      this.loadModel.handR &&
      this.loadModel.pelvisL &&
      this.loadModel.pelvisR
    ) {
      this.loadLeftFist.make_left_fist();
      this.loadRightFist.make_right_fist();
      gsap.to(this.loadModel.shoulderL.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: -0.59,
        _z: -0.55,
        duration: 1,
      });
      gsap.to(this.loadModel.shoulderR.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: 0.59,
        _z: 0.55,
        duration: 1,
      });

      gsap.to(this.loadModel.upper_armL.quaternion, {
        _w: 0.3,
        _x: -0.23,
        _y: 0.76,
        _z: -0.52,
        duration: 1,
      });

      gsap.to(this.loadModel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.3,
        _x: -0.23,
        _y: -0.76,
        _z: 0.52,
      });
      gsap.to(this.loadModel.forearmL.quaternion, {
        _w: 0.95,
        _x: 0.31,
        _y: 0.04,
        _z: 0.02,
        duration: 1,
      });

      gsap.to(this.loadModel.forearmR.quaternion, {
        duration: 1,
        _w: 0.95,
        _x: 0.31,
        _y: 0.04,
        _z: 0.02,
      });
    }
  };

  setInitial(controls: NgtSobaOrbitControls) {
    const orbitControl = controls.camera;

    if (orbitControl) {
      orbitControl.position.setY(4);
    }
  }
}
