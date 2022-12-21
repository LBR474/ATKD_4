import { Injectable } from '@angular/core';

import { AttentionService } from './attention.service';
import { HorsestanceService } from '../movement-services/horsestance.service';
import { leftarmelbowstrike } from './leftarmelbowstrike.service';
import { LeftarmwidedownblockService } from '../movement-services/leftarmwidedownblock.service';
import { rightarmelbowstrike } from './rightarmelbowstrike.service';
import { rightarmwidedownblockService } from './rightarmwidedownblock.service';
import { TogglerService } from '../movement-services/toggler.service';
import { ChoonbiservService } from './choonbiserv.service';

@Injectable({
  providedIn: 'root',
})
export class BP1CollateMovementServiceService {
  attchoonisOpen: boolean = true;

  constructor(
    public loadAttention: AttentionService,
    public loadChoonbiserv: ChoonbiservService,
    public loadHorse: HorsestanceService,
    public loadleftarmelbowstrike: leftarmelbowstrike,
    
    public loadLeftArmwidedownBlock: LeftarmwidedownblockService,
    
    public loadrightarmelbowstrike: rightarmelbowstrike,
    public loadrightarmwidedownblock: rightarmwidedownblockService,
    public toggler: TogglerService
  ) {}

  // collate movement function area begins

  BP1_collate_movement(stance: any, leftArm: any, rightArm: any) {
    // count one
    if (
      this.toggler.count_incrementer == 1 &&
      stance == 'Horse' &&
      leftArm == 'Down block' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.stanceisOpen = !this.toggler.stanceisOpen;
      this.toggler.toggle_correct();
      this.loadHorse.horse_stance();
      this.loadLeftArmwidedownBlock.left_arm_wide_down_block_arms_up();
      this.loadrightarmelbowstrike.right_arm_elbow_strike_arms_up();
    }
    // count two
    else if (
      this.toggler.count_incrementer == 2 &&
      leftArm == 'Elbow strike' &&
      rightArm == 'Down block'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();
      this.loadleftarmelbowstrike.left_arm_elbow_strike_arms_up();
      this.loadrightarmwidedownblock.right_arm_wide_down_block_arms_up();
    }
    // count three
    else if (
      this.toggler.count_incrementer == 3 &&
      leftArm == 'Middle block' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();
      this.loadLeftArmwidedownBlock.left_arm_wide_down_block_arms_up();
      this.loadrightarmelbowstrike.right_arm_elbow_strike_arms_up();
    }
    // count four
    else if (
      this.toggler.count_incrementer == 4 &&
      leftArm == 'Elbow strike' &&
      rightArm == 'Middle block'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();
      this.loadleftarmelbowstrike.left_arm_elbow_strike_arms_up();
      this.loadrightarmwidedownblock.right_arm_wide_down_block_arms_up();
    }
    // count five
    else if (
      this.toggler.count_incrementer == 5 &&
      leftArm == 'Upper block' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();
      this.loadLeftArmwidedownBlock.left_arm_wide_down_block_arms_up();
      this.loadrightarmelbowstrike.right_arm_elbow_strike_arms_up();
    }
    // count six
    else if (
      this.toggler.count_incrementer == 6 &&
      leftArm == 'Elbow strike' &&
      rightArm == 'Upper block'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();
      this.loadleftarmelbowstrike.left_arm_elbow_strike_arms_up();
      this.loadrightarmwidedownblock.right_arm_wide_down_block_arms_up();
    }
    // count seven
    else if (
      this.toggler.count_incrementer == 7 &&
      leftArm == 'Middle punch' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();
      this.loadLeftArmwidedownBlock.left_arm_wide_down_block_arms_up();
      this.loadrightarmelbowstrike.right_arm_elbow_strike_arms_up();
    }
    // count eight
    else if (
      this.toggler.count_incrementer == 8 &&
      leftArm == 'Elbow strike' &&
      rightArm == 'Middle punch'
    ) {
      this.toggler.toggle_final();
      this.toggler.toggle_correct();
      this.toggler.toggle();
      this.loadleftarmelbowstrike.left_arm_elbow_strike_arms_up();
      this.loadrightarmwidedownblock.right_arm_wide_down_block_arms_up();
      setTimeout(() => {
        this.loadChoonbiserv.choon_bi_up_arms();
      }, 2000);
    }
  }
}
