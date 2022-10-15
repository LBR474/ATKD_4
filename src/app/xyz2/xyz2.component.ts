import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

// three imports 
import * as THREE from 'three'

@Component({
  selector: 'app-xyz2',
  //templateUrl: './xyz2.component.html',

  // <canvas #canvasElement></canvas>
  template: `
    <div class="canvas-container">
      <ngt-canvas>
        <ngt-mesh o3d (animateReady)="onCubeAnimate($event.object)">
          <ngt-box-geometry [ngtBoxHelper]="['red']"></ngt-box-geometry>
          <ngt-mesh-basic-material
            [color]="'hotpink'"
          ></ngt-mesh-basic-material>
        </ngt-mesh>
      </ngt-canvas>
      Canvas is here
    </div>
  `,
  styleUrls: ['./xyz2.component.css'],
})
export class Xyz2Component implements OnInit {
  @ViewChild('canvasElement', { static: true })
  canvasElementRef!: ElementRef<HTMLCanvasElement>;

  constructor() {}

  onCubeAnimate(cube: THREE.Mesh) {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  }

  ngOnInit(): void {
    //   const scene = new THREE.Scene();
    //   const camera = new THREE.PerspectiveCamera(
    //     75,
    //     window.innerWidth / window.innerHeight,
    //     0.1,
    //     1000
    //   );
    //   const renderer = new THREE.WebGLRenderer();
    //   renderer.setSize(window.innerWidth, window.innerHeight);
    //   document.body.appendChild(renderer.domElement);
    //   const geometry = new THREE.BoxGeometry(1, 1, 1);
    //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //   const cube = new THREE.Mesh(geometry, material);
    //   scene.add(cube);
    //   camera.position.z = 5;
    //   function animate() {
    //     requestAnimationFrame(animate);
    //     cube.rotation.x += 0.01;
    //     cube.rotation.y += 0.01;
    //     renderer.render(scene, camera);
    //   }
    //   animate();
  }
}
