import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowScaComponent } from './show-sca.component';

describe('ShowScaComponent', () => {
  let component: ShowScaComponent;
  let fixture: ComponentFixture<ShowScaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowScaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowScaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
