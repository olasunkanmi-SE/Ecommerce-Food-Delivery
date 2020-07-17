import { BusinessService } from './../shared/business.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss'],
})
export class BusinessListComponent implements OnInit {
  businesses$: Observable<any>;
  businessSub: Subscription;
  businesses;
  constructor(
    private businessService: BusinessService,
    config: NgbRatingConfig
  ) {
    this.businesses$ = this.businessService.businesses$.asObservable();
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit(): void {
    if (this.getbusinesses()) {
      this.businesses = this.getbusinesses();
    } else {
      this.persistBusinesses();
    }
  }
  getbusinesses() {
    return JSON.parse(localStorage.getItem('businesses'));
  }
  persistBusinesses() {
    this.businessSub = this.businesses$.subscribe((res) => {
      console.log(res);
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
