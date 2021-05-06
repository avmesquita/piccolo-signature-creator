import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldsDrawComponent } from './custom-fields-draw.component';

describe('CustomFieldsDrawComponent', () => {
  let component: CustomFieldsDrawComponent;
  let fixture: ComponentFixture<CustomFieldsDrawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFieldsDrawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFieldsDrawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
