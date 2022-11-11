import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';


// angular three imports
import { NgtCanvas} from '@angular-three/core';
import { NgtPrimitive } from '@angular-three/core/primitive'
import { NgtColorAttribute, NgtVector2Attribute } from '@angular-three/core/attributes';
//import { XyzComponent } from './xyz/xyz.component';
import { NgtAmbientLight, NgtHemisphereLight, NgtPointLight, NgtSpotLight, NgtDirectionalLight } from '@angular-three/core/lights';
import { NgtGridHelper, NgtAxesHelper, NgtBoxHelper } from '@angular-three/core/helpers'
import {NgtPerspectiveCamera} from '@angular-three/core/cameras'
import { NgtSkeletonHelper } from '@angular-three/core/helpers';
import { NgtMeshStandardMaterial, NgtMeshBasicMaterial, NgtMeshPhongMaterial} from '@angular-three/core/materials'
import {NgtMesh} from '@angular-three/core/meshes'
import {NgtBoxGeometry, NgtPlaneGeometry} from '@angular-three/core/geometries'


// soba imports
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { AttentionComponent } from './attention/attention.component';
import { StartPageComponent } from './startPage/startPage.component';
//import { DemoPipe } from './demo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    //XyzComponent,
    AttentionComponent,
    StartPageComponent,
    //DemoPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    
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
    NgtPlaneGeometry,
    NgtMeshPhongMaterial,
    NgtHemisphereLight,
    NgtVector2Attribute,
    NgtSpotLight,
    NgtDirectionalLight,
    
    
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
