import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <--- JavaScript import from Angular
import { MaterialDesignModule } from './material-design/material-design.module';

import { AppComponent } from './app.component';
import { StartPageComponent } from './startPage/startPage.component';
import { AngularThreeNGTModule } from './angular-three-ngt/angular-three-ngt.module';
import { AppRoutingModule } from './app-routing.module';
import { BP2Component } from './bp2/bp2.component';
import { BlankComponent } from './blank/blank.component';
import { AttentionService } from './movement-services/attention.service';
import { BP1CollateMovement } from './movement-services/bp1collatemovement.service';
import { ChoonbiservService } from './movement-services/choonbiserv.service';


@NgModule({
  declarations: [AppComponent, StartPageComponent, BP2Component, BlankComponent],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    AngularThreeNGTModule,
    AppRoutingModule,
  ],
  providers: [
    AttentionService,
    BP1CollateMovement,
    ChoonbiservService,

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
