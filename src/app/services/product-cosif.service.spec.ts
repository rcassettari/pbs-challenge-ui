import { TestBed } from '@angular/core/testing';

import { ProductCosifService } from './product-cosif.service';

describe('ProductCosifService', () => {
  let service: ProductCosifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductCosifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
