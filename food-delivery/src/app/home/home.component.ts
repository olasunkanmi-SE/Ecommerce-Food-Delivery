import { GeoService } from './services/geo.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  location$: Observable<any>;
  lng;
  lat;
  getAddress;
  currentLocation;

  constructor(
    private geoService: GeoService,
    private apiLoader: MapsAPILoader
  ) {}

  ngOnInit(): void {}
  getUserLocation() {
    this.location$ = this.geoService.geoLocation$.pipe(tap());
    this.location$.subscribe((res) => {
      this.lng = res.coords.longitude;
      this.lat = res.coords.latitude;
      this.getAddress = (this.lat, this.lng);
      this.apiLoader.load().then(() => {
        let geoCoder = new google.maps.Geocoder();
        let latlng = {
          lat: this.lat,
          lng: this.lng,
        };
        geoCoder.geocode({ location: latlng }, (results) => {
          if (results[0]) {
            this.currentLocation = results[0].formatted_address;
          }
        });
      });
    });
    this.geoService.getUserLocation();
  }
}
