import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoFooterComponent } from './lo-footer.component';

describe('LoFooterComponent', () => {
  let component: LoFooterComponent;
  let fixture: ComponentFixture<LoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
