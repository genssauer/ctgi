import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule, MatGridListModule, MatSortModule} from '@angular/material';

import {MainRoutingModule} from './routers/main-routing.module';

import {MainComponent} from './containers/main/main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MatSortModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class MainModule {
}
