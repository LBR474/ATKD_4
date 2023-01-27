import { Injectable } from '@angular/core';

import { HorsestanceService } from '../movement-services/horsestance.service';
// import { LeftarmblockService } from './leftarmblock.service';

@Injectable({
  providedIn: 'root',
})
export class Bp4TogglerService {
  ArmsisOpen: boolean = true;
  ArmsisPaused: boolean = true;
  attchoonisOpen: boolean = true;
  changeOverFinalisOpen: boolean = true;
  changeOverKiopisOpen: boolean = false;
  changeOverTitleisOpen: boolean = true;
  correctisOpen: boolean = true;
  // finalisOpen: boolean = false;
  finalisPaused: boolean = true;
  instructionisOpen: boolean = false;
  isOpen: boolean = true;
  isPaused: boolean = true;
  // stanceisOpen: boolean = true;
  // nextMovementisOpen: boolean = false;
  visibleInvisible: boolean = true;
  rightLegcorrectIncorrect: string = '';
  ArmscorrectIncorrect: string = '';
  leftLegcorrectIncorrect: string = '';
  count_incrementer = 1;
  poomsae_number: number = 1;
  // camera_z_pos = 1.2;

  count_number = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  constructor(
    public loadHorse: HorsestanceService,
    // public loadLeftArmBlock: LeftarmblockService
  ) {}

  // leftLeg selection area begins
  leftLeg: string = '';

  BP4leftLegChoices: string[] = [
    'Rising kick',
    'Snap kick',
    'Snap kick with kiop',
  ];

  BP4_record_leftLeg(leftLeg: any) {
    // count one
    // if (leftLeg == 'Inside block' && this.count_incrementer == 1) {
    //   this.leftLegcorrectIncorrect = 'Kick is correct!';
    // } else if (leftLeg != 'Inside block' && this.count_incrementer == 1) {
    //   this.leftLegcorrectIncorrect = 'Kick is incorrect.';
    // }
    // // count two
    // else if (leftLeg == 'Elbow strike' && this.count_incrementer % 2 == 0) {
    //   this.leftLegcorrectIncorrect = 'Kick is correct!';
    // } else if (leftLeg != 'Elbow strike' && this.count_incrementer % 2 == 0) {
    //   this.leftLegcorrectIncorrect = 'Kick is incorrect.';
    // }
    // count three
    // else
   if (leftLeg == 'Knife strike' && this.count_incrementer == 3) {
      this.leftLegcorrectIncorrect = 'Kick is correct!';
    } else if (leftLeg != 'Knife strike' && this.count_incrementer == 3) {
      this.leftLegcorrectIncorrect = 'Kick is incorrect.';
    }
    // count five
    else if (leftLeg == 'Knife block' && this.count_incrementer == 5) {
      this.leftLegcorrectIncorrect = 'Kick is correct!';
    } else if (leftLeg != 'Knife block' && this.count_incrementer == 5) {
      this.leftLegcorrectIncorrect = 'Kick is incorrect.';
    }
    // count seven
    else if (leftLeg == 'High punch' && this.count_incrementer == 7) {
      this.leftLegcorrectIncorrect = 'Kick is correct!';
    } else if (leftLeg != 'High punch' && this.count_incrementer == 7) {
      this.leftLegcorrectIncorrect = 'Kick is incorrect.';
    }
  }

  // Arms selection area begins
  Arms: string = '';
  BP4ArmsChoices: string[] = ['Double wide down block'];

  BP4_record_Arms(Arms: any) {
    // count one
    if (Arms == 'Double wide down block' && this.count_incrementer % 2 == 1) {
      this.ArmscorrectIncorrect = 'Arms movement is correct!';
    } else if (
      Arms != 'Double wide down block' &&
      this.count_incrementer % 2 == 1
    ) {
      this.ArmscorrectIncorrect = 'Arms movement is incorrect.';
    }
    // // movement two
    // else if (Arms == 'Inside block' && this.count_incrementer == 2) {
    //   this.ArmscorrectIncorrect = 'Arms movement is correct!';
    // } else if (Arms != 'Inside block' && this.count_incrementer == 2) {
    //   this.ArmscorrectIncorrect = 'Arms movement is incorrect.';
    // }
    // // movement four
    // else if (Arms == 'Knife strike' && this.count_incrementer == 4) {
    //   this.ArmscorrectIncorrect = 'Arms movement is correct!';
    // } else if (Arms != 'Knife strike' && this.count_incrementer == 4) {
    //   this.ArmscorrectIncorrect = 'Arms movement is incorrect.';
    // }

    // // movement six
    // else if (Arms == 'Knife block' && this.count_incrementer == 6) {
    //   this.ArmscorrectIncorrect = 'Arms movement is correct!';
    // } else if (Arms != 'Knife block' && this.count_incrementer == 6) {
    //   this.ArmscorrectIncorrect = 'Arms movement is incorrect.';
    // }

    // // movement eight
    // else if (Arms == 'High punch' && this.count_incrementer == 8) {
    //   this.ArmscorrectIncorrect = 'Arms movement is correct!';
    // } else if (Arms != 'High punch' && this.count_incrementer == 8) {
    //   this.ArmscorrectIncorrect = 'Arms movement is incorrect.';
    // }
  }

