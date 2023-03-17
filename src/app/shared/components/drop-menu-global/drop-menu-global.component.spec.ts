import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropMenuGlobalComponent } from './drop-menu-global.component';

describe('DropMenuGlobalComponent', () => {
  let component: DropMenuGlobalComponent;
  let fixture: ComponentFixture<DropMenuGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropMenuGlobalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropMenuGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
