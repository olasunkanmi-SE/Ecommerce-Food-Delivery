import { GeoService } from './../../home/services/geo.service';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntil } from 'rxjs/operators';
import { Observable, Subject, ReplaySubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  backendAPI = environment.backendAPI;
  location: { lat: string; lng: string };
  longitude;
  latitude;
  businesses;
  term = 'clubs';
  destroy$: Subject<boolean> = new Subject<boolean>();
  getCordinate$: Observable<any>;
  cordinateSub: Subscription;
  //Cache the http response
  businesses$: ReplaySubject<any> = new ReplaySubject<any>(1);
  constructor(
    private httpClient: HttpClient,
    private geoService: GeoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getBusinesses() {
    this.getUserLocation();
    return this.httpClient
      .get(
        `${this.backendAPI}/search?term=${this.term}&latitude=${this.latitude}&longitude=${this.longitude}`
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
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
