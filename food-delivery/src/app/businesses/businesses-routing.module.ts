import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusinessesComponent } from './businesses.component';
import { BusinessListComponent } from './business-list/business-list.component';

const routes: Routes = [
  { path: '', component: BusinessesComponent },
  { path: 'businesses', component: BusinessListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessesRoutingModule {}
