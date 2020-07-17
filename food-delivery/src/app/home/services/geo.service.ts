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
            setTimeout(() => {
              this.location = {
                lng: position.coords.longitude,
                lat: position.coords.latitude,
              };
            }, 1000);

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
