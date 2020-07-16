import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessesRoutingModule } from './businesses-routing.module';
import { BusinessesComponent } from './businesses.component';
import { BusinessComponent } from './business/business.component';
import { BusinessListComponent } from './business-list/business-list.component';

@NgModule({
  declarations: [BusinessesComponent, BusinessComponent, BusinessListComponent],
  imports: [CommonModule, BusinessesRoutingModule],
})
export class BusinessesModule {}
