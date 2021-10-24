import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpBestSellerComponent } from './cp-best-seller.component';

describe('CpBestSellerComponent', () => {
  let component: CpBestSellerComponent;
  let fixture: ComponentFixture<CpBestSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpBestSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpBestSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
