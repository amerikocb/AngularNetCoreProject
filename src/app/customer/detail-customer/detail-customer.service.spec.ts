import { TestBed } from '@angular/core/testing';

import { DetailCustomerService } from './detail-customer.service';

describe('DetailCustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailCustomerService = TestBed.get(DetailCustomerService);
    expect(service).toBeTruthy();
  });
});
