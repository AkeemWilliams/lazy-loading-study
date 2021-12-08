import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreloadServiceService } from './preload-service.service';
import { StandardBehaviourComponent } from './standard-behaviour/standard-behaviour.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'lazy-route-preload', loadChildren: () => import('./lazy-route-preload/lazy-route-preload.module').then(m => m.LazyRoutePreloadModule), data:{preload:true}  }, 
  { path: 'lazy-route', loadChildren: () => import('./lazy-route/lazy-route.module').then(m => m.LazyRouteModule)},
  { path: 'lazy-load-elements', loadChildren: () => import('./lazy-load-elements/lazy-load-elements.module').then(m => m.LazyLoadElementsModule) },
  { path: 'standard-behaviour', component: StandardBehaviourComponent },
  { path: '',   redirectTo: '/first-component', pathMatch: 'full' }, // redirect to `first-component`


];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      preloadingStrategy: PreloadServiceService
    }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
