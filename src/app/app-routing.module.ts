import { RouterModule, Routes } from '@angular/router';

import { AutofocusComponent } from './components/2-autofocus/autofocus/autofocus.component';
import { CustomValidatorComponent } from './components/1-custom-validator/custom-validator.component';
import { HomeComponent } from './components/home/home.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
