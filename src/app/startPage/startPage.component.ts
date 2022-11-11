// Angular core imports
import { Component, OnInit } from '@angular/core';

// soba imports
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports
import * as THREE from 'three';
import { Object3D } from 'three';

// gsap import
import { gsap } from 'gsap';


//import { DemoPipe } from '../demo.pipe';
import { AttentionComponent } from '../attention/attention.component';
import { DataService } from '../data.service';
@Component({
  providers: [AttentionComponent],
  selector: 'app-startPage',
  templateUrl: './startPage.component.html',
  styleUrls: ['./startPage.component.css'],
})
export class StartPageComponent implements OnInit {
  choonbi: string = 'choOn bi';

  public bgcolor = new THREE.Color(0x5f5f00);
  public grid_center_line_color = new THREE.Color(0xff5f00);

  model$ = this.ngtGLTFLoader.load('/assets/TKD_girl_7.glb');

 
  constructor(
    private ngtGLTFLoader: NgtGLTFLoader,
    public comp: AttentionComponent,
    public data: DataService
  ) {}

  ngOnInit(): void {}



  // // // choon bi function area begins
  choon_bi_up_arms = () => {
    if (
      this.data.spine &&
      this.data.handL &&
      this.data.shoulderL &&
      this.data.shoulderR &&
      this.data.upper_armL &&
      this.data.upper_armR &&
      this.data.forearmL &&
      this.data.forearmR &&
      this.data.handR &&
      this.data.pelvisL &&
      this.data.pelvisR
    ) {
      this.make_left_fist();
      this.make_right_fist();
      gsap.to(this.data.shoulderL.position, {
        z: -0.1,
        duration: 1,
      });
      gsap.to(this.data.shoulderR.position, {
        z: -0.1,
        duration: 1,
      });
      gsap.to(this.data.shoulderL.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: -0.59,
        _z: -0.55,
        duration: 1,
      });
      gsap.to(this.data.shoulderR.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: 0.59,
        _z: 0.55,
        duration: 1,
      });

      gsap.to(this.data.upper_armL.quaternion, {
        _w: 0.5,
        _x: 0.12,
        _y: 0.78,
        _z: -0.33,
        duration: 1,
      });

      gsap.to(this.data.upper_armR.quaternion, {
        duration: 1,
        _w: 0.5,
        _x: 0.12,
        _y: -0.78,
        _z: 0.33,
      });

      gsap.to(this.data.forearmL.quaternion, {
        _w: 0.8,
        _x: 0.6,
        _y: 0.04,
        _z: 0.02,
        duration: 1,
      });

      gsap.to(this.data.forearmR.quaternion, {
        duration: 1,
        _w: 0.8,
        _x: 0.6,
        _y: 0.04,
        _z: 0.02,
      });