  // rightLeg selection area begins
  rightLeg: string = '';

  BP4_rightLegChoices: string[] = [
    'Rising kick',
    'Snap kick',
    'Snap kick with kiop',
  ];
  BP4_record_rightLeg(rightLeg: any) {
    //console.log('Selected rightLeg is: ' + rightLeg);
    if (this.count_incrementer == 1 && rightLeg == 'Rising kick') {
      this.rightLegcorrectIncorrect = 'Kick is correct!';
    } else if (this.count_incrementer == 1 && rightLeg != 'Rising kick') {
      this.rightLegcorrectIncorrect = 'Kick is incorrect.';
    }
    // count two rightLeg
    else if (this.count_incrementer == 2 && rightLeg == 'Snap kick') {
      this.rightLegcorrectIncorrect = 'This rightLeg is correct!';
    } else if (this.count_incrementer == 2 && rightLeg != 'Snap kick') {
      this.rightLegcorrectIncorrect = 'This rightLeg is incorrect.';
    }

    // // count three rightLeg
    // else if (this.count_incrementer == 3 && rightLeg == 'Long - facing right') {
    //   this.rightLegcorrectIncorrect = 'This rightLeg is correct!';
    // } else if (
    //   this.count_incrementer == 3 &&
    //   rightLeg != 'Long - facing right'
    // ) {
    //   this.rightLegcorrectIncorrect = 'This rightLeg is incorrect.';
    // }

    // // count four rightLeg
    // else if (this.count_incrementer == 4 && rightLeg == 'Long - facing left') {
    //   this.rightLegcorrectIncorrect = 'This rightLeg is correct!';
    // } else if (
    //   this.count_incrementer == 4 &&
    //   rightLeg != 'Long - facing left'
    // ) {
    //   this.rightLegcorrectIncorrect = 'This rightLeg is incorrect.';
    // }

    // count five rightLeg
    else if (this.count_incrementer == 5 && rightLeg == 'Long - facing right') {
      this.rightLegcorrectIncorrect = 'This rightLeg is correct!';
    } else if (
      this.count_incrementer == 5 &&
      rightLeg != 'Long - facing right'
    ) {
      this.rightLegcorrectIncorrect = 'This rightLeg is incorrect.';
    }

    // count six rightLeg
    else if (this.count_incrementer == 6 && rightLeg == 'Long - facing left') {
      this.rightLegcorrectIncorrect = 'This rightLeg is correct!';
    } else if (
      this.count_incrementer == 6 &&
      rightLeg != 'Long - facing left'
    ) {
      this.rightLegcorrectIncorrect = 'This rightLeg is incorrect.';
    }
    // // count seven rightLeg
    // else if (this.count_incrementer == 7 && rightLeg == 'Horse') {
    //   this.rightLegcorrectIncorrect = 'This rightLeg is correct!';
    // } else if (this.count_incrementer == 7 && rightLeg != 'Horse') {
    //   this.rightLegcorrectIncorrect = 'This rightLeg is incorrect.';
    // }
    // // count eight rightLeg
    // else if (this.count_incrementer == 8 && rightLeg == 'Horse') {
    //   this.rightLegcorrectIncorrect = 'This rightLeg is correct!';
    // } else if (this.count_incrementer == 8 && rightLeg != 'Horse') {
    //   this.rightLegcorrectIncorrect = 'This rightLeg is incorrect.';
    // }
  }

  // toggle animation method area begins
  toggle() {
    this.isPaused = false;
    this.ArmsisPaused = false;
    if (this.count_incrementer < 8) {
      setTimeout(() => {
        this.attchoonisOpen = !this.attchoonisOpen;
        this.instructionisOpen = !this.instructionisOpen;
        this.ArmsisOpen = !this.ArmsisOpen;
        this.isOpen = !this.isOpen;
        // this.stanceisOpen = !this.stanceisOpen;
      }, 1000);
    } else {
      setTimeout(() => {
        this.instructionisOpen = !this.instructionisOpen;
      }, 1000);
    }
  }

  // correct toggle animation method area begins
  toggle_correct() {
    setTimeout(() => {
      this.correctisOpen = !this.correctisOpen;
    }, 100);
    setTimeout(() => {
      this.ArmsisPaused = true;
    }, 1000);
    
    setTimeout(() => {
      if (this.count_incrementer < 9) {
        this.correctisOpen = !this.correctisOpen;
      }

      // this.ArmsisOpen = !this.ArmsisOpen

      this.isOpen = !this.isOpen;
      this.rightLeg = '';
      this.leftLeg = '';
      this.Arms = '';
      this.count_incrementer += 1;

      if (this.count_incrementer > 1) {
        this.rightLegcorrectIncorrect = '';
        this.leftLegcorrectIncorrect = '';
        this.ArmscorrectIncorrect = '';
      }
    }, 2000);
  }

  // toggle animation method area begins
  toggle_final() {
    this.isPaused = false;
    // this.finalisOpen = !this.finalisOpen;
    //this.rightLegisOpen = !this.rightLegisOpen;
    //this.attchoonisOpen = !this.attchoonisOpen
    //this.changeOverTitleisOpen = !this.changeOverTitleisOpen;
  }
  toggle_kiop() {
    this.changeOverKiopisOpen = !this.changeOverKiopisOpen;
  }
}
