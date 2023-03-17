import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerotationComponent } from './numerotation.component';

describe('NumerotationComponent', () => {
  let component: NumerotationComponent;
  let fixture: ComponentFixture<NumerotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumerotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
