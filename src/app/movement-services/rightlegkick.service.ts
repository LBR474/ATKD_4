import { Injectable } from '@angular/core';

// movement services imports
import { Bp4TogglerService } from './bp4-toggler.service';
import { ChoonbiservService } from './choonbiserv.service';
import { LeftlegkickService } from './leftlegkick.service';
import { loadmodelService } from './loadmodel.service';
import { TimerVariablesService } from './timer-variables.service';

// gsap import
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class RightlegkickService {
  constructor(
    public loadbp4toggler: Bp4TogglerService,
    public loadchoonbiserv: ChoonbiservService,
    public loadleftlegkick: LeftlegkickService,
    public loadmodel: loadmodelService,
    public loadTimer: TimerVariablesService
  ) {}

  right_leg_rising_kick_leg_up() {
    if (
      this.loadmodel.metarig &&
      this.loadmodel.spine &&
      this.loadmodel.pelvisL &&
      this.loadmodel.pelvisR &&
      this.loadmodel.thighL &&
      this.loadmodel.thighR &&
      this.loadmodel.shinL &&
      this.loadmodel.footL &&
      this.loadmodel.footR
    ) {
      if (this.loadbp4toggler.count_incrementer == 1) {
        gsap.to(this.loadmodel.metarig.position, {
          x: '+=0.1',
          y: '+=0.1',
          z: '+=0.1',
          duration: this.loadTimer.up_arms_timer,
        });
      } else {
        gsap.to(this.loadmodel.metarig.position, {
          x: '-=0.1',
          y: '+=0.1',
          z: '+=0.1',
          duration: this.loadTimer.up_arms_timer,
        });
      }

      // if (this.loadbp4toggler.count_incrementer < 5) {
      //   gsap.to(this.loadmodel.metarig.quaternion, {
      //     _w: 0.88203855,
      //     _x: 0.0,
      //     _y: 0.47117725,
      //     _z: 0.0,
      //     duration: this.loadTimer.down_arms_timer,
      //   });
      // } else {
      //   gsap.to(this.loadmodel.metarig.quaternion, {
      //     _w: 0.9951896,
      //     _x: 0.0,
      //     _y: 0.09796761,
      //     _z: 0.0,
      //     duration: this.loadTimer.down_arms_timer,
      //   });
      // }
      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.36227676,
        _x: -0.13191658,
        _y: -0.73970294,
        _z: -0.55153716,
        duration: this.loadTimer.up_arms_timer,
      });
      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.99837738,
        _x: 0.05232846,
        _y: -0.00065198,
        _z: -0.02244729,
        duration: this.loadTimer.up_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.20834254,
        _x: -0.08179523,
        _y: 0.92631357,
        _z: 0.30306119,
        // _w: 0.42642326,
        // _x: -0.32460368,
        // _y: 0.82777002,
        // _z: 0.16610969,
        duration: this.loadTimer.up_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: -0.17195654,
        _x: -0.14409522,
        _y: 0.97337916,
        _z: -0.04691044,
        duration: this.loadTimer.up_arms_timer,
        //duration: 2,
      });

      gsap.to(this.loadmodel.footL.quaternion, {
        _w: 0.9674,
        _x: -0.2529,
        _y: -0.0025,
        _z: 0.013,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.79713196,
        _x: -0.60366082,
        _y: 0.00728697,
        _z: -0.01100774,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.right_leg_rising_kick_leg_down();
          if (this.loadbp4toggler.count_incrementer > 6) {
            this.loadleftlegkick.Double_wide_arms_up();
          }
        },
      });
    }
  }

  right_leg_rising_kick_leg_down() {
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
      // if (this.loadbp4toggler.count_incrementer < 5) {
      //   gsap.to(this.loadmodel.metarig.quaternion, {
      //     _w: 0.95698367,
      //     _x: 0.0,
      //     _y: 0.29014179,
      //     _z: 0.0,
      //     duration: this.loadTimer.down_arms_timer,
      //   });
      // } else {
      //   gsap.to(this.loadmodel.metarig.quaternion, {
      //     _w: 0.9808047,
      //     _x: 0.0,
      //     _y: -0.19499269,
      //     _z: 0.0,
      //     duration: this.loadTimer.down_arms_timer,
      //   });
      // }

      if (this.loadbp4toggler.count_incrementer == 1) {
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
        _w: 0.2763,
        _x: -0.4047,
        _y: -0.8634,
        _z: -0.12,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.2952,
        _x: 0.0314,
        _y: 0.5392,
        _z: 0.7882,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: 0.07838394,
        _x: -0.38211039,
        _y: 0.63807213,
        _z: -0.66386116,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.8499,
        _x: 0.5152,
        _y: 0.0395,
        _z: -0.1033,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.footL.quaternion, {
        _w: 0.7971319,
        _x: -0.60366088,
        _y: -0.00728697,
        _z: 0.01100774,
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

  right_leg_snap_kick_leg_up() {
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
      // gsap.to(this.loadmodel.metarig.position, {
      //   x: '+=0.1',
      //   y: '+=0.1',
      //   z: '+=0.1',
      //   duration: this.loadTimer.down_arms_timer,
      // });
      if (this.loadbp4toggler.count_incrementer == 2) {
        gsap.to(this.loadmodel.metarig.position, {
          x: '+=0.1',
          y: '+=0.1',
          z: '+=0.1',
          duration: this.loadTimer.down_arms_timer,
        });
      } else {
        gsap.to(this.loadmodel.metarig.position, {
          x: '-=0.1',
          y: '+=0.1',
          z: '+=0.1',
          duration: this.loadTimer.down_arms_timer,
        });
      }
      // if (this.loadbp4toggler.count_incrementer < 5) {
      //   gsap.to(this.loadmodel.metarig.quaternion, {
      //     _w: 0.88203855,
      //     _x: 0.0,
      //     _y: 0.47117725,
      //     _z: 0.0,
      //     duration: this.loadTimer.down_arms_timer,
      //   });
      // } else {
      //   gsap.to(this.loadmodel.metarig.quaternion, {
      //     _w: 0.9951896,
      //     _x: 0.0,
      //     _y: 0.09796761,
      //     _z: 0.0,
      //     duration: this.loadTimer.down_arms_timer,
      //   });
      // }

      gsap.to(this.loadmodel.pelvisL.quaternion, {
        _w: 0.36227676,
        _x: -0.13191658,
        _y: -0.73970294,
        _z: -0.55153716,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.99837738,
        _x: 0.05232846,
        _y: -0.00065198,
        _z: -0.02244729,
        duration: this.loadTimer.down_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.20834254,
        _x: -0.08179523,
        _y: 0.92631357,
        _z: 0.30306119,
        // _w: 0.42642326,
        // _x: -0.32460368,
        // _y: 0.82777002,
        // _z: 0.16610969,
        duration: this.loadTimer.down_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: -0.17195654,
        _x: -0.14409522,
        _y: 0.97337916,
        _z: -0.04691044,
        duration: this.loadTimer.down_arms_timer,
        //duration: 2,
      });
      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.3343,
        _x: 0.9422,
        _y: 0.021,
        _z: 0.008,
        duration: this.loadTimer.down_arms_timer,
        //duration: 2,
      });

      gsap.to(this.loadmodel.footL.quaternion, {
        // _w: 0.9674,
        // _x: -0.2529,
        // _y: -0.0025,
        // _z: 0.013,
        _w: 0.9674,
        _x: -0.2529,
        _y: -0.0025,
        _z: 0.013,
        duration: this.loadTimer.down_arms_timer,
        onComplete: () => {
         
          setTimeout(() => {
            if (this.loadbp4toggler.rightLeg == 'Snap kick with kiop') {
              this.loadbp4toggler.toggle_kiop_left();
            }
          }, 100);
        },
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.9981,
        _x: -0.0594,
        _y: -0.0001,
        _z: -0.0132,
        duration: this.loadTimer.down_arms_timer,
        onComplete: () => {
          this.right_leg_snap_kick_leg_middle();

        },
      });
    }
  }

  right_leg_snap_kick_leg_middle() {
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
      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.9983775,
        _x: 0.05232846,
        _y: 0.00065198,
        _z: 0.02244732,
        duration: this.loadTimer.down_arms_timer,

        onComplete: () => {
          setTimeout(() => {
            this.right_leg_snap_fold_back();
          }, 20);
          
        },

        
         
        
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
  right_leg_snap_fold_back() {
    if (this.loadmodel.metarig && this.loadmodel.shinR) {

      // if (this.loadbp4toggler.count_incrementer < 5) {
      //   gsap.to(this.loadmodel.metarig.quaternion, {
      //     _w: 0.95698367,
      //     _x: 0.0,
      //     _y: 0.29014179,
      //     _z: 0.0,
      //     duration: this.loadTimer.down_arms_timer,
      //   });
      // } else {
      //   gsap.to(this.loadmodel.metarig.quaternion, {
      //     _w: 0.9808047,
      //     _x: 0.0,
      //     _y: -0.19499269,
      //     _z: 0.0,
      //     duration: this.loadTimer.down_arms_timer,
      //   });
      // }
      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.3343,
        _x: 0.9422,
        _y: 0.021,
        _z: 0.008,
        duration: this.loadTimer.down_arms_timer,
        onComplete: () => {
          setTimeout(() => {
            this.right_leg_snap_kick_leg_down();
          }, 20);
          setTimeout(() => {
            if (this.loadbp4toggler.rightLeg == 'Snap kick with kiop') {
              this.loadbp4toggler.toggle_kiop_left();
            }
          }, 50);
        },
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

  right_leg_snap_kick_leg_down() {
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
      if (this.loadbp4toggler.count_incrementer < 4) {
        gsap.to(this.loadmodel.metarig.quaternion, {
          _w: 0.957,
          _x: 0.0,
          _y: 0.2901,
          _z: 0.0,
          duration: this.loadTimer.down_arms_timer,
        });
      }
      if (this.loadbp4toggler.count_incrementer == 2) {
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
        _w: 0.36227676,
        _x: -0.13191658,
        _y: -0.73970294,
        _z: -0.55153716,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.pelvisR.quaternion, {
        _w: 0.362277,
        _x: -0.1319167,
        _y: 0.73970276,
        _z: 0.5515371,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.thighR.quaternion, {
        _w: 0.07838394,
        _x: -0.38211039,
        _y: 0.63807213,
        _z: -0.66386116,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.thighL.quaternion, {
        _w: 0.07838394,
        _x: -0.38211039,
        _y: -0.63807213,
        _z: 0.66386116,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.shinL.quaternion, {
        _w: 0.99837738,
        _x: 0.05232846,
        _y: -0.00065198,
        _z: -0.02244729,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.9983775,
        _x: 0.05232846,
        _y: 0.00065198,
        _z: 0.02244732,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.footL.quaternion, {
        _w: 0.7971319,
        _x: -0.60366088,
        _y: -0.00728697,
        _z: 0.01100774,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.footR.quaternion, {
        _w: 0.79713196,
        _x: -0.60366082,
        _y: 0.00728697,
        _z: -0.01100774,
        duration: this.loadTimer.down_arms_timer,
        onComplete: () => {
          this.right_leg_snap_kick_change_stance();
        },
      });
    }
  }

  right_leg_snap_kick_change_stance() {
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
      if (this.loadbp4toggler.count_incrementer > 7) {
      gsap.to(this.loadmodel.metarig.position, {
        x: '+=0.1',
        y: '-=0.1',
        z: '+=0.1',
        duration: this.loadTimer.down_arms_timer,
        onComplete: () => {
          setTimeout(() => {
            
              this.loadbp4toggler.toggle_kiop_left();
           
          }, 100);
        },
      });
      }
      // if (this.loadbp4toggler.count_incrementer < 4) {
        gsap.to(this.loadmodel.metarig.quaternion, {
          _w: 0.957,
          _x: 0.0,
          _y: 0.2901,
          _z: 0.0,
          duration: this.loadTimer.down_arms_timer,
        });
      //}

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
        onComplete: () => {
          this.loadleftlegkick.Double_wide_arms_up();
        },
      });
      // gsap.to(this.loadmodel.thighR.quaternion, {
      //   _w: 0.07838394,
      //   _x: -0.38211039,
      //   _y: 0.63807213,
      //   _z: -0.66386116,
      //   duration: this.loadTimer.down_arms_timer,
      // });

      gsap.to(this.loadmodel.shinR.quaternion, {
        _w: 0.90244097,
        _x: 0.43022807,
        _y: 0.00918849,
        _z: 0.02049095,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  }
}
