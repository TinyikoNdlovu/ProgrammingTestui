import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditScaComponent } from './add-edit-sca.component';

describe('AddEditScaComponent', () => {
  let component: AddEditScaComponent;
  let fixture: ComponentFixture<AddEditScaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditScaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditScaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
