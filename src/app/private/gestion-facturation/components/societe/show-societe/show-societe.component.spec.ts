import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSocieteComponent } from './show-societe.component';

describe('ShowSocieteComponent', () => {
  let component: ShowSocieteComponent;
  let fixture: ComponentFixture<ShowSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSocieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
