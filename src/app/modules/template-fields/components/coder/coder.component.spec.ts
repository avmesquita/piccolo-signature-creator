import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoderComponent } from './coder.component';

describe('CoderComponent', () => {
  let component: CoderComponent;
  let fixture: ComponentFixture<CoderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
