import { Injectable } from '@angular/core';

// movent services imports
import { Bp4TogglerService } from './bp4-toggler.service';
import { ChoonbiservService } from './choonbiserv.service';
import { loadmodelService } from './loadmodel.service';

import { TimerVariablesService } from './timer-variables.service';

// gsap import
import { gsap } from 'gsap';

// three imports
import * as THREE from 'three';



@Injectable({
  providedIn: 'root',
})
export class LeftlegkickService {
  constructor(
    public loadBP4toggler: Bp4TogglerService,
    public loadchoonbiserv: ChoonbiservService,
    public loadmodel: loadmodelService,
    
    public loadTimer: TimerVariablesService
  ) {}

  left_leg_rising_kick_leg_up() {
    if (
      this.loadmodel.metarig &&
      this.loadmodel.spine &&
      this.loadmodel.spine006 &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinR &&
      this.loadmodel.footL &&
      this.loadmodel.footR
    ) {
     
       
     
      
      if (this.loadBP4toggler.count_incrementer == 3) {
        gsap.to(this.loadmodel.metarig.position, {
          x: '+=0.1',
          y: '+=0.1',
          z: '+=0.1',
          duration: this.loadTimer.down_arms_timer,
        });
      } else if (this.loadBP4toggler.count_incrementer == 5) {
        gsap.to(this.loadmodel.metarig.position, {
          x: '-=0.1',
          y: '+=0.1',
          z: '+=0.1',
          duration: this.loadTimer.down_arms_timer,
        });
      }

      // gsap.to(this.loadmodel.spine.quaternion, {
      //   _w: 0.973,
      //   _x: 0.1234,
      //   _y: -0.1934,
      //   _z: 0.0245,
      //   duration: this.loadTimer.down_arms_timer,
      // });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.362277,
        _x: -0.1319167,
        _y: 0.73970276,
        _z: 0.5515371,
        duration: this.loadTimer.up_arms_timer,
      });
      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.9983775,
        _x: 0.05232846,
        _y: 0.00065198,
        _z: 0.02244732,
        duration: this.loadTimer.up_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.2523,
        _x: -0.2454,
        _y: -0.9214,
        _z: -0.1648,
        duration: this.loadTimer.up_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: -0.147,
        _x: -0.3613,
        _y: -0.8993,
        _z: 0.1978,
        duration: this.loadTimer.up_arms_timer,
        //duration: 2,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.9674,
        _x: -0.2529,
        _y: 0.0025,
        _z: -0.013,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.footL.quaternion, {
        _w: 0.7971,
        _x: -0.6037,
        _y: -0.0073,
        _z: 0.011,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.Double_wide_arms_up();
          this.left_leg_rising_kick_leg_down();
        },
      });
    }
  }

  left_leg_rising_kick_leg_down() {
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
      this.loadmodel.shinR &&
      this.loadmodel.footL &&
      this.loadmodel.footR
    ) {
      // gsap.to(this.loadmodel.spine.quaternion, {
      //   _w: 0.99205315,
      //   _x: 0.12581962,
      //   _y: 0.00000012,
      //   _z: 0.00000001,
      //   duration: this.loadTimer.down_arms_timer,
      // });

      if (this.loadBP4toggler.count_incrementer == 3) {
        gsap.to(this.loadmodel.metarig.position, {
          x: '-=0.1',
          y: '-=0.1',
          z: '-=0.1',
          duration: this.loadTimer.down_arms_timer,
        });
      } else {
        gsap.to(this.loadmodel.metarig.position, {
          x: '+=0.1',
          y: '-=0.1',
          z: '-=0.1',
          duration: this.loadTimer.down_arms_timer,
        });
      }

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.35142573,
        _x: 0.03810945,
        _y: -0.50698086,
        _z: -0.7861413,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.25233495,
        _x: -0.24536507,
        _y: 0.92138977,
        _z: 0.16481482,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.0784,
        _x: -0.3821,
        _y: -0.6381,
        _z: 0.6639,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.90244097,
        _x: 0.43022807,
        _y: 0.00918849,
        _z: 0.02049095,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.7971319,
        _x: -0.60366088,
        _y: -0.00728697,
        _z: 0.01100774,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.footL.quaternion, {
        _w: 0.7971319,
        _x: -0.60366088,
        _y: -0.00728697,
        _z: 0.01100774,
        duration: this.loadTimer.down_arms_timer,
      });
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
  //
  //
  //
  //
  //

  left_leg_snap_kick_leg_up() {
    if (
      this.loadmodel.metarig &&
      this.loadmodel.spine &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinR &&
      this.loadmodel.shinL &&
      this.loadmodel.footL &&
      this.loadmodel.footR
    ) {
      if (this.loadBP4toggler.count_incrementer == 4) {
        gsap.to(this.loadmodel.metarig.position, {
          x: '+=0.1',
          y: '+=0.1',
          z: '+=0.1',
          duration: this.loadTimer.down_arms_timer,
        });
      } else if (this.loadBP4toggler.count_incrementer == 6) {
        gsap.to(this.loadmodel.metarig.position, {
          x: '-=0.1',
          y: '+=0.1',
          z: '+=0.1',
          duration: this.loadTimer.down_arms_timer,
        });
      }

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.36227676,
        _x: -0.13191658,
        _y: 0.73970294,
        _z: 0.55153716,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.99837738,
        _x: 0.05232846,
        _y: -0.00065198,
        _z: -0.02244729,
        duration: this.loadTimer.down_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.237,
        _x: -0.1722,
        _y: -0.9138,
        _z: -0.2812,
        duration: this.loadTimer.down_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: -0.1702,
        _x: -0.2539,
        _y: -0.9438,
        _z: 0.126,
        duration: this.loadTimer.down_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.3343,
        _x: 0.9422,
        _y: -0.021,
        _z: -0.008,
        duration: this.loadTimer.down_arms_timer,
        //duration: 2,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.9674,
        _x: -0.2529,
        _y: -0.0025,
        _z: 0.013,
        duration: this.loadTimer.down_arms_timer,
        onComplete: () => {
          setTimeout(() => {
            if (this.loadBP4toggler.leftLeg == 'Snap kick with kiop') {
              this.loadBP4toggler.toggle_kiop_right();
            }
          }, 250);
        },
      });

      gsap.to(this.loadmodel.footL.quaternion, {
        _w: 0.9981,
        _x: -0.0594,
        _y: -0.0001,
        _z: -0.0132,
        duration: this.loadTimer.down_arms_timer,
        onComplete: () => {
          this.left_leg_snap_kick_middle();
        },
      });
    }
  }
  //
  left_leg_snap_kick_middle() {
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
      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.9983775,
        _x: 0.05232846,
        _y: 0.00065198,
        _z: 0.02244732,
        duration: this.loadTimer.down_arms_timer,

        onComplete: () => {
          setTimeout(() => {
            this.left_leg_snap_fold_back();
          }, 500);
        },
      });
    }
  }
  left_leg_snap_fold_back() {
    if (this.loadmodel.shinL && this.loadmodel.spine006) {
      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.3343,
        _x: 0.9422,
        _y: -0.021,
        _z: -0.008,
        duration: this.loadTimer.down_arms_timer,
        onComplete: () => {
          // console.log(this.loadmodel.spine006?.position.y)
          setTimeout(() => {
            if (this.loadBP4toggler.leftLeg == 'Snap kick with kiop') {
              this.loadBP4toggler.toggle_kiop_right();
            }
            this.left_leg_snap_kick_leg_down();
          }, 500);
        },
      });
    }
  }

  left_leg_snap_kick_leg_down() {
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
        // _w: 0.957,
        // _x: 0.0,
        // _y: 0.2901,
        // _z: 0.0,
        duration: this.loadTimer.down_arms_timer,
      });
      if (this.loadBP4toggler.count_incrementer == 4) {
        gsap.to(this.loadmodel.metarig.position, {
          x: '-=0.1',
          y: '-=0.1',
          z: '-=0.1',
          duration: this.loadTimer.down_arms_timer,
        });
      } else {
        gsap.to(this.loadmodel.metarig.position, {
          x: '+=0.1',
          y: '-=0.1',
          z: '-=0.1',
          duration: this.loadTimer.down_arms_timer,
        });
      }

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.362277,
        _x: -0.1319167,
        _y: 0.73970276,
        _z: 0.5515371,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.36227676,
        _x: -0.13191658,
        _y: -0.73970294,
        _z: -0.55153716,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.078384,
        _x: -0.38211036,
        _y: -0.63807213,
        _z: 0.66386116,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.9983775,
        _x: 0.05232846,
        _y: 0.00065198,
        _z: 0.02244732,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.99837738,
        _x: 0.05232846,
        _y: -0.00065198,
        _z: -0.02244729,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.79713196,
        _x: -0.60366082,
        _y: 0.00728697,
        _z: -0.01100774,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.footL.quaternion, {
        _w: 0.7971319,
        _x: -0.60366088,
        _y: -0.00728697,
        _z: 0.01100774,
        duration: this.loadTimer.down_arms_timer,
        onComplete: () => {
          // this.left_leg_snap_kick_change_stance();
          if (this.loadBP4toggler.count_incrementer < 6) {
            this.left_leg_snap_kick_change_stance();
          } else {
            this.left_leg_change_stance_pelvis_only()
            this.Double_wide_arms_up();
          }
        },
      });
    }
  }

  left_leg_snap_kick_change_stance() {
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
      gsap.to(this.loadmodel.metarig.position, {
        // x: '-=0.1',
        // // y: -0.1,
        // z: '+=0.1',
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.metarig.quaternion, {
        _w: 0.9808047,
        _x: 0.0,
        _y: -0.19499269,
        _z: 0.0,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.5355,
        _x: -0.0513,
        _y: -0.4817,
        _z: -0.6918,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.8538,
        _x: 0.5151,
        _y: -0.0305,
        _z: -0.0693,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.78397719,
        _x: -0.59065246,
        _y: 0.12485654,
        _z: 0.14463847,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.2176,
        _x: -0.2097,
        _y: 0.9487,
        _z: 0.0933,
        duration: this.loadTimer.down_arms_timer,
        onComplete: () => {
          this.Double_wide_arms_up();
        },
      });
    }
  }



  left_leg_change_stance_pelvis_only() {
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
      //
      //
      //
      //
      // pelvis area and leg area
      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.25233466,
        _x: -0.24536509,
        _y: -0.92138991,
        _z: -0.16481488,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.078384,
        _x: -0.38211036,
        _y: -0.63807213,
        _z: 0.66386116,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: 0.18587835,
        _x: -0.34293094,
        _y: 0.41801074,
        _z: -0.82043568,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.90244086,
        _x: 0.43022802,
        _y: -0.00918848,
        _z: -0.02049092,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.6383,
        _x: -0.7127,
        _y: 0.2258,
        _z: 0.1837,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  }
  //
  ///
  //
  //
  //
  //
  //
  Double_wide_arms_up = () => {
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
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.up_arms_timer,

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
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.up_arms_timer,

        _w: 0.4589,
        _x: 0.5419,
        _y: 0.0202,
        _z: 0.7038,
        onComplete: () => {
          this.Double_wide_arms_down();
        },
      });
    }
  };

  //
  //
  //

  // // // choon bi function area begins
  Double_wide_arms_down = () => {
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
