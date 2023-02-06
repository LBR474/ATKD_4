import { Injectable } from '@angular/core';

import { AttentionService } from './attention.service';
import { HorsestanceService } from './horsestance.service';
import { leftarmelbowstrike } from './leftarmelbowstrike.service';
import { LeftarmblockService } from './leftarmblock.service';
import { LeftfistService } from './leftfist.service';
import { LeftknifehandService } from './leftknifehand.service';
import { LeftarmpunchService } from './leftarmpunch.service';
import { LongstancefacingleftService } from './longstancefacingleft.service';
import { LongstancefacingrightService } from './longstancefacingright.service';
import { rightarmelbowstrike } from './rightarmelbowstrike.service';
import { rightarmblockService } from './rightarmblock.service';
import { RightarmpunchService } from './rightarmpunch.service';
import { RightfistService } from './rightfist.service';
import { RightknifehandService } from './rightknifehand.service';
import { TogglerService } from './toggler.service';
import { ChoonbiservService } from './choonbiserv.service';

@Injectable({
  providedIn: 'root',
})
export class Bp2collatemovementService {
  attchoonisOpen: boolean = true;

  constructor(
    public loadAttention: AttentionService,
    public loadChoonbiserv: ChoonbiservService,
    public loadHorse: HorsestanceService,
    public loadLeftArmBlock: LeftarmblockService,
    public loadleftarmelbowstrike: leftarmelbowstrike,
    public loadleftarmpunch: LeftarmpunchService,
    public loadleftfist: LeftfistService,
    public loadleftknifehand: LeftknifehandService,
    public loadlongstancefacingright: LongstancefacingrightService,
    public loadlongstancefacingleft: LongstancefacingleftService,
    public loadrightarmelbowstrike: rightarmelbowstrike,
    public loadrightarmblock: rightarmblockService,
    public loadrightarmpunch: RightarmpunchService,
    public loadrightfist: RightfistService,
    public loadrightknifehand: RightknifehandService,
    public toggler: TogglerService
  ) {}
  // collate movement function area begins

  BP2_collate_movement(stance: any, leftArm: any, rightArm: any) {
    // count one
    if (
      this.toggler.count_incrementer == 1 &&
      stance == 'Horse' &&
      leftArm == 'Inside block' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      //this.toggler.stanceisOpen = !this.toggler.stanceisOpen;
      this.toggler.toggle_correct();

      // C1 right arm movement(s)
      this.loadrightarmelbowstrike.right_arm_MandU_elbow_strike_arms_up();

      // C1 left arm movement(s)
      this.loadLeftArmBlock.left_arm_wide_inside_block_arms_up();

      // C1 stance arm movement(s)
      this.loadHorse.horse_stance_legs_up();
    }
    // count two
    else if (
      this.toggler.count_incrementer == 2 &&
      stance == 'Horse' &&
      leftArm == 'Elbow strike' &&
      rightArm == 'Inside block'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      //this.toggler.stanceisOpen = !this.toggler.stanceisOpen;
      this.toggler.toggle_correct();

      // C2 right arm movement(s)
      this.loadrightarmblock.right_arm_wide_inside_block_arms_up();

      // C2 left arm movement(s)
      this.loadleftarmelbowstrike.left_arm_MandU_elbow_strike_arms_up();

      // C2 stance arm movement(s)
      this.loadHorse.horse_stance();
    }
    // count three
    else if (
      this.toggler.count_incrementer == 3 &&
      stance == 'Long - facing right' &&
      leftArm == 'Knife strike' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();

      // C3 right arm movement(s)
      this.loadrightarmelbowstrike.right_arm_MandU_elbow_strike_arms_up();

      // C3 left arm movement(s)
      this.loadleftknifehand.make_left_knife();
      this.loadLeftArmBlock.left_arm_knife_strike_arms_up();

      // C3 stance movement(s)
      this.loadlongstancefacingright.long_stance_facing_right();
    }
    // count four
    else if (
      this.toggler.count_incrementer == 4 &&
      stance == 'Long - facing left' &&
      leftArm == 'Elbow strike' &&
      rightArm == 'Knife strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();

      // C4 right arm movement(s)
      this.loadrightknifehand.make_right_knife();
      this.loadrightarmblock.right_arm_knife_strike_arms_up();

      // C4 left arm movement(s)
      this.loadleftarmelbowstrike.left_arm_MandU_elbow_strike_arms_up();
      this.loadleftfist.make_left_fist();

      // C4 stance movement(s)
      this.loadlongstancefacingleft.long_stance_facing_left_spin_back_90();
    }
    // count five
    else if (
      this.toggler.count_incrementer == 5 &&
      stance == 'Long - facing right' &&
      leftArm == 'Knife block' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();

      // C5 right arm movement(s)
      this.loadrightfist.make_right_fist()
      this.loadrightarmelbowstrike.right_arm_MandU_elbow_strike_arms_up();

      // C5 left arm movement(s)
      this.loadleftknifehand.make_left_knife();
      this.loadLeftArmBlock.BP2_whirling_left_arm_knife_block_downwards_arms_up();

      // C5 stance movement(s)
      this.loadlongstancefacingright.long_stance_facing_right();
    }
    // count six
    else if (
      this.toggler.count_incrementer == 6 &&
      stance == 'Long - facing left' &&
      leftArm == 'Elbow strike' &&
      rightArm == 'Knife block'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();

      // C6 right arm movement(s)
      this.loadrightknifehand.make_right_knife();
      this.loadrightarmblock.BP2_whirling_right_arm_knife_block_downwards_arms_up();

      // C6 left arm movement(s)
      this.loadleftarmelbowstrike.left_arm_MandU_elbow_strike_arms_up();
      this.loadleftfist.make_left_fist();

      // C6  stance movement(s)
      this.loadlongstancefacingleft.long_stance_facing_left_spin_back_90();
    }
    // count seven
    else if (
      this.toggler.count_incrementer == 7 &&
      stance == 'Horse' &&
      leftArm == 'High punch' &&
      rightArm == 'Elbow strike'
    ) {
      this.toggler.isOpen = !this.toggler.isOpen;
      this.toggler.toggle_correct();
      // C7 left arm movement(s)
      this.loadLeftArmBlock.face_the_front_again();
      this.loadleftarmpunch.left_arm_high_punch();
      // C7right arm movement(s)
      this.loadrightfist.make_right_fist();
      this.loadrightarmelbowstrike.right_arm_MandU_elbow_strike_arms_down();
      // C7 stance movement(s)
      this.loadHorse.horse_stance()
    }
    // count eight
    else if (
      this.toggler.count_incrementer == 8 &&
      stance == 'Horse' &&
      leftArm == 'Elbow strike' &&
      rightArm == 'High punch'
    ) {
      this.toggler.toggle_final();
      this.toggler.toggle_correct();
      this.toggler.toggle();
      this.toggler.changeOverTitleisOpen = false;
      // C8 left arm movement(s)
      this.loadleftarmelbowstrike.left_arm_MandU_elbow_strike_arms_down();
      // C8 right arm movement(s)
      this.toggler.toggle_kiop()
      this.loadrightarmpunch.right_arm_high_punch();
      setTimeout(() => {
        this.toggler.toggle_kiop();
        this.loadChoonbiserv.choon_bi_up_arms();
      }, 4000);
    }
  }
}
