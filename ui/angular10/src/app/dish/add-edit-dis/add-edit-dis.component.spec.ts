import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDisComponent } from './add-edit-dis.component';

describe('AddEditDisComponent', () => {
  let component: AddEditDisComponent;
  let fixture: ComponentFixture<AddEditDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
