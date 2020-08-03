import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from '../../app/root-store/state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading$: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }
}
