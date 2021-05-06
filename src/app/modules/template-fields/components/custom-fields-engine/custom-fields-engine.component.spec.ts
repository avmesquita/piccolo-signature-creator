import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldsEngineComponent } from './custom-fields-engine.component';

describe('CustomFieldsEngineComponent', () => {
  let component: CustomFieldsEngineComponent;
  let fixture: ComponentFixture<CustomFieldsEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFieldsEngineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFieldsEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
