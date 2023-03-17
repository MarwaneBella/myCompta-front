import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSocieteComponent } from './add-edit-societe.component';

describe('AddEditSocieteComponent', () => {
  let component: AddEditSocieteComponent;
  let fixture: ComponentFixture<AddEditSocieteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditSocieteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
