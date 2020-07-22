import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessesRoutingModule } from './businesses-routing.module';
import { BusinessesComponent } from './businesses.component';
import { BusinessComponent } from './business/business.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { MatModule } from '../shared/components/mat/mat.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchbizComponent } from './searchbiz/searchbiz.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';

@NgModule({
  declarations: [
    BusinessesComponent,
    BusinessComponent,
    BusinessListComponent,
    SearchbizComponent,
    SkeletonLoaderComponent,
  ],
  imports: [
    CommonModule,
    BusinessesRoutingModule,
    MatModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [SearchbizComponent],
})
export class BusinessesModule {}
