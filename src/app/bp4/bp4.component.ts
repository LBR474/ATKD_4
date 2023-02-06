// Angular core imports
import { Component, OnInit } from '@angular/core';


// angular animation.ts imports
import {
  attchoonOpenClose,
  changeOverFinal,
  changeOverBP4KiopLeft,
  changeOverBP4KiopRight,
 
  correctOpenClose,
  finalOpenClose,
  instructionOpenClose,
  leftArmOpenClose,
  openClose,
  rotator,
  stanceOpenClose,
  slideInAnimation,
  visibleInvisible,
  changeOverTitle,
} from '../app.animation';



import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports
import * as THREE from 'three';

// movement services imports
import { AttentionService } from '../movement-services/attention.service';
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

import { TimerVariablesService } from '../movement-services/timer-variables.service';

@Component({
  selector: 'app-bp4',
  templateUrl: './bp4.component.html',
  styleUrls: ['./bp4.component.css'],
  animations: [
    attchoonOpenClose,
    changeOverFinal,
    changeOverBP4KiopLeft,
    changeOverBP4KiopRight,
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

  
  attention_clicked = false;
  
  choonBi_clicked = true;
  choonBi_X_clicked = true;
  position_test = this.loadModel.spine006?.position.y;

  choonbi: string = 'choOn bi';
  BP4_X_choonbi: string = 'B.P.4 Starting choonbi';
  

  title: string = 'Basic poomsae one';
  constructor(
    public attserve: AttentionService,
   
    public bp4MovementCollate: Bp4collatemovementService,
    
    public BP4toggler: Bp4TogglerService,
    public choonbiServ: ChoonbiservService,
    public loadHorse: HorsestanceService,
    public loadLeftArmBlock: LeftarmblockService,
    public loadLeftFist: LeftfistService,
    public loadModel: loadmodelService,
    public loadRightFist: RightfistService,
    public ngtGLTFLoader: NgtGLTFLoader,
    public rts: ReturnToStartService,
    public timerVar: TimerVariablesService,
    public toggler: TogglerService 
  ) {
    toggler.poomsae_number = 4;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
   
    setTimeout(() => {
      this.timerVar.min_distance = 1.5;
    }, 0);
  }

  open_X_choonBi() {
    setTimeout(() => {
      this.choonBi_X_clicked = false;
    }, 1100);
  }

  
  }

