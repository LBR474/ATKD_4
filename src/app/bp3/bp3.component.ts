// Angular core imports
import { Component, OnInit, AfterViewInit } from '@angular/core';

// angular animation.ts imports
import {
  attchoonOpenClose,
  changeOverFinal,
  changeOverKiop,
  changeOverTitle,
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

// soba imports
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';

import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports
import * as THREE from 'three';

// movement services imports
import { AttentionService } from '../movement-services/attention.service';
// import { BP1CollateMovement } from '../movement-services/bp1collatemovement.service';
// import { Bp2collatemovementService } from '../movement-services/bp2collatemovement.service';
import { Bp3collatemovementService } from '../movement-services/bp3collatemovement.service';
import { ChoonbiservService } from '../movement-services/choonbiserv.service';
import { HorsestanceService } from '../movement-services/horsestance.service';
import { LeftarmblockService } from '../movement-services/leftarmblock.service';
import { LeftfistService } from '../movement-services/leftfist.service';
import { loadmodelService } from '../movement-services/loadmodel.service';
import { ReturnToStartService } from '../movement-services/return-to-start.service';
import { RightfistService } from '../movement-services/rightfist.service';
import { TogglerService } from '../movement-services/toggler.service';
import { BP2TogglerService } from '../older-backup-files/BP2toggler.service';
//import { Bp3collatemovementService } from '../movement-services/bp3collatemovement.service';

@Component({
  providers: [],
  selector: 'app-bp3',
  templateUrl: './bp3.component.html',
  styleUrls: ['./bp3.component.css'],
  animations: [
    attchoonOpenClose,
    changeOverFinal,
    changeOverKiop,
    changeOverTitle,
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
export class Bp3Component implements OnInit, AfterViewInit {
  // global variables area

  BP1_colors = ['#7b1fa2', '#69f0ae', '#f44336'];
  attention_clicked = false;
  public bgcolor = new THREE.Color(0xff0000);
  camera_x_pos = 0.0;
  choonBi_clicked = false;

  choonbi: string = 'choOn bi';
  public grid_center_line_color = new THREE.Color(0xff5f00);

  title: string = 'Basic poomsae one';

  constructor(
    public attserve: AttentionService,
    // public bp1MovementCollate: BP1CollateMovement,
    // public bp2MovementCollate: Bp2collatemovementService,
    public bp3MovementCollate: Bp3collatemovementService,
    public BP2toggler: BP2TogglerService,
    public choonbiServ: ChoonbiservService,
    public loadHorse: HorsestanceService,
    public loadLeftArmBlock: LeftarmblockService,
    public loadLeftFist: LeftfistService,
    public loadModel: loadmodelService,
    public loadRightFist: RightfistService,
    public ngtGLTFLoader: NgtGLTFLoader,
    public rts: ReturnToStartService,
    public toggler: TogglerService // public rts: ReturnToStartService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    //console.log('From after view init: ' + this.loadModel.spine003);
  }
  move_camera() {
    this.camera_x_pos = 0.7;
  }

  setInitial(controls: NgtSobaOrbitControls) {
    const orbitControl = controls.camera;
    console.log(controls.camera);

    if (orbitControl) {
      orbitControl.position.setY(5);
      orbitControl.position.setX(0.7);
    }
  }
}
