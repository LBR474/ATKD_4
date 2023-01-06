import { Injectable } from '@angular/core';

import { HorsestanceService } from './horsestance.service';
import { LeftarmblockService } from './leftarmblock.service';

@Injectable({
  providedIn: 'root',
})
export class BP2TogglerService {
  attchoonisOpen: boolean = true;
  changeOverTitleisOpen: boolean = true;
  correctisOpen: boolean = true;
  finalisOpen: boolean = false;
  finalisPaused: boolean = true;
  instructionisOpen: boolean = false;
  isOpen: boolean = true;
  isPaused: boolean = true;
  stanceisOpen: boolean = true;
  nextMovementisOpen: boolean = false;
  visibleInvisible: boolean = true;
  stancecorrectIncorrect: string = '';
  rightArmcorrectIncorrect: string = '';
  leftArmcorrectIncorrect: string = '';
  count_incrementer = 1;
  BP2_countincrementer = 1;
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
    public loadLeftArmBlock: LeftarmblockService
  ) {}

  // leftArm selection area begins
  leftArm: string = '';
  leftArmChoices: string[] = [
    'Elbow strike',
    'Down block',
    'Middle block',
    'Upper block',
    'Middle punch',
  ];
  record_leftArm(leftArm: any) {
    console.log('Left arm selection is: ' + leftArm);
    if (leftArm == 'Down block' && this.count_incrementer == 1) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Down block' && this.count_incrementer == 1) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    } else if (leftArm == 'Elbow strike' && this.count_incrementer % 2 == 0) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Elbow strike' && this.count_incrementer % 2 == 0) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count three
    else if (leftArm == 'Middle block' && this.count_incrementer == 3) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Middle block' && this.count_incrementer == 3) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count five
    else if (leftArm == 'Upper block' && this.count_incrementer == 5) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Upper block' && this.count_incrementer == 5) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count seven
    else if (leftArm == 'Middle punch' && this.count_incrementer == 7) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Middle punch' && this.count_incrementer == 7) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
  }

  // rightArm selection area begins
  rightArm: string = '';
  rightArmChoices: string[] = [
    'Elbow strike',
    'Down block',
    'Middle block',
    'Upper block',
    'Middle punch',
  ];
  record_rightArm(rightArm: any) {
    console.log('Right arm selection is: ' + rightArm);
    if (rightArm == 'Elbow strike' && this.count_incrementer % 2 == 1) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'Elbow strike' && this.count_incrementer % 2 == 1) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }
    // movement two
    else if (rightArm == 'Down block' && this.count_incrementer == 2) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'Down block' && this.count_incrementer == 2) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }
    // movement four
    else if (rightArm == 'Middle block' && this.count_incrementer == 4) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'Middle block' && this.count_incrementer == 4) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }

    // movement six
    else if (rightArm == 'Upper block' && this.count_incrementer == 6) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'Upper block' && this.count_incrementer == 6) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }

    // movement eight
    else if (rightArm == 'Middle punch' && this.count_incrementer == 8) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'Middle punch' && this.count_incrementer == 8) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }
  }

  // stance selection area begins
  stance: string = '';

  stanceChoices: string[] = ['Horse', 'Back', 'Long', 'Short'];
  record_stance(stance: any) {
    //console.log('Selected stance is: ' + stance);
    if (stance == 'Horse') {
      this.stancecorrectIncorrect = 'This stance is correct!';
    } else {
      this.stancecorrectIncorrect = 'This stance is incorrect.';
    }
  }

  // titler selection area begins
  titler: string = '';
  titler_counter: number = 0;

  titlerChoices: string[] = [
    'Basic poomsae One',
    'Basic poomsae Two',
    'Basic poomsae Three',
    'Basic poomsae Four',
  ];

  // toggle animation method area begins
  toggle() {
    this.isPaused = false;
    if (this.count_incrementer < 8) {
      setTimeout(() => {
        this.attchoonisOpen = !this.attchoonisOpen;
        this.instructionisOpen = !this.instructionisOpen;

        this.isOpen = !this.isOpen;
        this.stanceisOpen = !this.stanceisOpen;
      }, 1000);
    } else {
      setTimeout(() => {
        this.instructionisOpen = !this.instructionisOpen;
      }, 1000);

      setTimeout(() => {
        this.finalisPaused = false;
        this.finalisOpen = !this.finalisOpen;
        // this.instructionisOpen = !this.instructionisOpen;

        //this.isOpen = !this.isOpen;
      }, 4000);
    }
  }

  // correct toggle animation method area begins
  toggle_correct() {
    setTimeout(() => {
      this.correctisOpen = !this.correctisOpen;
    }, 100);

    setTimeout(() => {
      if (this.count_incrementer < 9) {
        this.correctisOpen = !this.correctisOpen;
      }
      this.isOpen = !this.isOpen;
      this.stance = '';
      this.leftArm = '';
      this.rightArm = '';
      this.count_incrementer += 1;
      if (this.count_incrementer == 1) {
        this.stanceisOpen = !this.stanceisOpen;
      }
      if (this.count_incrementer > 1) {
        this.stancecorrectIncorrect = '';
        this.leftArmcorrectIncorrect = '';
        this.rightArmcorrectIncorrect = '';
      }
    }, 2000);
  }

  // toggle animation method area begins
  toggle_final() {
   //this.finalisPaused = false;
   this.finalisOpen = !this.finalisOpen;
   this.changeOverTitleisOpen = !this.changeOverTitleisOpen
   
  }
}
