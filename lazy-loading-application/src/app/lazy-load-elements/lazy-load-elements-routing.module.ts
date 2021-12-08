import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadElementsComponent } from './lazy-load-elements.component';

const routes: Routes = [{ path: '', component: LazyLoadElementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadElementsRoutingModule { }
