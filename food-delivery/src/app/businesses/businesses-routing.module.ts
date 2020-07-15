import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessesComponent } from './businesses.component';

const routes: Routes = [{ path: '', component: BusinessesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessesRoutingModule { }
