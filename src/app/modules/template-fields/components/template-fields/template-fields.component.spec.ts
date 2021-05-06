import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFieldsComponent } from './template-fields.component';

describe('TemplateFieldsComponent', () => {
  let component: TemplateFieldsComponent;
  let fixture: ComponentFixture<TemplateFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
