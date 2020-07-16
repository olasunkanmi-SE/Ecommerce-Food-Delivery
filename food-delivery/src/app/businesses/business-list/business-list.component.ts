import { BusinessService } from './../shared/business.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss'],
})
export class BusinessListComponent implements OnInit {
  businesses$: Observable<any>;
  businessSub: Subscription;
  constructor(private businessService: BusinessService) {
    this.businesses$ = this.businessService.businesses$.pipe();
  }

  ngOnInit(): void {
    this.businessSub = this.businesses$.subscribe((res) => console.log(res));
  }
}
