// Angular core imports
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { AppComponent } from '../app.component';

// angular animation.ts imports
import {
  attchoonOpenClose,
  changeOverFinal,
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
import { Bp4collatemovementService } from '../movement-services/bp4collatemovement.service';
import { Bp4TogglerService } from '../movement-services/bp4-toggler.service';
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
  selector: 'app-bp4',
  templateUrl: './bp4.component.html',
  styleUrls: ['./bp4.component.css'],
  animations: [
    attchoonOpenClose,
    changeOverFinal,
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
export class Bp4Component implements OnInit {
  // global variables area

  BP1_colors = ['#7b1fa2', '#69f0ae', '#f44336'];
  attention_clicked = false;
  public bgcolor = new THREE.Color(0xff0000);
  camera_z_pos = 2.4;
  choonBi_clicked = false;
  choonBi_X_clicked = true;

  choonbi: string = 'choOn bi';
  BP4_X_choonbi: string = 'B.P.4 Starting choonbi';
  public grid_center_line_color = new THREE.Color(0xff5f00);

  title: string = 'Basic poomsae one';
  constructor(
    public attserve: AttentionService,
    public appComponent: AppComponent,
    // public bp1MovementCollate: BP1CollateMovement,
    // public bp2MovementCollate: Bp2collatemovementService,
    public bp4MovementCollate: Bp4collatemovementService,
    public BP2toggler: BP2TogglerService,
    public BP4toggler: Bp4TogglerService,
    public choonbiServ: ChoonbiservService,
    public loadHorse: HorsestanceService,
    public loadLeftArmBlock: LeftarmblockService,
    public loadLeftFist: LeftfistService,
    public loadModel: loadmodelService,
    public loadRightFist: RightfistService,
    public ngtGLTFLoader: NgtGLTFLoader,
    public rts: ReturnToStartService,
    public toggler: TogglerService // public rts: ReturnToStartService,
  ) {
    toggler.poomsae_number = 4;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    // this.appComponent.min_distance = 1.5;
    setTimeout(() => {
      this.appComponent.min_distance = 1.5;
    }, 0);
  }

  open_X_choonBi () {
    setTimeout(() => {
      this.choonBi_X_clicked = false;
    }, 1200);
  }
}
