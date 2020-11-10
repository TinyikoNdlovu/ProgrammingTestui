import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFodComponent } from './add-edit-fod.component';

describe('AddEditFodComponent', () => {
  let component: AddEditFodComponent;
  let fixture: ComponentFixture<AddEditFodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
