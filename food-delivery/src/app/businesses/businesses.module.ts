import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessesRoutingModule } from './businesses-routing.module';
import { BusinessesComponent } from './businesses.component';
import { BusinessComponent } from './business/business.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { MatModule } from '../shared/components/mat/mat.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [BusinessesComponent, BusinessComponent, BusinessListComponent],
  imports: [CommonModule, BusinessesRoutingModule, MatModule, NgbModule],
})
export class BusinessesModule {}
