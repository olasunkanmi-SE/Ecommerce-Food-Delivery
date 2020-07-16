import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessesRoutingModule } from './businesses-routing.module';
import { BusinessesComponent } from './businesses.component';
import { BusinessComponent } from './business/business.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BusinessesComponent, BusinessComponent, BusinessListComponent],
  imports: [CommonModule, BusinessesRoutingModule, HttpClientModule],
})
export class BusinessesModule {}
