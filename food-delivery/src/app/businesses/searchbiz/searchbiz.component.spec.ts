import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbizComponent } from './searchbiz.component';

describe('SearchbizComponent', () => {
  let component: SearchbizComponent;
  let fixture: ComponentFixture<SearchbizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
