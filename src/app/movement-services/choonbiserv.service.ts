import { Injectable } from '@angular/core';

// import { LoadModelService } from './loadmodel.service';

import { LoadModelService } from './loadmodel.service';

// gsap import
import { gsap } from 'gsap';
import { LeftfistService } from './leftfist.service';
import { RightfistService } from './rightfist.service';

@Injectable({
  providedIn: 'root',
})
export class ChoonbiservService {
  constructor(
    public loadModel: LoadModelService,
    public loadLeftFist: LeftfistService,
    public loadRightFist: RightfistService
  ) {}

  // // // choon bi function area begins
  choon_bi_up_arms = () => {
    if (
      this.loadModel.spine &&
      this.loadModel.handL &&
      this.loadModel.shoulderL &&
      this.loadModel.shoulderR &&
      this.loadModel.upper_armL &&
      this.loadModel.upper_armR &&
      this.loadModel.forearmL &&
      this.loadModel.forearmR &&
      this.loadModel.handR &&
      this.loadModel.pelvisL &&
      this.loadModel.pelvisR &&
      this.loadModel.thighL &&
      this.loadModel.thighR
    ) {
      gsap.to(this.loadModel.upper_armL.quaternion, {
        // _w: 0.7153,
        // _x: -0.2818,
        // _y: 0.5181,
        // _z: -0.3748,
        _w: 0.6753,
        _x: -0.1324,
        _y: 0.703,
        _z: -0.1797,
        duration: 1.1,
      });

      gsap.to(this.loadModel.upper_armR.quaternion, {
        // _w: 0.7153,
        // _x: -0.2818,
        // _y: -0.5181,
        // _z: 0.3748,
        _w: 0.6753,
        _x: -0.1324,
        _y: -0.703,
        _z: 0.1797,
        duration: 1.1,
      });

      gsap.to(this.loadModel.forearmL.quaternion, {
        // _w: 0.2819,
        // _x: 0.8052,
        // _y: 0.113,
        // _z: -0.5093,
        _w: 0.4058,
        _x: 0.7613,
        _y: 0.208,
        _z: -0.461,
        duration: 1.1,
      });

      gsap.to(this.loadModel.forearmR.quaternion, {
        duration: 1.1,
        // _w: 0.2819,
        // _x: 0.8052,
        // _y: -0.113,
        // _z: 0.5093,
        _w: 0.4058,
        _x: 0.7613,
        _y: -0.208,
        _z: 0.461,
        onComplete: this.choon_bi,
      });

      gsap.to(this.loadModel.handL.quaternion, {
        // _w: 0.2819,
        // _x: 0.8052,
        // _y: 0.113,
        // _z: -0.5093,
        _w: 0.9816,
        _x: 0.1898,
        _y: 0.006,
        _z: 0.0202,
        duration: 1.1,
      });
      gsap.to(this.loadModel.handR.quaternion, {
        // _w: 0.2819,
        // _x: 0.8052,
        // _y: 0.113,
        // _z: -0.5093,
        _w: 0.9816,
        _x: 0.1898,
        _y: -0.006,
        _z: -0.0202,
        duration: 1.1,
      });


    }
  };

  // // // choon bi function area begins
  choon_bi = () => {
    if (
      this.loadModel.spine &&
      // arms area
      this.loadModel.shoulderL &&
      this.loadModel.shoulderR &&
      this.loadModel.upper_armL &&
      this.loadModel.upper_armR &&
      this.loadModel.forearmL &&
      this.loadModel.forearmR &&
      this.loadModel.handL &&
      this.loadModel.handR &&
      // legs area
      this.loadModel.pelvisL &&
      this.loadModel.pelvisR &&
      this.loadModel.thighL &&
      this.loadModel.thighR &&
      this.loadModel.shinL &&
      this.loadModel.shinR
    ) {
      this.loadLeftFist.make_left_fist();
      this.loadRightFist.make_right_fist();

      gsap.to(this.loadModel.pelvisL.quaternion, {
        _w: 0.47,
        _x: -0.27,
        _y: -0.71,
        _z: -0.45,
        duration: 1.1,
      });

      gsap.to(this.loadModel.pelvisR.quaternion, {
        _w: 0.47,
        _x: -0.27,
        _y: 0.71,
        _z: 0.45,
        duration: 1.1,
      });

      gsap.to(this.loadModel.thighL.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.0,
        _z: 0.0,
        duration: 1.1,
      });

      gsap.to(this.loadModel.thighR.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.0,
        _z: 0.0,
        duration: 1.1,
      });
      gsap.to(this.loadModel.shinL.quaternion, {
        _w: 0.99,
        _x: 0.1,
        _y: 0.0,
        _z: -0.02,
        duration: 1.1,
      });

      gsap.to(this.loadModel.shinR.quaternion, {
        _w: 0.99,
        _x: 0.1,
        _y: -0.0,
        _z: 0.02,
        duration: 1.1,
      });

      gsap.to(this.loadModel.upper_armL.quaternion, {
        // _w: 0.4652,
        // _x: 0.1041,
        // _y: 0.5987,
        // _z: -0.6437,
        _w: 0.5446,
        _x: -0.1669,
        _y: 0.5502,
        _z: -0.6106,
        duration: 1.1,
        //  onComplete: () => {
        //   console.log(this.loadModel.upper_armL?.name + ": ")
        //   console.log(this.loadModel.upper_armL?.quaternion)
        // }
      });

