// Angular core imports
import { Component, OnInit } from '@angular/core';

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

import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// movement services imports
import { AttentionService } from '../movement-services/attention.service';
import { BP1CollateMovement } from '../movement-services/bp1collatemovement.service';
import { Bp2collatemovementService } from '../movement-services/bp2collatemovement.service';
import { ChoonbiservService } from '../movement-services/choonbiserv.service';
import { HorsestanceService } from '../movement-services/horsestance.service';
import { LeftarmblockService } from '../movement-services/leftarmblock.service';
import { LeftfistService } from '../movement-services/leftfist.service';
import { loadmodelService } from '../movement-services/loadmodel.service';
import { ReturnToStartService } from '../movement-services/return-to-start.service';
import { RightfistService } from '../movement-services/rightfist.service';
import { TogglerService } from '../movement-services/toggler.service';


@Component({
  providers: [],
  selector: 'app-bp2',
  templateUrl: './bp2.component.html',
  styleUrls: ['./bp2.component.css'],
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
export class BP2Component implements OnInit {
  // global variables area

  attention_clicked = false;

  choonBi_clicked = true;

  choonbi: string = 'choOn bi';

  constructor(
    public attserve: AttentionService,
    public bp1MovementCollate: BP1CollateMovement,
    public bp2MovementCollate: Bp2collatemovementService,

    public choonbiServ: ChoonbiservService,
    public loadHorse: HorsestanceService,
    public loadLeftArmBlock: LeftarmblockService,
    public loadLeftFist: LeftfistService,
    public loadModel: loadmodelService,
    public loadRightFist: RightfistService,
    public ngtGLTFLoader: NgtGLTFLoader,
    public rts: ReturnToStartService,
    public toggler: TogglerService
  ) {}

  ngOnInit(): void {}
}
