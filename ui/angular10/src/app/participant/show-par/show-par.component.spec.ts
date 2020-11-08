import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParComponent } from './show-par.component';

describe('ShowParComponent', () => {
  let component: ShowParComponent;
  let fixture: ComponentFixture<ShowParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowParComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
