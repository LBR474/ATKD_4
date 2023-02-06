import { Injectable } from '@angular/core';

import { HorsestanceService } from '../movement-services/horsestance.service';

@Injectable({
  providedIn: 'root',
})
export class Bp4TogglerService {
  ArmsisOpen: boolean = true;
  leftLegisOpen: boolean = true;
  ArmsisPaused: boolean = true;
  attchoonisOpen: boolean = true;
  changeOverFinalisOpen: boolean = true;
  KiopLeftisOpen: boolean = false;
  KiopRightisOpen: boolean = false;
  changeOverTitleisOpen: boolean = true;
  correctisOpen: boolean = true;
  // finalisOpen: boolean = false;
  finalisPaused: boolean = true;
  instructionisOpen: boolean = false;
  isOpen: boolean = true;
  isPaused: boolean = true;
  visibleInvisible: boolean = true;
  rightLegcorrectIncorrect: string = '';
  ArmscorrectIncorrect: string = '';
  leftLegcorrectIncorrect: string = '';
  count_incrementer = 1;
  poomsae_number: number = 1;

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

  constructor(public loadHorse: HorsestanceService) {}

  // leftLeg selection area begins
  leftLeg: string = '';

  BP4leftLegChoices: string[] = [
    'Rising kick',
    'Snap kick',
    'Snap kick with kiop',
  ];

  BP4_record_leftLeg(leftLeg: any) {
    if (leftLeg == 'Rising kick' && this.count_incrementer == 3) {
      this.leftLegcorrectIncorrect = 'Kick is correct!';
    } else if (leftLeg != 'Rising kick' && this.count_incrementer == 3) {
      this.leftLegcorrectIncorrect = 'Kick is incorrect.';
    }
    // count four
    else if (leftLeg == 'Snap kick with kiop' && this.count_incrementer == 4) {
      this.leftLegcorrectIncorrect = 'Kick is correct!';
    } else if (
      leftLeg != 'Snap kick with kiop' &&
      this.count_incrementer == 4
    ) {
      this.leftLegcorrectIncorrect = 'Kick is incorrect.';
    }
    // count five
    else if (leftLeg == 'Rising kick' && this.count_incrementer == 5) {
      this.leftLegcorrectIncorrect = 'Kick is correct!';
    } else if (leftLeg != 'Rising kick' && this.count_incrementer == 5) {
      this.leftLegcorrectIncorrect = 'Kick is incorrect.';
    }
    // count six
    else if (leftLeg == 'Snap kick' && this.count_incrementer == 6) {
      this.leftLegcorrectIncorrect = 'Kick is correct!';
    } else if (leftLeg != 'Snap kick' && this.count_incrementer == 6) {
      this.leftLegcorrectIncorrect = 'Kick is incorrect.';
    }
  }

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
  // Arms selection area begins
  Arms: string = '';
  BP4ArmsChoices: string[] = ['Double wide down block'];

  BP4_record_Arms(Arms: any) {
    // count one
    if (Arms == 'Double wide down block' && this.count_incrementer == 1) {
      this.ArmscorrectIncorrect = 'Arms movement is correct!';
    } else if (
      Arms != 'Double wide down block' &&
      this.count_incrementer == 1
    ) {
      this.ArmscorrectIncorrect = 'Arms movement is incorrect.';
    }
  }

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
      this.rightLegcorrectIncorrect = 'Kick is correct!';
    } else if (this.count_incrementer == 2 && rightLeg != 'Snap kick') {
      this.rightLegcorrectIncorrect = 'Kick is incorrect.';
      //console.log(this.count_incrementer);
    }

    // count seven rightLeg
    else if (this.count_incrementer == 7 && rightLeg == 'Rising kick') {
      this.rightLegcorrectIncorrect = 'Kick is correct!';
    } else if (this.count_incrementer == 7 && rightLeg != 'Rising kick') {
      this.rightLegcorrectIncorrect = 'Kick is incorrect.';
    }

    // count eight rightLeg
    else if (this.count_incrementer == 8 && rightLeg == 'Snap kick with kiop') {
      this.rightLegcorrectIncorrect = 'Kick is correct!';
    } else if (
      this.count_incrementer == 8 &&
      rightLeg != 'Snap kick with kiop'
    ) {
      this.rightLegcorrectIncorrect = 'Kick is incorrect.';
    }
  }

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
  // toggle animation method area begins
  toggle() {
    this.isPaused = false;
    this.ArmsisPaused = false;
    if (this.count_incrementer < 8) {
      setTimeout(() => {
        this.attchoonisOpen = !this.attchoonisOpen;
        this.instructionisOpen = !this.instructionisOpen;
        if (this.count_incrementer < 2) {
          this.ArmsisOpen = !this.ArmsisOpen;
        }
        if (this.count_incrementer >= 3 && this.count_incrementer <= 6) {
          this.leftLegisOpen = !this.leftLegisOpen;
        }

        if (this.count_incrementer < 2 || this.count_incrementer > 6) {
          this.isOpen = !this.isOpen;
        }
      }, 500);
    } else {
      setTimeout(() => {
        this.instructionisOpen = !this.instructionisOpen;
      }, 1000);
    }
  }

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
  // correct toggle animation method area begins
  toggle_correct() {
    setTimeout(() => {
      this.correctisOpen = !this.correctisOpen;
    }, 100);

    setTimeout(() => {
      if (this.count_incrementer < 9) {
        this.correctisOpen = !this.correctisOpen;
      }
      if (this.count_incrementer >= 3 && this.count_incrementer <= 6) {
        this.leftLegisOpen = !this.leftLegisOpen;
      }
     
      if (this.count_incrementer < 2 || this.count_incrementer > 6
        
        ) {
         setTimeout(() => {
           this.isOpen = !this.isOpen;
         }, 500);
       
      }

      this.rightLeg = '';
      this.leftLeg = '';
      this.Arms = '';
      this.count_incrementer += 1;
      //console.log(this.count_incrementer);
      if (this.count_incrementer > 1) {
        this.rightLegcorrectIncorrect = '';
        this.leftLegcorrectIncorrect = '';
        this.ArmscorrectIncorrect = '';
      }
    }, 2000);
  }

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
  // toggle animation method area begins
  toggle_final() {
    this.isPaused = false;
    this.changeOverTitleisOpen = false;
    this.KiopLeftisOpen = !this.KiopLeftisOpen
  }
  toggle_kiop_left() {
    this.KiopLeftisOpen = !this.KiopLeftisOpen;
  }
  toggle_kiop_right() {
    this.KiopRightisOpen = !this.KiopRightisOpen;
  }
}
