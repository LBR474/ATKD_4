import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


// angular three imports
import { NgtCanvas} from '@angular-three/core';
import { NgtPrimitive, NgtPrimitiveModule } from '@angular-three/core/primitive'
import { NgtColorAttribute } from '@angular-three/core/attributes';
import { XyzComponent } from './xyz/xyz.component';
import { NgtAmbientLight, NgtPointLight } from '@angular-three/core/lights';
import { NgtGridHelper, NgtAxesHelper, NgtBoxHelper } from '@angular-three/core/helpers'
import {NgtPerspectiveCamera} from '@angular-three/core/cameras'
import { NgtSkeletonHelper } from '@angular-three/core/helpers';
import { NgtMeshStandardMaterial, NgtMeshBasicMaterial} from '@angular-three/core/materials'
import {NgtMesh} from '@angular-three/core/meshes'
import {NgtBoxGeometry} from '@angular-three/core/geometries'


// soba imports
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { Xyz2Component } from './xyz2/xyz2.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    Xyz2Component
  ],
  imports: [
    BrowserModule,
    NgtCanvas,
    NgtPrimitive,
    NgtColorAttribute,
    NgtAmbientLight,
    NgtGridHelper,
    NgtPerspectiveCamera,
    NgtSobaOrbitControls,
    NgtSkeletonHelper,
    NgtMeshStandardMaterial,
    NgtPointLight,
    NgtAxesHelper,
    NgtMesh,
    NgtBoxGeometry,
    NgtMeshBasicMaterial,
    NgtBoxHelper,
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
