import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoService {
  geoLocation$: Subject<any> = new Subject<any>();
  location;
  lat;
  lng: {};
  private started = false;
  constructor() {}

  getUserLocation(options?) {
    if (!this.started) {
      this.started = true;
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.location = { lng: this.lng, lat: this.lat };
            if (this.location) {
              localStorage.setItem('location', JSON.stringify(this.location));
            }
            this.geoLocation$.next(position);
          }
        },
        (err) => {
          this.geoLocation$.error(err);
        },
        options
      );
    }
  }
}
