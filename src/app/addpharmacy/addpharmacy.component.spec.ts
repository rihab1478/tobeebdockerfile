import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpharmacyComponent } from './addpharmacy.component';

describe('AddpharmacyComponent', () => {
  let component: AddpharmacyComponent;
  let fixture: ComponentFixture<AddpharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpharmacyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddpharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
