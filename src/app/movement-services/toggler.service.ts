import { Injectable } from '@angular/core';

import { HorsestanceService } from '../movement-services/horsestance.service';
import { LeftarmblockService } from './leftarmblock.service';

@Injectable({
  providedIn: 'root',
})
export class TogglerService {
  attchoonisOpen: boolean = true;
  changeOverFinalisOpen: boolean = true;
  changeOverKiopisOpen: boolean = false;
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
  poomsae_number: number = 1
  camera_z_pos = 1.2

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
    public loadLeftArmBlock: LeftarmblockService,
    
  ) {
   
  }

  // leftArm selection area begins
  leftArm: string = '';
  leftArmChoices: string[] = [
    'Elbow strike',
    'Down block',
    'Middle block',
    'Upper block',
    'Middle punch',
  ];

  BP2leftArmChoices: string[] = [
    'Elbow strike',
    'Inside block',
    'Knife strike',
    'Knife block',
    'High punch',
  ];

  BP3leftArmChoices: string[] = [
    'Elbow strike',
    'Middle knife block',
    'Down block - knife hand',
    'Knife block - palm up',
    'Knife strike',
    'Crossover palm down block',
  ];

  record_leftArm(leftArm: any) {
    // count one
    if (leftArm == 'Down block' && this.count_incrementer == 1) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm == 'Inside block' && this.count_incrementer == 1) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Down block' && this.count_incrementer == 1) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count two
    else if (leftArm == 'Elbow strike' && this.count_incrementer % 2 == 0) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Elbow strike' && this.count_incrementer % 2 == 0) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count three
    else if (
      leftArm == 'Middle block' &&
      this.count_incrementer == 3
    ) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (
      leftArm != 'Middle block' &&
      this.count_incrementer == 3
    ) {
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

  BP2_record_leftArm(leftArm: any) {
    // count one
    if (leftArm == 'Inside block' && this.count_incrementer == 1) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Inside block' && this.count_incrementer == 1) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count two
    else if (leftArm == 'Elbow strike' && this.count_incrementer % 2 == 0) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Elbow strike' && this.count_incrementer % 2 == 0) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count three
    else if (leftArm == 'Knife strike' && this.count_incrementer == 3) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Knife strike' && this.count_incrementer == 3) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count five
    else if (leftArm == 'Knife block' && this.count_incrementer == 5) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Knife block' && this.count_incrementer == 5) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count seven
    else if (leftArm == 'High punch' && this.count_incrementer == 7) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'High punch' && this.count_incrementer == 7) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
  }

  BP3_record_leftArm(leftArm: any) {
    // count one
    if (leftArm == 'Middle knife block' && this.count_incrementer == 1) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Middle knife block' && this.count_incrementer == 1) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count two
    else if (leftArm == 'Elbow strike' && this.count_incrementer == 2) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Elbow strike' && this.count_incrementer == 2) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count three
    else if (
      leftArm == 'Down block - knife hand' &&
      this.count_incrementer == 3
    ) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (
      leftArm != 'Down block - knife hand' &&
      this.count_incrementer == 3
    ) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count four
    else if (
      leftArm == 'Knife block - palm up' &&
      this.count_incrementer == 4
    ) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (
      leftArm != 'Knife block - palm up' &&
      this.count_incrementer == 4
    ) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count five
    else if (leftArm == 'Middle knife block' && this.count_incrementer == 5) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Middle knife block' && this.count_incrementer == 5) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count six
    else if (
      leftArm == 'Knife block - palm up' &&
      this.count_incrementer == 6
    ) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (
      leftArm != 'Knife block - palm up' &&
      this.count_incrementer == 6
    ) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }
    // count seven
    else if (leftArm == 'Knife strike' && this.count_incrementer == 7) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Knife strike' && this.count_incrementer == 7) {
      this.leftArmcorrectIncorrect = 'Left arm movement is incorrect.';
    }

    // count eight
    else if (leftArm == 'Crossover palm down block' && this.count_incrementer == 8) {
      this.leftArmcorrectIncorrect = 'Left arm movement is correct!';
    } else if (leftArm != 'Crossover palm down block' && this.count_incrementer == 8) {
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

  BP2rightArmChoices: string[] = [
    'Elbow strike',
    'Inside block',
    'Knife strike',
    'Knife block',
    'High punch',
  ];

  BP3rightArmChoices: string[] = [
    'Elbow strike',
    'Middle knife block',
    'Down block - knife hand',
    'Knife block - palm up',
    'Knife strike',
    'Crossover palm down block',
  ];

  record_rightArm(rightArm: any) {
    // count one
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
    } else if (rightArm == 'Inside block' && this.count_incrementer == 2) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'Inside block' && this.count_incrementer == 2) {
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

  BP2_record_rightArm(rightArm: any) {
    // count one
    if (rightArm == 'Elbow strike' && this.count_incrementer % 2 == 1) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'Elbow strike' && this.count_incrementer % 2 == 1) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }
    // movement two
    else if (rightArm == 'Inside block' && this.count_incrementer == 2) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'Inside block' && this.count_incrementer == 2) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }
    // movement four
    else if (rightArm == 'Knife strike' && this.count_incrementer == 4) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'Knife strike' && this.count_incrementer == 4) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }

    // movement six
    else if (rightArm == 'Knife block' && this.count_incrementer == 6) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'Knife block' && this.count_incrementer == 6) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }

    // movement eight
    else if (rightArm == 'High punch' && this.count_incrementer == 8) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'High punch' && this.count_incrementer == 8) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }
  }

  BP3_record_rightArm(rightArm: any) {
    // count one
    if (rightArm == 'Elbow strike' && this.count_incrementer == 1) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    }
    // else if (rightArm != 'Elbow strike' && this.count_incrementer % 2 == 1) {
    //   this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    // }
    // movement two
    else if (rightArm == 'Middle knife block' && this.count_incrementer == 2) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (
      rightArm != 'Middle knife block' &&
      this.count_incrementer == 2
    ) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }
    // movement three
    else if (
      rightArm == 'Knife block - palm up' &&
      this.count_incrementer == 3
    ) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (
      rightArm != 'Knife block - palm up' &&
      this.count_incrementer == 3
    ) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }
    // movement four
    else if (
      rightArm == 'Down block - knife hand' &&
      this.count_incrementer == 4
    ) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (
      rightArm != 'Down block - knife hand ' &&
      this.count_incrementer == 4
    ) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }

    // movement five
    else if (
      rightArm == 'Knife block - palm up' &&
      this.count_incrementer == 5
    ) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (
      rightArm != 'Knife block - palm up' &&
      this.count_incrementer == 5
    ) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }
    // movement six
    else if (rightArm == 'Middle knife block' && this.count_incrementer == 6) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (rightArm != 'Middle knife block' && this.count_incrementer == 6) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }
    // movement seven
    else if (rightArm == 'Crossover palm down block' && this.count_incrementer == 7) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (
      rightArm != 'Crossover palm down block' &&
      this.count_incrementer == 7
    ) {
      this.rightArmcorrectIncorrect = 'Right arm movement is incorrect.';
    }

    // movement eight
    else if (
      rightArm == 'Knife strike' &&
      this.count_incrementer == 8
    ) {
      this.rightArmcorrectIncorrect = 'Right arm movement is correct!';
    } else if (
      rightArm != 'Knife strike' &&
      this.count_incrementer == 8
    ) {
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

  BP2_stanceChoices: string[] = [
    'Horse',
    'Long - facing right',
    'Long - facing left',
    'Short',
  ];
  BP2_record_stance(stance: any) {
    //console.log('Selected stance is: ' + stance);
    if (this.count_incrementer == 1 && stance == 'Horse') {
      this.stancecorrectIncorrect = 'This stance is correct!';
    } else if (this.count_incrementer == 1 && stance != 'Horse') {
      this.stancecorrectIncorrect = 'This stance is incorrect.';
    }
    // count two stance
    else if (this.count_incrementer == 2 && stance == 'Horse') {
      this.stancecorrectIncorrect = 'This stance is correct!';
    } else if (this.count_incrementer == 2 && stance != 'Horse') {
      this.stancecorrectIncorrect = 'This stance is incorrect.';
    }

    // count three stance
    else if (this.count_incrementer == 3 && stance == 'Long - facing right') {
      this.stancecorrectIncorrect = 'This stance is correct!';
    } else if (this.count_incrementer == 3 && stance != 'Long - facing right') {
      this.stancecorrectIncorrect = 'This stance is incorrect.';
    }

    // count four stance
    else if (this.count_incrementer == 4 && stance == 'Long - facing left') {
      this.stancecorrectIncorrect = 'This stance is correct!';
    } else if (this.count_incrementer == 4 && stance != 'Long - facing left') {
      this.stancecorrectIncorrect = 'This stance is incorrect.';
    }

    // count five stance
    else if (this.count_incrementer == 5 && stance == 'Long - facing right') {
      this.stancecorrectIncorrect = 'This stance is correct!';
    } else if (this.count_incrementer == 5 && stance != 'Long - facing right') {
      this.stancecorrectIncorrect = 'This stance is incorrect.';
    }

    // count six stance
    else if (this.count_incrementer == 6 && stance == 'Long - facing left') {
      this.stancecorrectIncorrect = 'This stance is correct!';
    } else if (this.count_incrementer == 6 && stance != 'Long - facing left') {
      this.stancecorrectIncorrect = 'This stance is incorrect.';
    }
    // count seven stance
    else if (this.count_incrementer == 7 && stance == 'Horse') {
      this.stancecorrectIncorrect = 'This stance is correct!';
    } else if (this.count_incrementer == 7 && stance != 'Horse') {
      this.stancecorrectIncorrect = 'This stance is incorrect.';
    }
    // count eight stance
    else if (this.count_incrementer == 8 && stance == 'Horse') {
      this.stancecorrectIncorrect = 'This stance is correct!';
    } else if (this.count_incrementer == 8 && stance != 'Horse') {
      this.stancecorrectIncorrect = 'This stance is incorrect.';
    }
  }

  BP3_stanceChoices: string[] = ['Horse', 'Back', 'Long', 'Short'];
  BP3_record_stance(stance: any) {
    //console.log('Selected stance is: ' + stance);
    if (stance == 'Horse') {
      this.stancecorrectIncorrect = 'This stance is correct!';
    } else {
      this.stancecorrectIncorrect = 'This stance is incorrect.';
    }
  }

  // titler selection area begins
  titler: string = '';
  titler_counter: number = 1;

  titlerChoices: string[] = [
    'Basic poomsae zero',
    'Basic poomsae one',
    'Basic poomsae two',
    'Basic poomsae three',
    'Basic poomsae four',
  ];

  toggle_new_poomsae_open() {
    //this.attchoonisOpen = !this.attchoonisOpen;
    // if (!this.changeOverTitleisOpen) {
    //   this.changeOverTitleisOpen;
    // }
    this.attchoonisOpen = !this.attchoonisOpen;

    this.changeOverTitleisOpen = !this.changeOverTitleisOpen;
    this.changeOverFinalisOpen = !this.changeOverFinalisOpen;
  }
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

      // setTimeout(() => {
      //   this.finalisPaused = false;
      //   this.finalisOpen = !this.finalisOpen;
      //   // this.instructionisOpen = !this.instructionisOpen;

      //   //this.isOpen = !this.isOpen;
      // }, 4000);
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
      // if (this.count_incrementer == 1) {
      //   this.stanceisOpen = !this.stanceisOpen;
      // }
      if (this.count_incrementer > 1) {
        this.stancecorrectIncorrect = '';
        this.leftArmcorrectIncorrect = '';
        this.rightArmcorrectIncorrect = '';
      }
    }, 2000);
  }

  // toggle animation method area begins
  toggle_final() {
    this.isPaused = false;
    this.finalisOpen = !this.finalisOpen;
    //this.stanceisOpen = !this.stanceisOpen;
    //this.attchoonisOpen = !this.attchoonisOpen
    //this.changeOverTitleisOpen = !this.changeOverTitleisOpen;
  }
  toggle_kiop () {
    this.changeOverKiopisOpen = !this.changeOverKiopisOpen;
  }
}
