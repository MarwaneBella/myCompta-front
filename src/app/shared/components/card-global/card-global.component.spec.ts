import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGlobalComponent } from './card-global.component';

describe('CardGlobalComponent', () => {
  let component: CardGlobalComponent;
  let fixture: ComponentFixture<CardGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
