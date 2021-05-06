import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersEditorComponent } from './parameters-editor.component';

describe('ParametersEditorComponent', () => {
  let component: ParametersEditorComponent;
  let fixture: ComponentFixture<ParametersEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
