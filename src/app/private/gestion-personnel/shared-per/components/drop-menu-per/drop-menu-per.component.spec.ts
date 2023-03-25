import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMenuPerComponent } from './drop-menu-per.component';

describe('DropMenuPerComponent', () => {
  let component: DropMenuPerComponent;
  let fixture: ComponentFixture<DropMenuPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropMenuPerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropMenuPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
