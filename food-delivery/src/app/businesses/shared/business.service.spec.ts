import { TestBed } from '@angular/core/testing';

import { BusinessService } from './business.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

describe('BusinessService', () => {
  let service: BusinessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, Router],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BusinessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
