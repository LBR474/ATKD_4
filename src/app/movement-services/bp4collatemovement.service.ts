import { Injectable } from '@angular/core';

import { AttentionService } from './attention.service';
import { Bp4TogglerService } from './bp4-toggler.service';
import { RightlegkickService } from './rightlegkick.service';
// import { HorsestanceService } from './horsestance.service';
// import { leftarmelbowstrike } from './leftarmelbowstrike.service';
// import { LeftarmblockService } from './leftarmblock.service';
// import { LeftfistService } from './leftfist.service';
// import { LeftknifehandService } from './leftknifehand.service';
// import { LeftarmpunchService } from './leftarmpunch.service';
// import { LongstancefacingleftService } from './longstancefacingleft.service';
// import { LongstancefacingrightService } from './longstancefacingright.service';
// import { rightarmelbowstrike } from './rightarmelbowstrike.service';
// import { rightarmblockService } from './rightarmblock.service';
// import { RightarmpunchService } from './rightarmpunch.service';
// import { RightfistService } from './rightfist.service';
// import { RightknifehandService } from './rightknifehand.service';

import { ChoonbiservService } from './choonbiserv.service';

@Injectable({
  providedIn: 'root',
})
export class Bp4collatemovementService {
  attchoonisOpen: boolean = true;

  constructor(
    public loadAttention: AttentionService,
    public loadChoonbiserv: ChoonbiservService,
    // public loadHorse: HorsestanceService,
    // public loadLeftArmBlock: LeftarmblockService,
    // public loadleftarmelbowstrike: leftarmelbowstrike,
    // public loadleftarmpunch: LeftarmpunchService,
    // public loadleftfist: LeftfistService,
    // public loadleftknifehand: LeftknifehandService,
    // public loadlongstancefacingright: LongstancefacingrightService,
    // public loadlongstancefacingleft: LongstancefacingleftService,
    // public loadrightarmelbowstrike: rightarmelbowstrike,
    // public loadrightarmblock: rightarmblockService,
    // public loadrightarmpunch: RightarmpunchService,
    // public loadrightfist: RightfistService,
    // public loadrightknifehand: RightknifehandService,
    public BP4toggler: Bp4TogglerService,
    public loadrightlegkick: RightlegkickService
  ) {}
  // collate movement function area begins

