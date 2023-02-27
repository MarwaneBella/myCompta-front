import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClientFormComponent } from './select-client-form.component';

describe('SelectClientFormComponent', () => {
  let component: SelectClientFormComponent;
  let fixture: ComponentFixture<SelectClientFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectClientFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
