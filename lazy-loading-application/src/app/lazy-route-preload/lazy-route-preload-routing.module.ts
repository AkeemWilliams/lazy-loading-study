import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyRoutePreloadComponent } from './lazy-route-preload.component';

const routes: Routes = [{ path: '', component: LazyRoutePreloadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutePreloadRoutingModule { }
