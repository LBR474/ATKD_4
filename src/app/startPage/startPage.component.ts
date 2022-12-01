// Angular core imports
import { Component, OnInit, AfterViewInit } from '@angular/core';

// soba imports
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports
import * as THREE from 'three';
import { Object3D } from 'three';

// gsap import
import { gsap } from 'gsap';

//import { DemoPipe } from '../movement-services/demo.pipe';

import { AttentionService } from '../movement-services/attention.service';

import { LoadModelService } from '../movement-services/loadmodel.service';
import { HorsestanceService } from '../movement-services/horsestance.service';
import { LeftarmwidedownblockService } from '../movement-services/leftarmwidedownblock.service';
import { LeftfistService } from '../movement-services/leftfist.service';
import { RightfistService } from '../movement-services/rightfist.service';
import { TogglerService } from '../movement-services/toggler.service';

import { FormControl } from '@angular/forms';
import { ReturnToStartService } from '../movement-services/return-to-start.service';


import { slideInAnimation, openClose, leftArmOpenClose } from '../app.animation';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  
];



@Component({
  providers: [],
  selector: 'app-startPage',
  templateUrl: './startPage.component.html',
  styleUrls: ['./startPage.component.css'],
  animations: [slideInAnimation, openClose, leftArmOpenClose],
})

//transform: 'translateY(-100px)'
export class StartPageComponent implements OnInit, AfterViewInit {
  choonbi: string = 'choOn bi';
  title: string = 'Basic poomsae one';
  attention_clicked = false;
  choonBi_clicked = false;
  showFiller = false;
  public bgcolor = new THREE.Color(0x5f5f00);
  public grid_center_line_color = new THREE.Color(0xff5f00);
  isOpen: boolean = true;
  leftisOpen: boolean = true;

  toggle() {
    
    setTimeout(() => {
      this.isOpen = !this.isOpen;
      this.leftisOpen = !this.leftisOpen;
    }, 2000);
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor(
    public ngtGLTFLoader: NgtGLTFLoader,

    public attserve: AttentionService,
    public rts: ReturnToStartService,

    public loadmodel: LoadModelService,
    public loadhorse: HorsestanceService,
    public LoadleftArmwidedownBlock: LeftarmwidedownblockService,
    public Loadleftfist: LeftfistService,
    public Loadrightfist: RightfistService,


    public toggler: TogglerService,
    // public rts: ReturnToStartService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('From after view init: ' + this.loadmodel.spine003);
  }

  // // // choon bi function area begins
  choon_bi_up_arms = () => {
    if (
      this.loadmodel.spine &&
      this.loadmodel.handL &&
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR
    ) {
      gsap.to(this.loadmodel.shoulderL.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: -0.59,
        _z: -0.55,
        duration: 1,
      });
      gsap.to(this.loadmodel.shoulderR.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: 0.59,
        _z: 0.55,
        duration: 1,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.5,
        _x: 0.12,
        _y: 0.78,
        _z: -0.33,
        duration: 1,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.5,
        _x: 0.12,
        _y: -0.78,
        _z: 0.33,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.8,
        _x: 0.6,
        _y: 0.04,
        _z: 0.02,
        duration: 1,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: 1,
        _w: 0.8,
        _x: 0.6,
        _y: 0.04,
        _z: 0.02,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.0,
        _z: 0.0,
        duration: 1,
      });
      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.0,
        _z: 0.0,
        duration: 1,
      });
      gsap.to(this.loadmodel.spine.position, {
        duration: 1,
        x: 0.0,
        onComplete: this.choon_bi,
      });
    }
  };

  // // // choon bi function area begins
  choon_bi = () => {
    if (
      this.loadmodel.spine &&
      this.loadmodel.handL &&
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR
    ) {
      this.Loadleftfist.make_left_fist();
      this.Loadrightfist.make_right_fist();
      gsap.to(this.loadmodel.shoulderL.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: -0.59,
        _z: -0.55,
        duration: 1,
      });
      gsap.to(this.loadmodel.shoulderR.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: 0.59,
        _z: 0.55,
        duration: 1,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.3,
        _x: -0.23,
        _y: 0.76,
        _z: -0.52,
        duration: 1,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: 1,
        _w: 0.3,
        _x: -0.23,
        _y: -0.76,
        _z: 0.52,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.95,
        _x: 0.31,
        _y: 0.04,
        _z: 0.02,
        duration: 1,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
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
      orbitControl.position.setY(6);
    }
  }
}
