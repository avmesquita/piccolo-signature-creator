import { TestBed } from '@angular/core/testing';

import { TemplateFieldsService } from './template-fields.service';

describe('TemplateFieldsService', () => {
  let service: TemplateFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