  BP4_collate_movement(rightLeg: any, leftLeg: any, Arms: any) {
    // count one
    if (
      this.BP4toggler.count_incrementer == 1 &&
      rightLeg == 'Rising kick' &&
      // leftArm == 'Middle knife block' &&
      Arms == 'Double wide down block'
    ) {
      this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      // this.BP4toggler.stanceisOpen = !this.BP4toggler.stanceisOpen;
      this.BP4toggler.toggle_correct();

      // C1 right arms movement(s)
      this.loadChoonbiserv.BP4_X_choon_bi_arms_only_up();

      // C1 right leg movement(s)
      // this.loadChoonbiserv.choon_bi_legs_only()
      this.loadrightlegkick.right_leg_rising_kick_leg_up();
      // this.loadLeftArmBlock.left_arm_middle_single_knife_block_arms_up();
      // this.loadleftknifehand.make_left_knife();

      // C1 stance arm movement(s)
      // this.loadHorse.horse_stance_legs_up();
    }
    // count two
    else if (
      this.BP4toggler.count_incrementer == 2 &&
      // stance == 'Horse' &&
      rightLeg == 'Elbow strike' &&
      Arms == 'Middle knife block'
    ) {
      this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      //this.BP4toggler.stanceisOpen = !this.BP4toggler.stanceisOpen;
      this.BP4toggler.toggle_correct();

      // C2 right arm movement(s)
      // this.loadrightknifehand.make_right_knife();
      // this.loadrightarmblock.right_arm_middle_single_knife_block_arms_up();

      // // C2 left arm movement(s)
      // this.loadleftfist.make_left_fist();
      // this.loadleftarmelbowstrike.left_arm_MandU_elbow_strike_arms_up();
    }
    // count three
    else if (
      this.BP4toggler.count_incrementer == 3 &&
      //stance == 'Horse' &&
      leftLeg == 'Down block - knife hand' &&
      Arms == 'Knife block - palm up'
    ) {
      this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      this.BP4toggler.toggle_correct();

      // C3 right arm movement(s)
      // this.loadrightknifehand.make_right_knife();
      // this.loadrightarmblock.right_arm_knife_block_palm_up_arms_up();

      // // C3 left arm movement(s)
      // this.loadleftknifehand.make_left_knife();
      // //this.loadleftLegBlock.rotateArm();
      // this.loadLeftArmBlock.left_arm_down_block_knife_hand_arms_up();

      // C3 stance movement(s)
      //this.loadlongstancefacingright.long_stance_facing_right();
    }
    // count four
    else if (
      this.BP4toggler.count_incrementer == 4 &&
      //stance == 'Long - facing left' &&
      leftLeg == 'Knife block - palm up' &&
      Arms == 'Down block - knife hand'
    ) {
      this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      this.BP4toggler.toggle_correct();

      // C4 right arm movement(s)
      // this.loadrightknifehand.make_right_knife();
      // this.loadrightarmblock.right_arm_down_block_knife_hand_arms_up();

      // // C4 left arm movement(s)
      // this.loadLeftArmBlock.left_arm_knife_block_palm_up_arms_up();
      // this.loadleftknifehand.make_left_knife();
    }
    // count five
    else if (
      this.BP4toggler.count_incrementer == 5 &&
      //stance == 'Long - facing right' &&
      leftLeg == 'Middle knife block' &&
      Arms == 'Knife block - palm up'
    ) {
      this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      this.BP4toggler.toggle_correct();

      // C5 right arm movement(s)
      // this.loadrightarmblock.right_arm_knife_block_palm_up_arms_middle();

      // // C5 left arm movement(s)
      // this.loadLeftArmBlock.return_left_hand_to_start_position();
      // this.loadleftknifehand.make_left_knife();
      // this.loadLeftArmBlock.left_arm_middle_single_knife_block_arms_up();

      // C5 stance movement(s)
    }
    // count six
    else if (
      this.BP4toggler.count_incrementer == 6 &&
      //stance == 'Long - facing left' &&
      leftLeg == 'Knife block - palm up' &&
      Arms == 'Middle knife block'
    ) {
      this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      this.BP4toggler.toggle_correct();

      // C6 right arm movement(s)
      // this.loadrightknifehand.make_right_knife();
      // this.loadrightarmblock.right_arm_middle_single_knife_block_arms_up();
      // // C6 left arm movement(s)
      // this.loadleftknifehand.make_left_knife();
      // this.loadLeftArmBlock.left_arm_knife_block_palm_up_arms_middle();

      // C6  stance movement(s)
    }
    // count seven
    else if (
      this.BP4toggler.count_incrementer == 7 &&
      //stance == 'Horse' &&
      leftLeg == 'Knife strike' &&
      Arms == 'Crossover palm down block'
    ) {
      this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      this.BP4toggler.toggle_correct();
      // C7 left arm movement(s)
      // this.loadLeftArmBlock.face_the_front_again();
      // this.loadleftarmelbowstrike.left_arm_elbow_strike_arms_down();
      // setTimeout(() => {
      //   this.loadleftarmpunch.left_arm_knife_strike_thumb_up();
      // }, 500);

      //this.loadLeftArmBlock.return_left_hand_to_start_position()
      // C7right arm movement(s)

      // this.loadrightarmblock.crossover_palm_down_right_arms_up();
      // C7 stance movement(s)
    }
    // count eight
    else if (
      this.BP4toggler.count_incrementer == 8 &&
      //stance == 'Horse' &&
      leftLeg == 'Crossover palm down block' &&
      Arms == 'Knife strike'
    ) {
      this.BP4toggler.toggle_final();
      this.BP4toggler.toggle_correct();
      this.BP4toggler.toggle();
      this.BP4toggler.changeOverTitleisOpen = false;
      // C8 left arm movement(s)
      // this.loadLeftArmBlock.return_left_hand_to_start_position();
      // this.loadLeftArmBlock.crossover_palm_down_left_arms_up();
      // // C8 right arm movement(s)
      // this.loadrightknifehand.make_right_knife();
      // this.loadrightarmelbowstrike.right_arm_elbow_strike_arms_down();
      // setTimeout(() => {
      //   this.loadrightarmpunch.right_arm_knife_strike_thumb_up();
      //   this.BP4toggler.toggle_kiop();
      // }, 1000);

      setTimeout(() => {
        this.loadChoonbiserv.choon_bi_final();
        this.BP4toggler.toggle_kiop();
      }, 4000);
    }
  }
}
