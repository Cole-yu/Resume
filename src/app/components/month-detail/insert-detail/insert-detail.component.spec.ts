import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDetailComponent } from './insert-detail.component';

describe('InsertDetailComponent', () => {
  let component: InsertDetailComponent;
  let fixture: ComponentFixture<InsertDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
