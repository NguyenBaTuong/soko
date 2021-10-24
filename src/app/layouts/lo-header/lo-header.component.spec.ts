import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoHeaderComponent } from './lo-header.component';

describe('LoHeaderComponent', () => {
  let component: LoHeaderComponent;
  let fixture: ComponentFixture<LoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
