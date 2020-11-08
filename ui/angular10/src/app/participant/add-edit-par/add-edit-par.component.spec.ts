import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditParComponent } from './add-edit-par.component';

describe('AddEditParComponent', () => {
  let component: AddEditParComponent;
  let fixture: ComponentFixture<AddEditParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditParComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
