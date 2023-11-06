import { RouterModule, Routes } from '@angular/router';

import { AutofocusComponent } from './components/2-autofocus/autofocus.component';
import { CustomValidatorComponent } from './components/1-custom-validator/custom-validator.component';
import { HomeComponent } from './components/home/home.component';
import { LazyLoadComponent } from './components/3-lazy-load/lazy-load.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'custom-validator',
    component: CustomValidatorComponent,
  },

  {
    path: 'autofocus',
    component: AutofocusComponent,
  },

  {
    path: 'lazy-load',
    component: LazyLoadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
