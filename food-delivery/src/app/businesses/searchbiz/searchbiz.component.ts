import { BusinessService } from './../shared/business.service';
import { GeoService } from './../../home/services/geo.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap, startWith, map } from 'rxjs/operators';
import { MapsAPILoader } from '@agm/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchbiz',
  templateUrl: './searchbiz.component.html',
  styleUrls: ['./searchbiz.component.scss'],
})
export class SearchbizComponent implements OnInit {
  location$: Observable<any>;
  lng;
  lat;
  userLocation;
  currentLocation;
  searchForm;
  searchControl = new FormControl();
  options: string[] = [
    'restaurants',
    'clubs',
    'delivery',
    'spas',
    'barbers',
    'malls',
    'gyms',
    'groceries',
  ];
  filteredOptions: Observable<string[]>;
  businessSearch: Subject<string> = new Subject<string>();

  constructor(
    private geoService: GeoService,
    private apiLoader: MapsAPILoader,
    private businessService: BusinessService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      search: [''],
    });
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  getLocation() {
    this.getUserLocation();
  }
  private getUserLocation() {
    this.geoService.getUserLocation();
    this.location$ = this.geoService.geoLocation$.pipe(tap());
    this.location$.subscribe((res) => {
      this.lng = res.coords.longitude;
      this.lat = res.coords.latitude;
      this.userLocation = (this.lat, this.lng);
      // this.apiLoader.load().then(() => {
      //   let geoCoder = new google.maps.Geocoder();
      //   let latlng = {
      //     lat: this.lat,
      //     lng: this.lng,
      //   };
      //   geoCoder.geocode({ location: latlng }, (results) => {
      //     if (results[0]) {
      //       this.currentLocation = results[0].formatted_address;
      //     }
      //   });
      // });
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLocaleLowerCase();
    return this.options.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
  }

  searchBusiness() {}

  getSearchValue(searchedTerm): string {
    // let searchTerm: { search: string } = this.searchForm.value;
    // let searchValue: string = searchTerm.search;
    localStorage.setItem('search', searchedTerm);
    this.businessSearch.next(searchedTerm);
    this.businessService.getBusinesses();
    return searchedTerm;
  }
}
