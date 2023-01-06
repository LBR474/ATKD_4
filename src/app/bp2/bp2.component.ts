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
import { NgtSobaTransformControls } from '@angular-three/soba/controls';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports
import * as THREE from 'three';
//import { Object3D } from 'three';

// movement services imports
import { AttentionService } from '../movement-services/attention.service';
import { BP1CollateMovement } from '../movement-services/bp1collatemovement.service';
import { BP2TogglerService } from '../movement-services/BP2toggler.service';
import { ChoonbiservService } from '../movement-services/choonbiserv.service';
import { HorsestanceService } from '../movement-services/horsestance.service';
import { LeftarmblockService } from '../movement-services/leftarmblock.service';
import { LeftfistService } from '../movement-services/leftfist.service';
import { LoadModelService } from '../movement-services/loadmodel.service';
import { ReturnToStartService } from '../movement-services/return-to-start.service';
import { RightfistService } from '../movement-services/rightfist.service';
//import { TogglerService } from '../movement-services/toggler.service';


@Component({
  providers: [
    

  ],
  selector: 'app-bp2',
  templateUrl: './bp2.component.html',
  styleUrls: ['./bp2.component.css'],
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
export class BP2Component implements OnInit, AfterViewInit {
  // global variables area

  attention_clicked = false;
  public bgcolor = new THREE.Color(0x5f5f00);
  camera_x_pos = 0.0;
  choonBi_clicked = false;
  

  choonbi: string = 'choOn bi';
  public grid_center_line_color = new THREE.Color(0xff5f00);

  title: string = 'Basic poomsae two';

  constructor(
    public attserve: AttentionService,
    public bp1MovementCollate: BP1CollateMovement,
    public bp2Toggler: BP2TogglerService,
    public choonbiServ: ChoonbiservService,
    public loadHorse: HorsestanceService,
    public loadLeftArmBlock: LeftarmblockService,
    public loadLeftFist: LeftfistService,
    public loadModel: LoadModelService,
    public loadRightFist: RightfistService,
    public ngtGLTFLoader: NgtGLTFLoader,
    public rts: ReturnToStartService,
    //public toggler: TogglerService // public rts: ReturnToStartService,
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
   
  }
 

 
}
