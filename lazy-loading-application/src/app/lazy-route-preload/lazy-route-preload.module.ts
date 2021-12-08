import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutePreloadRoutingModule } from './lazy-route-preload-routing.module';
import { LazyRoutePreloadComponent } from './lazy-route-preload.component';


@NgModule({
  declarations: [
    LazyRoutePreloadComponent
  ],
  imports: [
    CommonModule,
    LazyRoutePreloadRoutingModule
  ]
})
export class LazyRoutePreloadModule { }
