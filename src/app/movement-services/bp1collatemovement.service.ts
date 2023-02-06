import { Injectable } from '@angular/core';

import { AttentionService } from './attention.service';
import { HorsestanceService } from './horsestance.service';
import { leftarmelbowstrike } from './leftarmelbowstrike.service';
import { LeftarmblockService } from './leftarmblock.service';
import { LeftarmpunchService } from './leftarmpunch.service';
import { rightarmelbowstrike } from './rightarmelbowstrike.service';
import { rightarmblockService } from './rightarmblock.service';
import { RightarmpunchService } from './rightarmpunch.service';
import { TogglerService } from './toggler.service';
import { ChoonbiservService } from './choonbiserv.service';

@Injectable({
  providedIn: 'root',
})
export class BP1CollateMovement {
  attchoonisOpen: boolean = true;

  constructor(
    public loadAttention: AttentionService,
    public loadChoonbiserv: ChoonbiservService,
    public loadHorse: HorsestanceService,
    public loadLeftArmBlock: LeftarmblockService,
    public loadleftarmelbowstrike: leftarmelbowstrike,
    public loadleftarmpunch: LeftarmpunchService,

    public loadrightarmelbowstrike: rightarmelbowstrike,
    public loadrightarmblock: rightarmblockService,
    public loadrightarmpunch: RightarmpunchService,
    public toggler: TogglerService
  ) {}

  // collate movement function area begins

  BP1_collate_movement(stance: any, leftArm: any, rightArm: any) {
    // count one
    if (
      this.toggler.count_incrementer == 1 &&
      this.toggler.poomsae_number == 1 &&
      stance == 'Horse' &&
      leftArm == 'Down block' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.stanceisOpen = !this.toggler.stanceisOpen;
      this.toggler.toggle_correct();

      // C1 right arm movement(s)
      this.loadrightarmelbowstrike.right_arm_elbow_strike_arms_up();

      // C1 left arm movement(s)
      this.loadLeftArmBlock.left_arm_wide_down_block_arms_up();

      // C1 stance movement(s)
      this.loadHorse.horse_stance_legs_up();
    } 
    
    // count two
    else if (
      this.toggler.count_incrementer == 2 &&
      leftArm == 'Elbow strike' &&
      rightArm == 'Down block'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();

      // C2 left arm movement(s)
      this.loadleftarmelbowstrike.left_arm_elbow_strike_arms_up();

      // C2 right arm movement(s)
      this.loadrightarmblock.right_arm_wide_down_block_arms_up();
    }
    // count three
    else if (
      this.toggler.count_incrementer == 3 &&
      leftArm == 'Middle block' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();

      // C3 left arm movement(s)
      this.loadLeftArmBlock.left_arm_wide_middle_block_arms_up();

      // C3 right arm movement(s)
      this.loadrightarmelbowstrike.right_arm_MandU_elbow_strike_arms_up();
    }
    // count four
    else if (
      this.toggler.count_incrementer == 4 &&
      leftArm == 'Elbow strike' &&
      rightArm == 'Middle block'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();

      // C4 left arm movement(s)
      this.loadleftarmelbowstrike.left_arm_MandU_elbow_strike_arms_up();

      // C4 right arm movement(s)
      this.loadrightarmblock.right_arm_wide_middle_block_arms_up();
    }
    // count five
    else if (
      this.toggler.count_incrementer == 5 &&
      leftArm == 'Upper block' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();

      // C5 right arm movement(s)
      this.loadLeftArmBlock.left_arm_wide_upper_block_arms_up();

      // C5 right arm movement(s)
      this.loadrightarmelbowstrike.right_arm_MandU_elbow_strike_arms_up();
    }
    // count six
    else if (
      this.toggler.count_incrementer == 6 &&
      leftArm == 'Elbow strike' &&
      rightArm == 'Upper block'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();

      // C6 left arm movement(s)
      this.loadleftarmelbowstrike.left_arm_MandU_elbow_strike_arms_up();

      // C6 right arm movement(s)
      this.loadrightarmblock.right_arm_wide_upper_block_arms_up();
    }
    // count seven
    else if (
      this.toggler.count_incrementer == 7 &&
      leftArm == 'Middle punch' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();

      // C7 left arm movement(s)
      this.loadleftarmpunch.left_arm_middle_punch();

      // C7 right arm movement(s)
      this.loadrightarmelbowstrike.right_arm_MandU_elbow_strike_arms_down();
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
      this.toggler.changeOverTitleisOpen = false;

      // C8 left arm movement(s)
      this.loadleftarmelbowstrike.left_arm_MandU_elbow_strike_arms_down();

      // C8 right arm movement(s)
      this.loadrightarmpunch.right_arm_middle_punch();
      this.toggler.toggle_kiop()

      //BP one finish
      setTimeout(() => {
        this.toggler.toggle_kiop();
        this.loadChoonbiserv.choon_bi_up_arms();
      }, 2000);
    }
  }
}
