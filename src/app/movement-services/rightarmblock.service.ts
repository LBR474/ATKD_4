import { Injectable } from '@angular/core';

import { loadmodelService } from './loadmodel.service';
import { TimerVariablesService } from './timer-variables.service';
// gsap import
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class rightarmblockService {
  constructor(
    public loadmodel: loadmodelService,
    public loadTimer: TimerVariablesService
  ) {}

  // Basic poomsae ONE functions area
  //
  //
  //
  //
  //
  // // // right_arm_wide_down_block_arms up function area begins

  right_arm_wide_down_block_arms_up = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.9779,
        _x: -0.2091,
        _y: 0.0,
        _z: 0.0,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.up_arms_timer,

        _w: 0.5667,
        _x: -0.0575,
        _y: -0.4206,
        _z: 0.7062,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.up_arms_timer,
        _w: 0.623,
        _x: 0.6557,
        _y: -0.1741,
        _z: 0.3894,
        onComplete: () => {
          this.right_arm_wide_down_block_arms_down();
        },
      });
    }
  };

  // // // right_arm_wide_down_block_arms down function area begins

  right_arm_wide_down_block_arms_down = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.8625,
        _x: -0.1844,
        _y: -0.4608,
        _z: 0.0985,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.625,
        _x: -0.3339,
        _y: -0.6648,
        _z: 0.2363,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.99,
        _x: 0.14,
        _y: -0.07,
        _z: -0.05,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.99,
        _x: -0.15,
        _y: 0.01,
        _z: 0.01,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  //
  //
  //
  //
  //
  // // // right_arm_wide_middle_block_arms up function area begins

  right_arm_wide_middle_block_arms_up = () => {
    if (
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.spine006
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.9779,
        _x: -0.2091,
        _y: 0.0,
        _z: 0.0,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.up_arms_timer,

        _w: 0.4095,
        _x: 0.1476,
        _y: -0.3941,
        _z: 0.8095,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.up_arms_timer,

        _w: 0.7107,
        _x: 0.1921,
        _y: 0.0105,
        _z: 0.6767,
        onComplete: () => {
          this.right_arm_wide_middle_block_arms_down();
        },
      });
    }
  };

  // // // right_arm_wide_middle_block_arms down function area begins

  right_arm_wide_middle_block_arms_down = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.8625,
        _x: -0.1844,
        _y: -0.4608,
        _z: 0.0985,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.625,
        _x: -0.3339,
        _y: -0.6648,
        _z: 0.2363,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.548,
        _x: 0.7905,
        _y: 0.2212,
        _z: -0.1609,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };
  //
  //
  //
  //
  //
  // // // right_arm_wide_upper_block_arms up function area begins

  right_arm_wide_upper_block_arms_up = () => {
    if (
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.spine006
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.9779,
        _x: -0.2091,
        _y: 0.0,
        _z: 0.0,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        duration: this.loadTimer.up_arms_timer,

        _w: 0.4095,
        _x: -0.1476,
        _y: -0.3941,
        _z: 0.8095,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        duration: this.loadTimer.up_arms_timer,

        _w: 0.7107,
        _x: 0.1921,
        _y: 0.0105,
        _z: 0.6767,
        onComplete: () => {
          this.right_arm_wide_upper_block_arms_down();
        },
      });
    }
  };

  // // // right_arm_wide_upper_block_arms down function area begins

  right_arm_wide_upper_block_arms_down = () => {
    if (
      this.loadmodel.upper_armR &&
      this.loadmodel.shoulderR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.shoulderR.quaternion, {
        _w: 0.5764,
        _x: 0.0891,
        _y: 0.5131,
        _z: 0.6297,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.9381,
        _x: 0.2654,
        _y: 0.2212,
        _z: 0.0227,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.7165,
        _x: 0.4307,
        _y: -0.0681,
        _z: 0.5446,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.9816,
        _x: -0.1898,
        _y: 0.006,
        _z: 0.0202,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  // basic poomsae two functions area

  //
  //
  //
  //
  //

  // // //  right_arm_wide_inside_block_arms up function area begins

  right_arm_wide_inside_block_arms_up = () => {
    if (this.loadmodel.upper_armR && this.loadmodel.forearmR) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.6679,
        _x: -0.0542,
        _y: -0.742,
        _z: -0.0207,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.6754,
        _x: 0.2045,
        _y: 0.1806,
        _z: -0.6851,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.right_arm_wide_inside_block_arms_down();
        },
      });
    }
  };

  // // // right_arm_wide_inside_block_arms down function area begins

  right_arm_wide_inside_block_arms_down = () => {
    if (this.loadmodel.upper_armR && this.loadmodel.forearmR) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.3061,
        _x: 0.5961,
        _y: -0.3035,
        _z: 0.6774,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.8009,
        _x: 0.3307,
        _y: -0.0547,
        _z: -0.4962,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  // // //  right_arm_knife_strike_arms_up function area begins

  right_arm_knife_strike_arms_up = () => {
    if (
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.6679,
        _x: -0.0542,
        _y: -0.742,
        _z: -0.0207,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.6754,
        _x: 0.2045,
        _y: 0.1806,
        _z: -0.6851,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.right_arm_knife_strike_arms_down();
        },
      });
    }
  };

  // // // right_arm_knife_strike_arms_down function area begins

  right_arm_knife_strike_arms_down = () => {
    if (
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR &&
      this.loadmodel.f_index01R &&
      this.loadmodel.f_middle01R &&
      this.loadmodel.f_ring01R &&
      this.loadmodel.f_pinky01R
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.6683,
        _x: 0.2025,
        _y: -0.4266,
        _z: 0.5748,
        duration: 0.15,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.962,
        _x: 0.2724,
        _y: 0.0168,
        _z: 0.0073,
        duration: 0.15,
      });
      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.3034,
        _x: 0.047,
        _y: 0.9505,
        _z: -0.0468,
        duration: 0.15,
      });
    }
  };

  // // // //  BP2_whirling_right_arm_knife_block_down function area begins

  BP2_whirling_right_arm_knife_block_downwards_arms_up = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.9779,
        _x: -0.2091,
        _y: 0.0,
        _z: 0.0,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: -0.66,
        _x: -0.2613,
        _y: -0.5683,
        _z: -0.4162,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.945,
        _x: 0.2639,
        _y: -0.0696,
        _z: 0.1804,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.BP2_whirling_right_arm_knife_block_downwards_arms_down();
        },
      });
    }
  };

  // // // BP2_whirling_left_arm_knife_block_downwards_arms_down function area begins

  BP2_whirling_right_arm_knife_block_downwards_arms_down = () => {
    if (
      this.loadmodel.upper_armR &&
      this.loadmodel.spine006 &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.6918,
        _x: -0.1479,
        _y: -0.6912,
        _z: 0.1478,

        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: -0.4758,
        _x: 0.2125,
        _y: 0.7509,
        _z: -0.4058,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.9896,
        _x: -0.1006,
        _y: 0.0975,
        _z: -0.0311,
        duration: this.loadTimer.down_arms_timer,
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

  // Basic poomsae THREE functions area
  //
  //
  //
  //
  // // //  right_arm_middle_single_knife_block_arms_up function area begins

  right_arm_middle_single_knife_block_arms_up = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.97790051,
        _x: -0.20907073,
        _y: 0.00000022,
        _z: 0.00000004,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.4095,
        _x: 0.1476,
        _y: -0.3941,
        _z: 0.8095,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.7107,
        _x: 0.1921,
        _y: -0.0105,
        _z: 0.6767,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.right_arm_middle_single_knife_block_arms_down();
        },
      });
    }
  };

  // // //  right_arm_wide_middle_block_arms down function area begins

  right_arm_middle_single_knife_block_arms_down = () => {
    //console.log('Down called');
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.8625,
        _x: -0.1844,
        _y: -0.4608,
        _z: 0.0985,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.625,
        _x: -0.3339,
        _y: -0.6648,
        _z: 0.2363,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.548,
        _x: 0.7905,
        _y: 0.2212,
        _z: -0.1609,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.99443656,
        _x: -0.10319804,
        _y: 0.00008172,
        _z: -0.02112079,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  // // //  knife block - palm up function area begins

  right_arm_knife_block_palm_up_arms_up = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.3296,
        _x: 0.6156,
        _y: 0.1045,
        _z: 0.7081,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.9769,
        _x: 0.213,
        _y: -0.0114,
        _z: 0.0143,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.right_arm_knife_block_palm_up_arms_middle();
        },
      });
    }
  };

  right_arm_knife_block_palm_up_arms_middle = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.7395,
        _x: 0.246,
        _y: -0.6138,
        _z: -0.1258,
        duration: this.loadTimer.up_arms_timer,
        //duration: 5,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.962,
        _x: 0.2724,
        _y: -0.0168,
        _z: -0.0073,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.right_arm_knife_block_palm_up_arms_down();
        },
      });
    }
  };

  // // //  right_arm_knife_block_palm_up_arms down function area begins

  right_arm_knife_block_palm_up_arms_down = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.5879,
        _x: -0.0364,
        _y: -0.5336,
        _z: 0.6069,

        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.7122,
        _x: 0.5925,
        _y: -0.2067,
        _z: 0.3146,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.5597,
        _x: 0.0414,
        _y: 0.8265,
        _z: -0.0429,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  right_arm_down_block_knife_hand_arms_up = () => {
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.6332,
        _x: 0.1634,
        _y: -0.7258,
        _z: -0.2136,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.9967,
        _x: 0.0796,
        _y: -0.0151,
        _z: -0.0104,
        // _w: 0.9832,
        // _x: -0.0347,
        // _y: -0.1557,
        // _z: -0.0892,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.right_arm_down_block_knife_hand_arms_middle();
        },
      });
    }
  };

  right_arm_down_block_knife_hand_arms_middle = () => {
    if (
      this.loadmodel.shoulderR &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.0416,
        _x: 0.7606,
        _y: -0.4551,
        _z: -0.4612,
        duration: this.loadTimer.up_arms_timer,
      });

      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.962,
        _x: -0.2724,
        _y: -0.0168,
        _z: -0.0073,
        duration: this.loadTimer.up_arms_timer,
        onComplete: () => {
          this.right_arm_down_block_knife_hand_arms_down();
        },
      });
    }
  };

  right_arm_down_block_knife_hand_arms_down = () => {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.spine006.quaternion, {
        _w: 0.8625,
        _x: -0.1844,
        _y: -0.4608,
        _z: 0.0985,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.6121,
        _x: -0.2598,
        _y: -0.6081,
        _z: 0.4337,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.9967,
        _x: 0.0796,
        _y: 0.0151,
        _z: 0.0104,
        duration: this.loadTimer.down_arms_timer,
      });

      gsap.to(this.loadmodel.handR.quaternion, {
        _w: 0.9862,
        _x: -0.1483,
        _y: -0.087,
        _z: 0.0246,
        duration: this.loadTimer.down_arms_timer,
      });
    }
  };

  crossover_palm_down_right_arms_up() {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        _w: 0.5256,
        _x: -0.0885,
        _y: -0.5275,
        _z: 0.6616,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.4336,
        _x: 0.7777,
        _y: 0.3961,
        _z: -0.224,
        duration: this.loadTimer.down_arms_timer,
        onComplete: () => {
          this.crossover_palm_down_right_arms_down();
        },
      });
    }
  }

  crossover_palm_down_right_arms_down() {
    if (
      this.loadmodel.spine006 &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmR &&
      this.loadmodel.handR
    ) {
      gsap.to(this.loadmodel.upper_armR.quaternion, {
        // _w: 0.6683,
        // _x: 0.2025,
        // _y: -0.4266,
        // _z: 0.5748,
        duration: this.loadTimer.down_arms_timer,
      });
      gsap.to(this.loadmodel.forearmR.quaternion, {
        _w: 0.4353,
        _x: 0.7526,
        _y: -0.3766,
        _z: 0.3196,
        duration: this.loadTimer.up_arms_timer,
      });
    }
  }
}
