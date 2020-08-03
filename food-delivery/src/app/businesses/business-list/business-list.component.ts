import { BusinessService } from './../shared/business.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MatAccordion } from '@angular/material/expansion';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../root-store/state';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss'],
})
export class BusinessListComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  businesses$: Observable<any>;
  businessSub: Subscription;
  businesses;
  isLoading$: Observable<boolean>;
  constructor(private businessService: BusinessService, private store: Store) {
    this.businesses$ = this.businessService.businesses$.asObservable();
    this.persistBusinesses();
    this.businesses = this.getbusinesses();
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }
  getbusinesses() {
    return JSON.parse(localStorage.getItem('businesses'));
  }
  persistBusinesses() {
    this.businessSub = this.businesses$.subscribe((res) => {
      this.businesses = res.businesses;
      let localBusinesses = localStorage.setItem(
        'businesses',
        JSON.stringify(this.businesses)
      );
    });
  }
  ngOnDestroy(): void {
    if (this.businessSub) {
      this.businessSub.unsubscribe();
    }
  }
}
