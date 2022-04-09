import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  geoLocation$: Subject<any> = new Subject<{lng:string, lat:string}>();
  location;
  lat;
  lng: {};
  private started = false;
  constructor() {}

  getUserLocation(options?) {
    if (!this.started) {
      this.started = true;
    }
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            this.location = {
              lng: position.coords.longitude,
              lat: position.coords.latitude,
            };
            this.geoLocation$.next(position);
            return this.location;
          }
        },
        (err) => {
          this.geoLocation$.error(err);
        },
        options
      );
    }
  }