      gsap.to(this.data.pelvisL.quaternion, {
        _w: 0.55,
        _x: -0.43,
        _y: -0.58,
        _z: -0.4,
        duration: 1,
      });
      gsap.to(this.data.pelvisR.quaternion, {
        _w: 0.55,
        _x: -0.43,
        _y: 0.58,
        _z: 0.4,
        duration: 1,
      });
      gsap.to(this.data.spine.position, {
        duration: 1,
        x: 0.0,
        onComplete: this.choon_bi,
      });
    }
  };

  // // // choon bi function area begins
  choon_bi = () => {
   
    if (
      this.data.spine &&
      this.data.handL &&
      this.data.shoulderL &&
      this.data.shoulderR &&
      this.data.upper_armL &&
      this.data.upper_armR &&
      this.data.forearmL &&
      this.data.forearmR &&
      this.data.handR &&
      this.data.pelvisL &&
      this.data.pelvisR
    ) {

      gsap.to(this.data.shoulderL.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: -0.59,
        _z: -0.55,
        duration: 1,
      });
      gsap.to(this.data.shoulderR.quaternion, {
        _w: 0.26,
        _x: -0.53,
        _y: 0.59,
        _z: 0.55,
        duration: 1,
      });

      gsap.to(this.data.upper_armL.quaternion, {
        _w: 0.3,
        _x: -0.23,
        _y: 0.76,
        _z: -0.52,
        duration: 1,
      });

      gsap.to(this.data.upper_armR.quaternion, {
        duration: 1,
        _w: 0.3,
        _x: -0.23,
        _y: -0.76,
        _z: 0.52,
      });
      gsap.to(this.data.forearmL.quaternion, {
        _w: 0.95,
        _x: 0.31,
        _y: 0.04,
        _z: 0.02,
        duration: 1,
      });

      gsap.to(this.data.forearmR.quaternion, {
        duration: 1,
        _w: 0.95,
        _x: 0.31,
        _y: 0.04,
        _z: 0.02,
      });
    }
  };

  // // // short stance leg up function area begins
  short_stance_leg_up = () => {
    if (
      this.data.spine &&
      this.data.pelvisL &&
      this.data.pelvisR &&
      this.data.thighL &&
      this.data.thighR &&
      this.data.shinL &&
      this.data.shinR &&
      this.data.footR &&
      this.data.footL
    ) {
      gsap.to(this.data.spine.position, {
        y: 0.95,
        duration: 1,
      });
      gsap.to(this.data.spine.quaternion, {
        duration: 1,
        _w: 0.7,
        _x: 0.09,
        _y: 0.7,
        _z: -0.09,
      });

      gsap.to(this.data.thighR.quaternion, {
        _w: 0.35,
        _x: -0.59,
        _y: 0.47,
        _z: -0.56,

        duration: 1,
      });
      gsap.to(this.data.shinR.quaternion, {
        duration: 1,
        _w: 0.96,
        _x: 0.27,
        _y: 0.0,
        _z: -0.0,
        onComplete: this.data.calling_data_service,
        onCompleteParams: [this.data.spine],
      });
      gsap.to(this.data.footR.quaternion, {
        duration: 1,
        _w: 0.65,
        _x: -0.76,
        _y: 0.1,
        _z: 0.03,
      });

      gsap.to(this.data.thighL.quaternion, {
        _w: 0.23,
        _x: -0.7,
        _y: -0.58,
        _z: 0.34,
        duration: 1,
      });

      gsap.to(this.data.shinL.quaternion, {
        duration: 1,
        _w: 0.96,
        _x: 0.27,
        _y: 0.0,
        _z: -0.0,
      });
      gsap.to(this.data.footL.quaternion, {
        duration: 1,
        _w: 0.79,
        _x: -0.62,
        _y: 0.01,
        _z: -0.03,
      });
    }
  };



  // // // make right fist function area

  make_right_fist = () => {
    
    // // thumb right
    if (this.data.thumb03R) {
      gsap.to(this.data.thumb03R.quaternion, {
        _w: 0.05,
        _x: -1.0,
        _y: 0.05,
        _z: 0.0,
        duration: 1,
      });
    }

    // // first knuckle
    if (this.data.f_index01R) {
      gsap.to(this.data.f_index01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.data.f_middle01R) {
      gsap.to(this.data.f_middle01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.data.f_ring01R) {
      gsap.to(this.data.f_ring01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.data.f_pinky01R) {
      gsap.to(this.data.f_pinky01R.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }

    // // second knuckle
    if (this.data.f_index02R) {
      gsap.to(this.data.f_index02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.data.f_middle02R) {
      gsap.to(this.data.f_middle02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.data.f_ring02R) {
      gsap.to(this.data.f_ring02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.data.f_pinky02R) {
      gsap.to(this.data.f_pinky02R.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
  };

  // // // make left fist function area

  make_left_fist = () => {
    
    // // thumb left
    if (this.data.thumb03L) {
      gsap.to(this.data.thumb03L.quaternion, {
        _w: 0.05,
        _x: -1.0,
        _y: 0.05,
        _z: 0.0,
        duration: 1,
      });
    }

    // // first knuckle
    if (this.data.f_index01L) {
      gsap.to(this.data.f_index01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.data.f_middle01L) {
      gsap.to(this.data.f_middle01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.data.f_ring01L) {
      gsap.to(this.data.f_ring01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }
    if (this.data.f_pinky01L) {
      gsap.to(this.data.f_pinky01L.quaternion, {
        _w: 0.73,
        _x: 0.69,
        _y: 0.02,
        _z: 0.05,
        duration: 1,
      });
    }

    // // second knuckle
    if (this.data.f_index02L) {
      gsap.to(this.data.f_index02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.data.f_middle02L) {
      gsap.to(this.data.f_middle02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.data.f_ring02L) {
      gsap.to(this.data.f_ring02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
      });
    }
    if (this.data.f_pinky02L) {
      gsap.to(this.data.f_pinky02L.quaternion, {
        _w: 0.75,
        _x: 0.66,
        _y: 0.03,
        _z: 0.03,
        duration: 1,
  });
    }
  };

  setInitial(controls: NgtSobaOrbitControls) {
    const orbitControl = controls.camera;
    
    if (orbitControl) {
      orbitControl.position.setY(4);
    }
  }
}
