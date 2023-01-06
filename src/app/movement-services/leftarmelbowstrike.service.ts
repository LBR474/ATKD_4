import { Injectable } from '@angular/core';

import { LoadModelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';

@Injectable({
  providedIn: 'root',
})
export class leftarmelbowstrike {
  constructor(public loadmodel: LoadModelService) {}

  // // // left arm elbow strike arms up function area begins

  left_arm_elbow_strike_arms_up = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        duration: 1.1,

        // _w: 0.4542,
        // _x: -0.0749,
        // _y: 0.3656,
        // _z: -0.809,
        _w: 0.5667,
        _x: -0.0575,
        _y: 0.4206,
        _z: -0.7062,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        duration: 1.1,
        _w: 0.9947,
        _x: 0.0867,
        _y: 0.05,
        _z: 0.024,
        onComplete: () => {
          this.left_arm_elbow_strike_arms_down();
        },
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        // _w: 0.381,
        // _x: -0.02,
        // _y: -0.9185,
        // _z: 0.1034,
        _w: 0.381,
        _x: -0.02,
        _y: -0.9185,
        _z: 0.1034,
        duration: 1.1,
      });
    }
  };

  // // // left arm elbow strike arms down function area begins

  left_arm_elbow_strike_arms_down = () => {
    console.log('Down called');
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL
    ) {
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        duration: 0.25,
        // _w: 0.4,
        // _x: -0.39,
        // _y: 0.77,
        // _z: -0.29,
        _w: 0.2386,
        _x: -0.596,
        _y: 0.7634,
        _z: -0.0711,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        duration: 0.25,
        // _w: 0.98,
        // _x: 0.1,
        // _y: 0.04,
        // _z: -0.14,
        _w: 0.5703,
        _x: 0.8138,
        _y: 0.0967,
        _z: 0.0569,
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        duration: 0.25,
        // _w: 0.91,
        // _x: -0.14,
        // _y: -0.39,
        // _z: 0.04,
        _w: 0.6311,
        _x: -0.0492,
        _y: -0.7685,
        _z: 0.0932,
      });
    }
  };




















  // // // left arm elbow strike middle and upper arms up function area begins

  left_arm_MandU_elbow_strike_arms_up = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.forearmL &&
      this.loadmodel.handL
    ) {

      gsap.to(this.loadmodel.shoulderL.quaternion, {
        duration: 1.1,
        _w: 0.65417784,
        _x: -0.33964056,
        _y: -0.31106198,
        _z: -0.5999468,
      });

     
      gsap.to(this.loadmodel.upper_armL.quaternion, {
        duration: 1.1,

        // _w: 0.4,
        // _x: -0.01,
        // _y: 0.27,
        // _z: -0.88,
        _w: 0.4785,
        _x: -0.0131,
        _y: 0.3066,
        _z: -0.8227,
      });

      gsap.to(this.loadmodel.forearmL.quaternion, {
        duration: 1.1,
        // _w: 0.98,
        // _x: 0.1,
        // _y: 0.04,
        // _z: -0.14,
        _w: 0.4589,
        _x: 0.5419,
        _y: 0.0202,
        _z: -0.7038,
        onComplete: () => {
          this.left_arm_MandU_elbow_strike_arms_down();
        },
      });

      gsap.to(this.loadmodel.handL.quaternion, {
        // _w: 0.381,
        // _x: -0.02,
        // _y: -0.9185,
        // _z: 0.1034,
        _w: 0.6311,
        _x: -0.0492,
        _y: -0.7685,
        _z: 0.0932,
        duration: 1.1,
      });
    }
  };

  // // // left arm elbow strike arms down function area begins

  left_arm_MandU_elbow_strike_arms_down = () => {
    if (
      this.loadmodel.shoulderL &&
      this.loadmodel.upper_armL &&
      this.loadmodel.upper_armR &&
      this.loadmodel.forearmL &&
      this.loadmodel.forearmR &&
      this.loadmodel.handL
    ) {

      gsap.to(this.loadmodel.shoulderL.quaternion, {
        duration: 0.25,
        _w: 0.65417784,
        _x: -0.33964056,
        _y: -0.31106198,
        _z: -0.5999468,
      });

     gsap.to(this.loadmodel.upper_armL.quaternion, {
       duration: 0.25,
       // _w: 0.4,
       // _x: -0.39,
       // _y: 0.77,
       // _z: -0.29,
       _w: 0.2386,
       _x: -0.596,
       _y: 0.7634,
       _z: -0.0711,
     });

     gsap.to(this.loadmodel.forearmL.quaternion, {
       duration: 0.25,
       // _w: 0.98,
       // _x: 0.1,
       // _y: 0.04,
       // _z: -0.14,
       _w: 0.5703,
       _x: 0.8138,
       _y: 0.0967,
       _z: 0.0569,
     });

     gsap.to(this.loadmodel.handL.quaternion, {
       duration: 0.25,
       // _w: 0.91,
       // _x: -0.14,
       // _y: -0.39,
       // _z: 0.04,
       _w: 0.6311,
       _x: -0.0492,
       _y: -0.7685,
       _z: 0.0932,
     });
    }
  };
}