      gsap.to(this.loadModel.upper_armR.quaternion, {
        duration: 1.1,

        // _w: 0.4837,
        // _x: 0.0721,
        // _y: -0.5853,
        // _z: 0.6467,
        _w: 0.5446,
        _x: -0.1669,
        _y: -0.5502,
        _z: 0.6106,
      });
      gsap.to(this.loadModel.forearmL.quaternion, {
        // _w: 0.738,
        // _x: 0.303,
        // _y: 0.3777,
        // _z: -0.4699,
        _w: 0.945,
        _x: 0.2639,
        _y: 0.0696,
        _z: -0.1804,
        duration: 1.1,
      });

      gsap.to(this.loadModel.forearmR.quaternion, {
        duration: 1.1,
        // _w: 0.738,
        // _x: 0.303,
        // _y: -0.3777,
        // _z: 0.4699,
        _w: 0.945,
        _x: 0.2639,
        _y: -0.0696,
        _z: 0.1804,
      });
      gsap.to(this.loadModel.handR.quaternion, {
        duration: 1.1,
        _w: 0.99443656,
        _x: -0.10319804,
        _y: 0.00008172,
        _z: -0.02112079,
      });
      gsap.to(this.loadModel.handL.quaternion, {
        duration: 1.1,
        _w: 0.99443656,
        _x: -0.10319802,
        _y: -0.00008172,
        _z: 0.0211207,
      });

      gsap.to(this.loadModel.spine.position, {
        duration: 1.1,
        x: 0.0,
      });
    }
  };

  // // // choon bi final function area begins
  choon_bi_final = () => {
    if (
      this.loadModel.spine &&
      // arms area
      this.loadModel.shoulderL &&
      this.loadModel.shoulderR &&
      this.loadModel.upper_armL &&
      this.loadModel.upper_armR &&
      this.loadModel.forearmL &&
      this.loadModel.forearmR &&
      this.loadModel.handL &&
      this.loadModel.handR &&
      // legs area
      this.loadModel.pelvisL &&
      this.loadModel.pelvisR &&
      this.loadModel.thighL &&
      this.loadModel.thighR &&
      this.loadModel.shinL &&
      this.loadModel.shinR
    ) {
      this.loadLeftFist.make_left_fist();
      this.loadRightFist.make_right_fist();

      gsap.to(this.loadModel.pelvisL.quaternion, {
        _w: 0.47,
        _x: -0.27,
        _y: -0.71,
        _z: -0.45,
        duration: 1.1,
      });

      gsap.to(this.loadModel.pelvisR.quaternion, {
        _w: 0.47,
        _x: -0.27,
        _y: 0.71,
        _z: 0.45,
        duration: 1.1,
      });

      gsap.to(this.loadModel.thighL.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.0,
        _z: 0.0,
        duration: 1.1,
      });

      gsap.to(this.loadModel.thighR.quaternion, {
        _w: 0.19,
        _x: 0.98,
        _y: 0.0,
        _z: 0.0,
        duration: 1.1,
      });
      gsap.to(this.loadModel.shinL.quaternion, {
        _w: 0.99,
        _x: 0.1,
        _y: 0.0,
        _z: -0.02,
        duration: 1.1,
      });

      gsap.to(this.loadModel.shinR.quaternion, {
        _w: 0.99,
        _x: 0.1,
        _y: -0.0,
        _z: 0.02,
        duration: 1.1,
      });

      gsap.to(this.loadModel.upper_armL.quaternion, {
        // _w: 0.4652,
        // _x: 0.1041,
        // _y: 0.5987,
        // _z: -0.6437,
        _w: 0.5446,
        _x: -0.1669,
        _y: 0.5502,
        _z: -0.6106,
        duration: 1.1,
        //  onComplete: () => {
        //   console.log(this.loadModel.upper_armL?.name + ": ")
        //   console.log(this.loadModel.upper_armL?.quaternion)
        // }
      });

      gsap.to(this.loadModel.upper_armR.quaternion, {
        duration: 1.1,

        // _w: 0.4837,
        // _x: 0.0721,
        // _y: -0.5853,
        // _z: 0.6467,
        _w: 0.5446,
        _x: -0.1669,
        _y: -0.5502,
        _z: 0.6106,
      });
      gsap.to(this.loadModel.forearmL.quaternion, {
        // _w: 0.738,
        // _x: 0.303,
        // _y: 0.3777,
        // _z: -0.4699,
        _w: 0.945,
        _x: 0.2639,
        _y: 0.0696,
        _z: -0.1804,
        duration: 1.1,
      });

      gsap.to(this.loadModel.forearmR.quaternion, {
        duration: 1.1,
        // _w: 0.738,
        // _x: 0.303,
        // _y: -0.3777,
        // _z: 0.4699,
        _w: 0.945,
        _x: 0.2639,
        _y: -0.0696,
        _z: 0.1804,
      });
      gsap.to(this.loadModel.handR.quaternion, {
        duration: 1.1,
        _w: 0.99443656,
        _x: -0.10319804,
        _y: 0.00008172,
        _z: -0.02112079,
      });
      gsap.to(this.loadModel.handL.quaternion, {
        duration: 1.1,
        _w: 0.99443656,
        _x: -0.10319802,
        _y: -0.00008172,
        _z: 0.0211207,
      });

      gsap.to(this.loadModel.spine.position, {
        duration: 1.1,
        x: 0.0,
        y: 1.1,
      });
    }
  };
}
