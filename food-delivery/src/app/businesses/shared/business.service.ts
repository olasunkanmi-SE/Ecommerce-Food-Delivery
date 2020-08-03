import { GeoService } from './../../home/services/geo.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntil, shareReplay } from 'rxjs/operators';
import { Observable, Subject, ReplaySubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../root-store/state';
import * as UI from '../../root-store/actions/ui.actions';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  backendAPI = environment.backendAPI;
  location: { lat: string; lng: string };
  longitude;
  latitude;
  businesses;
  // searchedBusiness: Observable<string>;
  // searchSub: Subscription;
  term: string;
  destroy$: Subject<boolean> = new Subject<boolean>();
  getCordinate$: Observable<any>;
  cordinateSub: Subscription;
  //Cache the http response
  businesses$: ReplaySubject<any> = new ReplaySubject<any>(1);
  constructor(
    private httpClient: HttpClient,
    private geoService: GeoService,
    private router: Router,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {}

  getBusinesses() {
    this.term = localStorage.getItem('search');
    this.getUserLocation();
    this.store.dispatch(new UI.startLoading());
    return this.httpClient
      .get(
        `${this.backendAPI}/search?term=${this.term}&latitude=${this.latitude}&longitude=${this.longitude}`
      )
      .pipe(
        takeUntil(this.destroy$),
        shareReplay({ bufferSize: 1, refCount: true })
      )
      .subscribe((res) => {
        this.store.dispatch(new UI.stopLoading());
        this.businesses = res;
        this.businesses$.next(this.businesses);
        this.router.navigate(['businesses']);
      });
  }
  getUserLocation() {
    this.location = this.geoService.location;
    if (location) {
      this.longitude = this.location.lng;
      this.latitude = this.location.lat;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.unsubscribe();
  }
}
