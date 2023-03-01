import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
// import { AboutComponent } from './components/about/about.component';
// import { LandingComponent } from './components/landing/landing.component';
// import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    loadChildren: () => import('./components/layout.module').then(m => m.LayoutModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
