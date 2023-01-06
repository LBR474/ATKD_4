import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import {bp2} from './bp2/bp2.component'
import { BP2Component } from './bp2/bp2.component';
import { StartPageComponent } from './startPage/startPage.component';
import { BlankComponent } from './blank/blank.component';

const routes: Routes = [
  {
    path: 'BP1',
    component: StartPageComponent,
  },
  { path: 'BP2', component: BP2Component },
  { path: 'Blank', component: BlankComponent },
  { path: '', redirectTo: '/BP1', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
