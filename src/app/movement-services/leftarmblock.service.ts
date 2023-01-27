import { Injectable } from '@angular/core';

import { loadmodelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';
//import {QuaternionPlugin} from 'gsap/all'
import { TimerVariablesService } from './timer-variables.service';

import { Quaternion } from 'three';
import { Vector3 } from 'three';

@Injectable({
  providedIn: 'root',
})
export class LeftarmblockService {
  constructor(
    public loadmodel: loadmodelService,
    public loadTimer: TimerVariablesService
  ) {}

  // basic poomsae ONE functions
  //
  //
  //
  //
  // // //  left_arm_wide_down_block_arms up function area begins

  left_arm_wide_down_block_arms_up = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.5667,
        _x: -0.0575,
        _y: 0.4206,
        _z: -0.7062,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.623,
        _x: 0.6557,
        _y: 0.1741,
        _z: -0.3894,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.left_arm_wide_down_block_arms_down();
        },
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.9955,
        _x: 0.0927,
        _y: 0.004,
        _z: 0.0207,
        duration: this.loadTimer.up_arms_timer,
      });
    }
  };

  // // // left_arm_wide_down_block_arms down function area begins

  left_arm_wide_down_block_arms_down = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.8625,
        _x: -0.1844,
        _y: 0.4608,
        _z: -0.0985,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.625,
        _x: -0.3339,
        _y: 0.6648,
        _z: -0.2363,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.99,
        _x: 0.12,
        _y: 0.04,
        _z: 0.01,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        _w: 0.99,
        _x: -0.15,
        _y: 0.01,
        _z: 0.01,
      });
    }
  };
  //
  //
  //
  //
  //
  // // //  left_arm_wide_middle_block_arms up function area begins

  left_arm_wide_middle_block_arms_up = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.9779,
        _x: -0.2091,
        _y: 0.0,
        _z: 0.0,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.4095,
        _x: 0.1476,
        _y: 0.3941,
        _z: -0.8095,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.7107,
        _x: 0.1921,
        _y: 0.0105,
        _z: -0.6767,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.left_arm_wide_middle_block_arms_down();
        },
      });
    }
  };

  // // //  left_arm_wide_middle_block_arms down function area begins

  left_arm_wide_middle_block_arms_down = () => {
    //console.log('Down called');
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.8625,
        _x: -0.1844,
        _y: 0.4608,
        _z: -0.0985,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.625,
        _x: -0.3339,
        _y: 0.6648,
        _z: -0.2363,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.548,
        _x: 0.7905,
        _y: -0.2212,
        _z: 0.1609,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  // // //  left_arm_wide_upper_block_arms up function area begins

  left_arm_wide_upper_block_arms_up = () => {
    if (
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.spine006
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.9779,
        _x: -0.2091,
        _y: 0.0,
        _z: 0.0,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.4095,
        _x: 0.1476,
        _y: 0.3941,
        _z: -0.8095,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.7107,
        _x: 0.1921,
        _y: 0.0105,
        _z: -0.6767,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.left_arm_wide_upper_block_arms_down();
        },
      });
    }
  };

  // // //  left_arm_wide_middle_block_arms down function area begins

  left_arm_wide_upper_block_arms_down = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.shoulderL.quaternion, {
        _w: 0.5764,
        _x: 0.0891,
        _y: -0.5131,
        _z: -0.6297,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.9381,
        _x: 0.2654,
        _y: -0.2212,
        _z: 0.0227,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.7165,
        _x: 0.4307,
        _y: -0.0681,
        _z: -0.5446,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.9816,
        _x: 0.1898,
        _y: 0.006,
        _z: 0.0202,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  // basic poomsae TWO functions
  //
  //
  //
  //
  // // //  left_arm_wide_inside_block_arms up function area begins

  left_arm_wide_inside_block_arms_up = () => {
    if (
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.6679,
        _x: -0.0542,
        _y: 0.742,
        _z: 0.0207,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.6754,
        _x: 0.2045,
        _y: -0.1806,
        _z: 0.6851,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.left_arm_wide_inside_block_arms_down();
        },
      });
    }
  };

  // // // left_arm_wide_inside_block_arms down function area begins

  left_arm_wide_inside_block_arms_down = () => {
    if (
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.3061,
        _x: 0.5961,
        _y: 0.3035,
        _z: -0.6774,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.8009,
        _x: 0.3307,
        _y: 0.0547,
        _z: 0.4962,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        duration: this.loadTimer.down_arms_timer,
        _w: 0.5528,
        _x: -0.0398,
        _y: -0.8266,
        _z: 0.0975,
      });
    }
  };

  //
  //
  //
  //
  //
  // // //  left_arm_knife_strike_arms_up function area begins

  left_arm_knife_strike_arms_up = () => {
    if (
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.3385,
        _x: -0.3409,
        _y: 0.8739,
        _z: 0.0739,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.6754,
        _x: 0.2045,
        _y: -0.1806,
        _z: 0.6851,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.left_arm_knife_strike_arms_down();
        },
      });
    }
  };

  // // // left_arm_knife_strike_arms_down function area begins

  left_arm_knife_strike_arms_down = () => {
    if (
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.6683,
        _x: 0.2025,
        _y: 0.4266,
        _z: -0.5748,
        duration: 0.15,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.962,
        _x: 0.2724,
        _y: 0.0168,
        _z: 0.0073,
        duration: 0.15,
      });
      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.381,
        _x: -0.02,
        _y: -0.9185,
        _z: 0.1034,
        duration: 0.15,
      });
    }
  };
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

  // // // //  BP2_whirling_left_arm_knife_block_down function area begins

  BP2_whirling_left_arm_knife_block_downwards_arms_up = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.6918,
        _x: -0.1479,
        _y: 0.6912,
        _z: -0.1478,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: -0.66,
        _x: -0.2613,
        _y: 0.5683,
        _z: 0.4162,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.945,
        _x: 0.2639,
        _y: 0.0696,
        _z: -0.1804,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.BP2_whirling_left_arm_knife_block_downwards_arms_down();
        },
      });
    }
  };

  // // // BP2_whirling_left_arm_knife_block_downwards_arms_down function area begins

  BP2_whirling_left_arm_knife_block_downwards_arms_down = () => {
    if (this.loadmodel.upper_armL && this.loadmodel.handL) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: -0.4758,
        _x: 0.2125,
        _y: -0.7509,
        _z: 0.4058,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.99443656,
        _x: -0.10319802,
        _y: -0.00008172,
        _z: 0.0211207,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  // // // face the front function area begins

  face_the_front_again = () => {
    if (this.loadmodel.metarig && this.loadmodel.spine006) {
      gsap.to(this.loadmodel.metarig.quaternion, {
        _w: 1.0,
        _x: 0.0,
        _y: -0.0,
        _z: 0.0,
        duration: this.loadTimer.down_arms_timer,
        //ease: 'power4.in',
      });
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.97790051,
        _x: -0.20907073,
        _y: 0.00000022,
        _z: 0.00000004,
        duration: this.loadTimer.down_arms_timer,
        //ease: 'power4.in',
      });
    }
  };

  //
  //
  //
  //
  // // // Basic poomsae THREE functions area

  //
  //
  //
  //
  // // //  left_arm_middle_single_knife_block_arms_up function area begins

  left_arm_middle_single_knife_block_arms_up = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.4095,
        _x: 0.1476,
        _y: 0.3941,
        _z: -0.8095,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.7107,
        _x: 0.1921,
        _y: 0.0105,
        _z: -0.6767,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.left_arm_middle_single_knife_block_arms_down();
        },
      });
    }
  };

  // // //  left_arm_wide_middle_block_arms down function area begins

  left_arm_middle_single_knife_block_arms_down = () => {
    //console.log('Down called');
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.8625,
        _x: -0.1844,
        _y: 0.4608,
        _z: -0.0985,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.625,
        _x: -0.3339,
        _y: 0.6648,
        _z: -0.2363,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.548,
        _x: 0.7905,
        _y: -0.2212,
        _z: 0.1609,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  //
  //
  //
  //
  // // //  left_arm_whirling_double_knife_block_arms_up function area begins

  left_arm_down_block_knife_hand_arms_up = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.6092,
        _x: 0.2337,
        _y: 0.7063,
        _z: 0.2746,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.962,
        _x: 0.2724,
        _y: 0.0168,
        _z: 0.0073,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.left_arm_down_block_knife_hand_arms_middle();
        },
      });
    }
  };

  left_arm_down_block_knife_hand_arms_middle = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.4433,
        _x: 0.5395,
        _y: 0.0355,
        _z: -0.7149,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.962,
        _x: 0.2724,
        _y: 0.0168,
        _z: 0.0073,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.left_arm_down_block_knife_hand_arms_down();
        },
      });
    }
  };

  // // //  left_arm_wide_middle_block_arms down function area begins

  left_arm_down_block_knife_hand_arms_down = () => {
    //console.log('Down called');
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.8625,
        _x: -0.1844,
        _y: 0.4608,
        _z: -0.0985,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.6121,
        _x: -0.2598,
        _y: 0.6081,
        _z: -0.4337,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.9967,
        _x: 0.0796,
        _y: 0.0151,
        _z: 0.0104,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.9967,
        _x: 0.0796,
        _y: 0.0151,
        _z: 0.0104,
        duration: this.loadTimer.down_arms_timer,
      });

      
    }
  };

  return_left_hand_to_start_position(){
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.handL.quaternion, {
       _w: 0.99443656, _x: -0.10319802, _y: -0.00008172, _z: 0.02112070, 
        duration: this.loadTimer.down_arms_timer,
      }); 
  }
}

  // // //  knife block - palm up function area begins

  // // //  knife block - palm up function area begins

  left_arm_knife_block_palm_up_arms_up = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        // _w: 0.3296,
        // _x: 0.6156,
        // _y: -0.1045,
        // _z: -0.7081,
        _w: 0.3296,
        _x: 0.6156,
        _y: -0.1045,
        _z: -0.7081,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.left_arm_knife_block_palm_up_arms_middle();
        },
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.9769,
        _x: 0.213,
        _y: -0.0114,
        _z: 0.0143,
        duration: this.loadTimer.up_arms_timer,
        
      });
    }
  };

  left_arm_knife_block_palm_up_arms_middle = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.9779,
        _x: -0.2091,
        _y: 0.0,
        _z: 0.0,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.7395,
        _x: 0.246,
        _y: 0.6138,
        _z: 0.1258,
        duration: this.loadTimer.up_arms_timer,
        //duration: 5,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.9997,
        _x: -0.0185,
        _y: 0.014,
        _z: 0.0119,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
         this.left_arm_knife_block_palm_up_arms_down();
        },
      });
    }
  };

  // // // left_arm_knife_block_palm_up_arms down function area begins

  left_arm_knife_block_palm_up_arms_down = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.5879,
        _x: -0.0364,
        _y: 0.5336,
        _z: -0.6069,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.7122,
        _x: 0.5925,
        _y: 0.2067,
        _z: -0.3146,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.5597,
        _x: 0.0414,
        _y: -0.8265,
        _z: 0.0429,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };



    crossover_palm_down_left_arms_up() {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        _w: 0.5016,
        _x: -0.0093,
        _y: 0.4996,
        _z: -0.7062,
        duration: this.loadTimer.up_arms_timer,
      });
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.5738,
        _x: 0.6795,
        _y: -0.3426,
        _z: 0.3028,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.crossover_palm_down_left_arms_down();
        },
      });
    }
  }

  crossover_palm_down_left_arms_down() {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      
      gsap.to(this.loadmodel.forearmL.quaternion, {
        _w: 0.5982,
        _x: 0.696,
        _y: 0.3076,
        _z: -0.2512,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.handL.quaternion, {
        _w: 0.9517,
        _x: -0.1049,
        _y: 0.2884,
        _z: -0.0097,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  }

}
