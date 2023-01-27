import { Injectable } from '@angular/core';

// import { loadmodelService } from './loadmodel.service';

import { loadmodelService } from './loadmodel.service';
import { TimerVariablesService } from './timer-variables.service';

// gsap import
import { gsap } from 'gsap';
import { LeftfistService } from './leftfist.service';
import { RightfistService } from './rightfist.service';

@Injectable({
  providedIn: 'root',
})
export class ChoonbiservService {
  constructor(
    public loadmodel: loadmodelService,
    public loadLeftFist: LeftfistService,
    public loadRightFist: RightfistService,
    public loadTimer: TimerVariablesService
  ) {}

  // // // choon bi function area begins
  choon_bi_up_arms = () => {
    if (
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.6753,
        _x: -0.1324,
        _y: 0.703,
        _z: -0.1797,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.6753,
        _x: -0.1324,
        _y: -0.703,
        _z: 0.1797,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.4058,
        _x: 0.7613,
        _y: 0.208,
        _z: -0.461,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.full_turn_duration,
        _w: 0.4058,
        _x: 0.7613,
        _y: -0.208,
        _z: 0.461,
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.9816,
        _x: 0.1898,
        _y: 0.006,
        _z: 0.0202,
        duration: this.loadTimer.full_turn_duration,
      });
      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.9816,
        _x: 0.1898,
        _y: -0.006,
        _z: -0.0202,
        duration: this.loadTimer.full_turn_duration,
        onComplete: this.choon_bi,
      });
    }
  };

  // // // choon bi function area begins
  choon_bi = () => {
    if (
      this.loadmodel.metarig &&
      // arms area
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL &&
      this.loadmodel.handR &&
      // legs area
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR
    ) {
      this.loadLeftFist.make_left_fist();
      this.loadRightFist.make_right_fist();

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.36227676,
        _x: -0.13191658,
        _y: -0.73970294,
        _z: -0.55153716,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.362277,
        _x: -0.1319167,
        _y: 0.73970276,
        _z: 0.5515371,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.5446,
        _x: -0.1669,
        _y: 0.5502,
        _z: -0.6106,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.full_turn_duration,

        _w: 0.5446,
        _x: -0.1669,
        _y: -0.5502,
        _z: 0.6106,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.945,
        _x: 0.2639,
        _y: 0.0696,
        _z: -0.1804,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.full_turn_duration,
        _w: 0.945,
        _x: 0.2639,
        _y: -0.0696,
        _z: 0.1804,
      });
      gsap.to(this.loadmodel.handR.quaternion, {
        duration: this.loadTimer.full_turn_duration,
        _w: 0.9955,
        _x: 0.0927,
        _y: -0.004,
        _z: -0.0207,
      });
      gsap.to(this.loadmodel.handL.quaternion, {
        duration: this.loadTimer.full_turn_duration,
        _w: 0.9955,
        _x: 0.0927,
        _y: 0.004,
        _z: 0.0207,
      });

      gsap.to(this.loadmodel.metarig.position, {
        duration: this.loadTimer.full_turn_duration,
        x: 0.0,
      });
    }
  };

  //
  //
  //
  //
  //
  //
  // // // choon bi final function area begins
  choon_bi_final = () => {
    if (
      this.loadmodel.metarig &&
      this.loadmodel.spine &&
      // arms area
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL &&
      this.loadmodel.handR &&
      // legs area
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.shinR
    ) {
      this.loadLeftFist.make_left_fist();
      this.loadRightFist.make_right_fist();

      gsap.to(this.loadmodel.metarig.position, {
        x: 0.0,
        y: 0.0,
        z: -0.0,
        duration: 0.5,
      });

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.36227676,
        _x: -0.13191658,
        _y: -0.73970294,
        _z: -0.55153716,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.362277,
        _x: -0.1319167,
        _y: 0.73970276,
        _z: 0.5515371,
        duration: this.loadTimer.full_turn_duration,
      });

      // gsap.to(this.loadmodel.thighL.quaternion, {
      //   _w: 0.19,
      //   _x: 0.98,
      //   _y: 0.0,
      //   _z: 0.0,
      //   duration: this.loadTimer.full_turn_duration,
      // });

      // gsap.to(this.loadmodel.thighR.quaternion, {
      //   _w: 0.19,
      //   _x: 0.98,
      //   _y: 0.0,
      //   _z: 0.0,
      //   duration: this.loadTimer.full_turn_duration,
      // });
      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.99837738,
        _x: 0.05232846,
        _y: -0.00065198,
        _z: -0.02244729,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.9983775,
        _x: 0.05232846,
        _y: 0.00065198,
        _z: 0.02244732,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        // _w: 0.4652,
        // _x: 0.1041,
        // _y: 0.5987,
        // _z: -0.6437,
        _w: 0.5446,
        _x: -0.1669,
        _y: 0.5502,
        _z: -0.6106,
        duration: this.loadTimer.full_turn_duration,
        //  onComplete: () => {
        //   console.log(this.loadmodel.upper_armL?.name + ": ")
        //   console.log(this.loadmodel.upper_armL?.quaternion)
        // }
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.full_turn_duration,

        // _w: 0.4837,
        // _x: 0.0721,
        // _y: -0.5853,
        // _z: 0.6467,
        _w: 0.5446,
        _x: -0.1669,
        _y: -0.5502,
        _z: 0.6106,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        // _w: 0.738,
        // _x: 0.303,
        // _y: 0.3777,
        // _z: -0.4699,
        _w: 0.945,
        _x: 0.2639,
        _y: 0.0696,
        _z: -0.1804,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.full_turn_duration,
        // _w: 0.738,
        // _x: 0.303,
        // _y: -0.3777,
        // _z: 0.4699,
        _w: 0.945,
        _x: 0.2639,
        _y: -0.0696,
        _z: 0.1804,
      });
      gsap.to(this.loadmodel.handR.quaternion, {
        duration: this.loadTimer.full_turn_duration,
        _w: 0.99443656,
        _x: -0.10319804,
        _y: 0.00008172,
        _z: -0.02112079,
      });
      gsap.to(this.loadmodel.handL.quaternion, {
        duration: this.loadTimer.full_turn_duration,
        _w: 0.99443656,
        _x: -0.10319802,
        _y: -0.00008172,
        _z: 0.0211207,
      });

      gsap.to(this.loadmodel.spine.position, {
        duration: this.loadTimer.full_turn_duration,
        x: 0.0,
        y: 1.1,
      });
    }
  };

  //
  //
  //
  //
  //
  // // // choon bi legs only function area begins
  choon_bi_legs_only = () => {
    if (
      this.loadmodel.spine &&
      // arms area
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL &&
      this.loadmodel.handR &&
      // legs area
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.shinR &&
      this.loadmodel.footL &&
      this.loadmodel.footR
    ) {
      // this.loadLeftFist.make_left_fist();
      // this.loadRightFist.make_right_fist();

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        // _w: 0.47,
        // _x: -0.27,
        // _y: -0.71,
        // _z: -0.45,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        // _w: 0.47,
        // _x: -0.27,
        // _y: 0.71,
        // _z: 0.45,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.20685916,
        _x: 0.97832704,
        _y: -0.00924025,
        _z: 0.00046548,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: 0.20685917,
        _x: 0.97832698,
        _y: 0.00924022,
        _z: -0.00046525,
        duration: this.loadTimer.full_turn_duration,
      });
      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.99098074,
        _x: 0.13211113,
        _y: 0.00114826,
        _z: -0.02241784,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.99098074,
        _x: 0.13211116,
        _y: -0.00114825,
        _z: 0.02241786,
        duration: this.loadTimer.full_turn_duration,
      });
      gsap.to(this.loadmodel.footL.quaternion, {
        _w: 0.79713196,
        _x: -0.60366082,
        _y: -0.00728697,
        _z: 0.01100774,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.79713196,
        _x: -0.60366076,
        _y: 0.00728697,
        _z: -0.01100774,
        duration: this.loadTimer.full_turn_duration,
      });
    }
  };

  // // // choon bi function area begins
  BP4_X_choon_bi_arms_and_legs_up = () => {
    if (
      this.loadmodel.metarig &&
      // arms area
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL &&
      this.loadmodel.handR &&
      // legs area
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.shinR
    ) {
      this.loadLeftFist.make_left_fist();
      this.loadRightFist.make_right_fist();
      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.1296,
        _x: -0.2179,
        _y: -0.963,
        _z: 0.0916,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.362277,
        _x: -0.1319167,
        _y: 0.73970276,
        _z: 0.5515371,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        // _w: 0.147,
        // _x: -0.3613,
        // _y: -0.8993,
        // _z: 0.1978,
        duration: this.loadTimer.full_turn_duration,
      });
      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.7388,
        _x: 0.6736,
        _y: -0.0147,
        _z: -0.0169,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.4785,
        _x: -0.0131,
        _y: 0.3066,
        _z: -0.8227,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.full_turn_duration,

        _w: 0.4785,
        _x: 0.011,
        _y: -0.3066,
        _z: 0.8227,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.4589,
        _x: 0.5419,
        _y: 0.0202,
        _z: -0.7038,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.full_turn_duration,

        _w: 0.4589,
        _x: 0.5419,
        _y: 0.0202,
        _z: 0.7038,
        onComplete: () => {
          this.BP4_X_choon_bi();
        },
      });
    }
  };

  //
  //
  //

  // // // choon bi function area begins
  BP4_X_choon_bi = () => {
    if (
      this.loadmodel.metarig &&
      // arms area
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL &&
      this.loadmodel.handR &&
      // legs area
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.shinR &&
      this.loadmodel.footL &&
      this.loadmodel.footR
    ) {
      // this.loadLeftFist.make_left_fist();
      // this.loadRightFist.make_right_fist();

      gsap.to(this.loadmodel.metarig.quaternion, {
        _w: 0.957,
        _x: 0.0,
        _y: 0.2901,
        _z: 0.0,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.metarig.position, {
        x: 0.2,
        y: -0.1,
        z: 0.2,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.2706,
        _x: -0.2153,
        _y: -0.9274,
        _z: -0.1427,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.2952,
        _x: 0.0314,
        _y: 0.5392,
        _z: 0.7882,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.856,
        _x: 0.5166,
        _y: -0.0112,
        _z: -0.0195,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.6383,
        _x: -0.7127,
        _y: 0.2258,
        _z: 0.1837,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.64516646,
        _x: -0.26719579,
        _y: 0.69433504,
        _z: -0.17396998,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.down_arms_timer,

        _w: 0.64516646,
        _x: -0.26719585,
        _y: -0.69433504,
        _z: 0.17396994,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.9841,
        _x: 0.1768,
        _y: 0.016,
        _z: 0.0089,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        _w: 0.9841,
        _x: 0.1768,
        _y: -0.016,
        _z: -0.0089,
      });
      gsap.to(this.loadmodel.handR.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        _w: 0.9955,
        _x: 0.0927,
        _y: -0.004,
        _z: -0.0207,
      });
      gsap.to(this.loadmodel.handL.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        _w: 0.9955,
        _x: 0.0927,
        _y: 0.004,
        _z: 0.0207,
      });
    }
  };

  // // // choon bi function area begins
  BP4_X_choon_bi_arms_only_up = () => {
    if (
      this.loadmodel.metarig &&
      // arms area
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.4785,
        _x: -0.0131,
        _y: 0.3066,
        _z: -0.8227,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.full_turn_duration,

        _w: 0.4785,
        _x: 0.011,
        _y: -0.3066,
        _z: 0.8227,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.4589,
        _x: 0.5419,
        _y: 0.0202,
        _z: -0.7038,
        duration: this.loadTimer.full_turn_duration,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.full_turn_duration,

        _w: 0.4589,
        _x: 0.5419,
        _y: 0.0202,
        _z: 0.7038,
        onComplete: () => {
          this.BP4_X_choon_bi_arms_only();
        },
      });
    }
  };

  //
  //
  //

  // // // choon bi function area begins
  BP4_X_choon_bi_arms_only = () => {
    if (
      this.loadmodel.metarig &&
      // arms area
      this.loadmodel.shoulderL &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.metarig.quaternion, {
        _w: 0.957,
        _x: 0.0,
        _y: 0.2901,
        _z: 0.0,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.metarig.position, {
        x: 0.2,
        y: -0.1,
        z: 0.2,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.64516646,
        _x: -0.26719579,
        _y: 0.69433504,
        _z: -0.17396998,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.down_arms_timer,

        _w: 0.64516646,
        _x: -0.26719585,
        _y: -0.69433504,
        _z: 0.17396994,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.9841,
        _x: 0.1768,
        _y: 0.016,
        _z: 0.0089,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        _w: 0.9841,
        _x: 0.1768,
        _y: -0.016,
        _z: -0.0089,
      });
      gsap.to(this.loadmodel.handR.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        _w: 0.9955,
        _x: 0.0927,
        _y: -0.004,
        _z: -0.0207,
      });
      gsap.to(this.loadmodel.handL.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        _w: 0.9955,
        _x: 0.0927,
        _y: 0.004,
        _z: 0.0207,
      });
    }
  };
}
