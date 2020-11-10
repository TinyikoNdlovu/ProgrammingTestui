import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFodComponent } from './show-fod.component';

describe('ShowFodComponent', () => {
  let component: ShowFodComponent;
  let fixture: ComponentFixture<ShowFodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
