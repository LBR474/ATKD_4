import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import {bp2} from './bp2/bp2.component'
import { AppComponent } from './app.component';
import { BP2Component } from './bp2/bp2.component';
import { Bp3Component } from './bp3/bp3.component';
import { StartPageComponent } from './startPage/startPage.component';
import { Bp4Component } from './bp4/bp4.component';

const routes: Routes = [
  { path: 'Home', component: AppComponent },
  {
    path: 'BP1',
    component: StartPageComponent,
  },
  { path: 'BP2', component: BP2Component },
  {
    path: 'BP3',
    component: Bp3Component,
  },

  { path: 'BP4', component: Bp4Component },
  { path: '', redirectTo: '/BP1', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
