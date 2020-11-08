import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDisComponent } from './show-dis.component';

describe('ShowDisComponent', () => {
  let component: ShowDisComponent;
  let fixture: ComponentFixture<ShowDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
