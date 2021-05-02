import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureGeneratorComponent } from './signature-generator.component';

describe('SignatureGeneratorComponent', () => {
  let component: SignatureGeneratorComponent;
  let fixture: ComponentFixture<SignatureGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignatureGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
