import { RouterModule, Routes } from '@angular/router';

import { AutofocusComponent } from './components/2-autofocus/autofocus.component';
import { CustomValidatorComponent } from './components/1-custom-validator/custom-validator.component';
import { DraggableComponent } from './components/4-draggable/draggable.component';
import { EllipsisComponent } from './components/5-ellipsis/EllipsisComponent';
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

  {
    path: 'draggable',
    component: DraggableComponent,
  },
  {
    path: 'ellipsis',
    component: EllipsisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
