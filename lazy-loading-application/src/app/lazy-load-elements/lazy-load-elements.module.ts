import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadElementsRoutingModule } from './lazy-load-elements-routing.module';
import { LazyLoadElementsComponent } from './lazy-load-elements.component';


@NgModule({
  declarations: [
    LazyLoadElementsComponent
  ],
  imports: [
    CommonModule,
    LazyLoadElementsRoutingModule
  ]
})
export class LazyLoadElementsModule { }
