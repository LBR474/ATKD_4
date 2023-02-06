import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// angular material module imports
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { MatGridListModule } from '@angular/material/grid-list';

import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatTabsModule,
  ],
  exports: [
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatTabsModule,
  ],
})
export class MaterialDesignModule {}
