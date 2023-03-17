import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDevisComponent } from './add-edit-devis.component';

describe('AddEditDevisComponent', () => {
  let component: AddEditDevisComponent;
  let fixture: ComponentFixture<AddEditDevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDevisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditDevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
