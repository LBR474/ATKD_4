import { Injectable } from '@angular/core';

import { AttentionService } from './attention.service';
import { Bp4TogglerService } from './bp4-toggler.service';
import { RightlegkickService } from './rightlegkick.service';
import { LeftlegkickService } from './leftlegkick.service';

import { ChoonbiservService } from './choonbiserv.service';
import { TimerVariablesService } from './timer-variables.service';
@Injectable({
  providedIn: 'root',
})
export class Bp4collatemovementService {
  attchoonisOpen: boolean = true;

  constructor(
    public loadAttention: AttentionService,
    public loadChoonbiserv: ChoonbiservService,
    public BP4toggler: Bp4TogglerService,
    public loadleftlegkick: LeftlegkickService,
    public loadrightlegkick: RightlegkickService,
    public timerVar: TimerVariablesService
  ) {}

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  // collate movement function area begins

  BP4_collate_movement(rightLeg: any, leftLeg: any, Arms: any) {
    // count one
    if (
      this.BP4toggler.count_incrementer == 1 &&
      rightLeg == 'Rising kick' &&
      Arms == 'Double wide down block'
    ) {
      this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      this.BP4toggler.ArmsisOpen = !this.BP4toggler.ArmsisOpen;

      // this.BP4toggler.stanceisOpen = !this.BP4toggler.stanceisOpen;
      this.BP4toggler.toggle_correct();

      // C1 right arms movement(s)
      setTimeout(() => {
      this.loadleftlegkick.Double_wide_arms_up();  
      }, 500);
      

      // C1 right leg movement(s)

      this.loadrightlegkick.right_leg_rising_kick_leg_up();
    }
    // count two
    else if (
      this.BP4toggler.count_incrementer == 2 &&
      rightLeg == 'Snap kick'
    ) {
      this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      setTimeout(() => {
        this.BP4toggler.leftLegisOpen = !this.BP4toggler.leftLegisOpen;
      }, 1000);

      this.BP4toggler.toggle_correct();

      // C2 right arms movement(s)
      //this.loadChoonbiserv.BP4_X_choon_bi_arms_only_up();

      // C2 right leg movement(s)

      this.loadrightlegkick.right_leg_snap_kick_leg_up();
    }
    // count three
    else if (
      this.BP4toggler.count_incrementer == 3 &&
      leftLeg == 'Rising kick'
    ) {
      //this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      this.BP4toggler.leftLegisOpen = !this.BP4toggler.leftLegisOpen;
      this.BP4toggler.toggle_correct();

      // C3 right arm movement(s)
      // this.loadrightknifehand.make_right_knife();
      // this.loadrightarmblock.right_arm_knife_block_palm_up_arms_up();

      // // C3 left leg movement(s)
      this.loadleftlegkick.left_leg_rising_kick_leg_up();
    }
    // count four
    else if (
      this.BP4toggler.count_incrementer == 4 &&
      leftLeg == 'Snap kick with kiop'
    ) {
      this.BP4toggler.leftLegisOpen = !this.BP4toggler.leftLegisOpen;

      this.BP4toggler.toggle_correct();
      setTimeout(() => {
        this.timerVar.min_distance = 1.7;
      }, 1000);

      // // C4 left leg movement(s)
      this.loadleftlegkick.left_leg_snap_kick_leg_up();
    }
    // count five
    else if (
      this.BP4toggler.count_incrementer == 5 &&
      //stance == 'Long - facing right' &&
      leftLeg == 'Rising kick'
    ) {
      this.BP4toggler.leftLegisOpen = !this.BP4toggler.leftLegisOpen;

      this.BP4toggler.toggle_correct();

      // // C5 left leg movement(s)
      this.loadleftlegkick.left_leg_rising_kick_leg_up();
    }
    // count six
    else if (
      this.BP4toggler.count_incrementer == 6 &&
      //stance == 'Long - facing left' &&
      leftLeg == 'Snap kick'
    ) {
      setTimeout(() => {
        this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      }, 2000);

      this.BP4toggler.toggle_correct();

      // // C6 left leg movement(s)
      this.loadleftlegkick.left_leg_snap_kick_leg_up();
      // C6  arms movement(s)
      //this.loadleftlegkick.Double_wide_arms_up();
    }
    // count seven
    else if (
      this.BP4toggler.count_incrementer == 7 &&
      //stance == 'Horse' &&
      rightLeg == 'Rising kick'
    ) {
      setTimeout(() => {
        this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      }, 1000);

      this.BP4toggler.toggle_correct();
      // C7 right leg movement(s)
      this.loadrightlegkick.right_leg_rising_kick_leg_up();
    }
    // count eight
    else if (
      this.BP4toggler.count_incrementer == 8 &&
      rightLeg == 'Snap kick with kiop'
    ) {
      //this.BP4toggler.isOpen = !this.BP4toggler.isOpen;
      setTimeout(() => {
        this.BP4toggler.toggle_final();
      }, 2000);

      this.BP4toggler.toggle_correct();
      this.BP4toggler.toggle();

      // C8 right leg movement(s)
      this.loadrightlegkick.right_leg_snap_kick_leg_up();

      setTimeout(() => {
        this.loadChoonbiserv.choon_bi_final();
        //this.BP4toggler.toggle_kiop_left();
      }, 4000);
    }
  }
}
