import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


// angular three imports
import { NgtCanvas} from '@angular-three/core';
import { NgtPrimitive, NgtPrimitiveModule } from '@angular-three/core/primitive'
import { NgtColorAttribute } from '@angular-three/core/attributes';
import { XyzComponent } from './xyz/xyz.component';
import { NgtAmbientLight, NgtPointLight } from '@angular-three/core/lights';
import { NgtGridHelper } from '@angular-three/core/helpers'
import {NgtPerspectiveCamera} from '@angular-three/core/cameras'
import { NgtSkeletonHelper } from '@angular-three/core/helpers';
import { NgtMeshStandardMaterial} from '@angular-three/core/materials'


// soba imports
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent
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
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
