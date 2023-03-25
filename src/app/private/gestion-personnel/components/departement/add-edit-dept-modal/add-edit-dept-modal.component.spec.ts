import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeptModalComponent } from './add-edit-dept-modal.component';

describe('AddEditDeptModalComponent', () => {
  let component: AddEditDeptModalComponent;
  let fixture: ComponentFixture<AddEditDeptModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeptModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDeptModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
